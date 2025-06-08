import { NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function POST(request) {
    const { email, password } = await request.json();
    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user || user.password !== password) {
        return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 });
    }
    // Puedes devolver solo lo necesario, nunca la contraseña
    return NextResponse.json({
        idUsuario: user.idUsuario,
        nombre: user.nombre,
        email: user.email,
        tipoUsuarioId: user.tipoUsuarioId,
    });
}
