import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllLeiloes = async () => {
  return prisma.leilao.findMany();
};

export { getAllLeiloes };