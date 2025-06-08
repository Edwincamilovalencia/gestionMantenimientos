import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request, { params }) {
    const maquina = await prisma.maquina.findUnique({
        where: { idMaquina: Number(params.id) },
        include: { tipoMaquina: true },
    });
    if (!maquina) return NextResponse.json({ error: 'No encontrada' }, { status: 404 });
    return NextResponse.json(maquina);
}

export async function PUT(request, { params }) {
    const data = await request.json();
    const maquina = await prisma.maquina.update({
        where: { idMaquina: Number(params.id) },
        data: {
            ubicacionMaquina: data.ubicacionMaquina,
            estadoMaquina: data.estadoMaquina,
            descripcionMaquina: data.descripcionMaquina,
            idTipoMaquina: Number(data.idTipoMaquina),
        },
    });
    return NextResponse.json(maquina);
}

export async function DELETE(request, { params }) {
    await prisma.maquina.delete({
        where: { idMaquina: Number(params.id) },
    });
    return NextResponse.json({ message: 'Maquina eliminada' });
}