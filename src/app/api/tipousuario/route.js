import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET() {
    const tipos = await prisma.tipoUsuario.findMany();
    return NextResponse.json(tipos);
}