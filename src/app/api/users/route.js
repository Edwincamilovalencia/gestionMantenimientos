import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET() {
    const usuarios = await prisma.usuario.findMany({
        include: { tipoUsuario: true },
        orderBy: { idUsuario: 'asc' },
    });
    return NextResponse.json(usuarios);
}

export async function POST(request) {
    const data = await request.json();
    const usuario = await prisma.usuario.create({
        data: {
            nombre: data.nombre,
            telefono: data.telefono,
            direccion: data.direccion,
            email: data.email,
            tipoUsuarioId: Number(data.tipoUsuarioId),
        },
    });
    return NextResponse.json(usuario, { status: 201 });
}