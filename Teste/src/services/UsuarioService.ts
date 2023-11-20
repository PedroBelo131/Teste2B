import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllUsuarios = async () => {
  return prisma.usuario.findMany();
};

export { getAllUsuarios };