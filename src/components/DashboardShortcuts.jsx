import React from 'react';

const shortcuts = [
    { label: 'Nueva Orden', href: '/ordenes/nueva' },
    { label: 'Ver Reportes', href: '/reportes' },
    { label: 'Usuarios', href: '/usuarios' },
];

const DashboardShortcuts = () => (
    <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Accesos Rápidos</h2>
        <div className="flex flex-col gap-3">
            {shortcuts.map((s, i) => (
                <a
                    key={i}
                    href={s.href}
                    className="bg-white rounded shadow px-4 py-2 hover:bg-blue-50 text-blue-700 font-medium transition"
                >
                    {s.label}
                </a>
            ))}
        </div>
    </div>
);

export default DashboardShortcuts;