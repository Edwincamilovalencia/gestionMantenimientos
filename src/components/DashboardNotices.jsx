import React from 'react';

const notices = [
    'Recuerda actualizar los reportes semanales.',
    'Nuevo módulo de inventario disponible.',
];

const DashboardNotices = () => (
    <div className="mt-6">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Avisos</h2>
        <ul className="list-disc list-inside text-gray-600">
            {notices.map((n, i) => (
                <li key={i}>{n}</li>
            ))}
        </ul>
    </div>
);

export default DashboardNotices;