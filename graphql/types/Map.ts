import { ApolloError } from "apollo-server-micro";
import { objectType, extendType, nonNull, stringArg } from "nexus";
import { Folder } from "./Folder";

import { User } from "./User";

export const Map = objectType({
  name: "Map",
  definition(t) {
    t.string("id");
    t.field("createdBy", {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.map
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .createdBy();
      },
    });
    t.string("createdById");
    t.string("name");
    t.string("description");
    t.string("color");
    t.string("icon");

    t.list.field("folders", {
      type: Folder,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.map
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .folders();
      },
    });
    t.field("rootFolder", {
      type: Folder,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.map
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .rootFolder();
      },
    });

    t.list.field("editors", {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.map
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .editors();
      },
    });
    t.list.field("users", {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.map
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .users();
      },
    });
  },
});

export const MapsQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("maps", {
      type: "Map",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.map.findMany();
      },
    });
    t.field("map", {
      type: "Map",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_parent, _args, ctx) {
        if (!ctx.user) throw new ApolloError("Unauthorized", "401");
        const token = await ctx.accessToken;
        const map = await ctx.prisma.map.findFirst({
          where: {
            AND: [
              { id: _args.id as string },
              {
                OR: [
                  {
                    editors: { some: { id: token.sub } },
                  },
                  {
                    users: { some: { id: token.sub } },
                  },
                  {
                    createdById: token.sub,
                  },
                ],
              },
            ],
          },
          include: {
            rootFolder: {
              include: {
                childs: {
                  include: {
                    childs: {
                      include: {
                        childs: {
                          include: {
                            childs: {
                              include: {
                                childs: true,
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });

        return map;
      },
    });
  },
});
