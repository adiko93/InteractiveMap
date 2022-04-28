import { extendType, idArg, list, nonNull, objectType, stringArg } from "nexus";
import { Map } from "./Map";
import { Entity } from "./Entity";
import { ApolloError } from "apollo-server-micro";
import { resolve } from "path";
import { isEmpty } from "lodash-es";

export const Folder = objectType({
  name: "Folder",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("description");
    t.string("color");
    t.string("icon");
    t.string("parentId");
    t.string("mapId");
    t.list.field("entities", {
      type: Entity,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.folder
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .entities();
      },
    });
    t.list.field("childs", {
      type: Folder,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.folder
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .childs();
      },
    });
    t.field("parent", {
      type: Folder,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.folder
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .parent();
      },
    });
    t.field("map", {
      type: Map,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.folder
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .map();
      },
    });
    t.field("mapRoot", {
      type: Map,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.folder
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .mapRoot();
      },
    });
  },
});

export const FoldersQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("folders", {
      args: {
        ids: nonNull(list(nonNull(stringArg()))),
      },
      type: Folder,
      async resolve(_parent, _args, ctx) {
        if (!ctx.user) throw new ApolloError("Unauthorized", "401");
        const token = await ctx.accessToken;
        console.log(_args, token.sub);
        return ctx.prisma.folder.findMany();
      },
    });
    t.field("folder", {
      type: Folder,
      args: {
        id: nonNull(stringArg()),
      },
      resolve(_parent, _args, ctx) {
        return ctx.prisma.folder.findUnique({
          where: { id: _args.id as string },
        });
      },
    });
  },
});

export const FoldersMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createFolder", {
      type: Folder,
      args: {
        parentFolder: nonNull(idArg()),
        color: nonNull(stringArg()),
        icon: nonNull(stringArg()),
        name: nonNull(stringArg()),
      },
      async resolve(_parent, _args, ctx) {
        if (!ctx.user) throw new ApolloError("Unauthorized", "401");
        const folder = await ctx.prisma.folder.findUnique({
          where: {
            id: _args.parentFolder,
          },
          include: {
            mapRoot: true,
          },
        });
        if (isEmpty(folder))
          return new ApolloError("Nie znaleziono folderu", "409");

        const mapId = folder?.mapId || folder?.mapRoot?.id;
        const map = await ctx.prisma.map.findUnique({
          where: {
            id: mapId,
          },
          include: {
            editors: true,
          },
        });

        const token = await ctx.accessToken;
        if (
          map?.createdById !== token.sub &&
          !map?.editors.some((current) => current.id === token.sub)
        )
          throw new ApolloError("Unauthorized", "401");
        return await ctx.prisma.folder.create({
          data: {
            color: _args.color,
            icon: _args.icon,
            name: _args.name,
            createdBy: {
              connect: {
                id: token.sub,
              },
            },
            map: {
              connect: {
                id: map?.id,
              },
            },
            parent: {
              connect: {
                id: _args.parentFolder,
              },
            },
          },
        });
      },
    });
  },
});
