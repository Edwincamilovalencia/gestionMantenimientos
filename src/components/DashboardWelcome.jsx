import React from 'react';

const DashboardWelcome = ({ userName }) => (
    <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">¡Bienvenido, {userName}!</h1>
        <p className="text-gray-600 mt-2">Aquí tienes un resumen de la gestión de mantenimiento.</p>
    </section>
);

export default DashboardWelcome;