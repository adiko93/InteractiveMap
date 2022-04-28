import { objectType, extendType, nonNull, stringArg } from "nexus";
import { Map } from "./Map";
import { ApolloError } from "apollo-server-errors";
import { PBKDF2 } from "crypto-js";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("username");
    t.string("name");
    t.string("email");
    t.string("image");
    t.dateTime("createdAt");
    t.list.field("mapsCreated", {
      type: Map,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .mapsCreated();
      },
    });
    t.list.field("editorAt", {
      type: Map,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .editorAt();
      },
    });
    t.list.field("userAt", {
      type: Map,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: _parent.id as string,
            },
          })
          .userAt();
      },
    });
  },
});

export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: User,
      args: {
        username: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_parent, _args, ctx) {
        if (
          await ctx.prisma.user.findUnique({
            where: {
              username: _args.username,
            },
          })
        )
          return new ApolloError(
            "Użytkownik z tą samą nazwą już istnieje",
            "409"
          );

        if (_args.password.length < 6)
          return new ApolloError("Hasło jest zbyt krótkie", "409");

        if (!/^[A-Za-z0-9]+$/.test(_args.username))
          return new ApolloError("Nie można używać specjalnych znaków", "409");

        return await ctx.prisma.user.create({
          data: {
            username: _args.username,
            password: PBKDF2(_args.password, process.env.NEXTAUTH_SECRET!, {
              keySize: 256 / 32,
            }).toString(),
          },
        });
      },
    });
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("me", {
      type: "User",
      async resolve(_parent, _args, ctx) {
        if (!ctx?.user) return new ApolloError("Unauthorized", "401");
        const token = await ctx.accessToken;

        return await ctx.prisma.user.findUnique({
          where: { id: token?.sub },
          include: {
            mapsCreated: {
              include: {
                rootFolder: true,
              },
            },
          },
        });
      },
    });
  },
});
