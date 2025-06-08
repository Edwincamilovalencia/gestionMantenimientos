import { PrismaClient } from '@prisma/client';

const globalForPrisma = global;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;

export async function GET() {
  const tipousuarios = await prisma.tipoUsuario.findMany();
  return Response.json(tipousuarios);
}

export async function POST(request) {
  const body = await request.json();
  const tipousuario = await prisma.tipoUsuario.create({
    data: body,
  });
  return Response.json(tipousuario);
}