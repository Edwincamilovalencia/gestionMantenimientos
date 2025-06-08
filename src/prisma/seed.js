import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Asegúrate de tener tipos de usuario creados
    const [adminTipo, userTipo] = await Promise.all([
        prisma.tipoUsuario.upsert({
            where: { descripcion: 'Administrador' },
            update: {},
            create: { descripcion: 'Administrador' },
        }),
        prisma.tipoUsuario.upsert({
            where: { descripcion: 'Usuario' },
            update: {},
            create: { descripcion: 'Usuario' },
        }),
    ]);

    // Crea usuarios de ejemplo
    await prisma.usuario.upsert({
        where: { email: 'admin@demo.com' },
        update: {},
        create: {
            nombre: 'Admin',
            telefono: '123456789',
            direccion: 'Oficina',
            email: 'admin@demo.com',
            password: 'admin123', // <--- agrega contraseña
            tipoUsuarioId: adminTipo.idTipoUsuario,
        },
    });

    await prisma.usuario.upsert({
        where: { email: 'usuario@demo.com' },
        update: {},
        create: {
            nombre: 'Usuario',
            telefono: '987654321',
            direccion: 'Casa',
            email: 'usuario@demo.com',
            password: 'usuario123', // <--- agrega contraseña
            tipoUsuarioId: userTipo.idTipoUsuario,
        },
    });

    console.log('Usuarios de ejemplo creados');
}

main()
    .catch(e => { console.error(e); process.exit(1); })
    .finally(() => prisma.$disconnect());