import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";
import prisma from "../lib/prisma";

export type Context = {
  user?: any;
  accessToken?: any;
  prisma: PrismaClient;
};
export async function createContext({
  req,
  res,
}: {
  req: any;
  res: any;
}): Promise<Context> {
  const session = await getSession({ req });

  // if the user is not logged in, omit returning the user and accessToken
  if (!session) return { prisma };

  const accessToken = getToken({ req });

  return {
    user: session,
    accessToken,
    prisma,
  };
}
