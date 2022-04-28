import { ApolloError } from "apollo-server-micro";
import { includes, isEmpty } from "lodash-es";
import {
  objectType,
  extendType,
  nonNull,
  stringArg,
  enumType,
  arg,
  idArg,
} from "nexus";
import { Json } from "nexus-prisma/scalars";
import { EntityType } from "./EntityType";
import { Folder } from "./Folder";
import { Map } from "./Map";
import { User } from "./User";

export const Entity = objectType({
  name: "Entity",
  definition(t) {
    t.string("id");
    t.field("type", {
      type: "EntityType",
    });
    t.string("name");
    t.string("description");
    t.string("image");
    t.string("color");
    t.string("icon");
    t.json("position", {
      resolve(source) {
        return { values: source.position };
      },
    });
    t.dateTime("createdAt");
    t.dateTime("updatedAt");
    t.field("createdBy", {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.entity
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .createdBy();
      },
    });
    t.string("createdById");
    t.field("updatedBy", {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.entity
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .updatedBy();
      },
    });
    t.string("updatedById");
    t.field("folder", {
      type: Folder,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.entity
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .folder();
      },
    });
  },
});

export const EntityMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createEntity", {
      type: Entity,
      args: {
        folder: nonNull(idArg()),
        type: nonNull(
          arg({
            type: EntityType,
          })
        ),
        name: nonNull(stringArg()),
        description: stringArg(),
        image: stringArg(),
        color: nonNull(stringArg()),
        icon: nonNull(stringArg()),
        position: nonNull(
          arg({
            type: "Json",
          })
        ),
      },
      async resolve(_parent, _args, ctx) {
        if (!ctx.user) throw new ApolloError("Unauthorized", "401");
        const folder = await ctx.prisma.folder.findUnique({
          where: {
            id: _args.folder,
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

        return await ctx.prisma.entity.create({
          data: {
            folder: { connect: { id: _args.folder } },
            type: _args.type,
            name: _args.name,
            color: _args.color,
            createdBy: { connect: { id: token.sub } },
            icon: _args.icon,
            position: _args.position?.values!,
            description: _args?.description,
            image: _args?.image,
          },
        });
      },
    });
  },
});
