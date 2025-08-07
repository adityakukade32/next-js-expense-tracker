import { PrismaClient } from "../app/generated/prisma";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();
