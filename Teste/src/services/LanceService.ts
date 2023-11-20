import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllLances = async () => {
  return prisma.lance.findMany();
};

export { getAllLances };