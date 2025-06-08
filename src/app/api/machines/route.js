import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET() {
    const maquinas = await prisma.maquina.findMany({
        include: { tipoMaquina: true },
        orderBy: { idMaquina: 'asc' },
    });
    return NextResponse.json(maquinas);
}

export async function POST(request) {
    const data = await request.json();
    const maquina = await prisma.maquina.create({
        data: {
            ubicacionMaquina: data.ubicacionMaquina,
            estadoMaquina: data.estadoMaquina,
            descripcionMaquina: data.descripcionMaquina,
            idTipoMaquina: Number(data.idTipoMaquina),
        },
    });
    return NextResponse.json(maquina, { status: 201 });
}