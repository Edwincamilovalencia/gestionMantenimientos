import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request, { params }) {
    const usuario = await prisma.usuario.findUnique({
        where: { idUsuario: Number(params.id) },
        include: { tipoUsuario: true },
    });
    if (!usuario) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
    return NextResponse.json(usuario);
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const usuario = await prisma.usuario.update({
        where: { idUsuario: Number(params.id) },
        data: {
            nombre: data.nombre,
            telefono: data.telefono,
            direccion: data.direccion,
            email: data.email,
            tipoUsuarioId: Number(data.tipoUsuarioId),
        },
    });
    return NextResponse.json(usuario);
}

export async function DELETE(request, { params }) {
    await prisma.usuario.delete({
        where: { idUsuario: Number(params.id) },
    });
    return NextResponse.json({ message: 'Usuario eliminado' });
}