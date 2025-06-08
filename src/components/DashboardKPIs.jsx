import React from 'react';
import { UserGroupIcon, Cog6ToothIcon, WrenchScrewdriverIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const kpis = [
    {
        label: 'Usuarios',
        value: 24, // Reemplaza por tu dato real
        icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
        color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
        label: 'Máquinas',
        value: 15, // Reemplaza por tu dato real
        icon: <Cog6ToothIcon className="h-8 w-8 text-green-600" />,
        color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
        label: 'Mantenimientos',
        value: 38, // Reemplaza por tu dato real
        icon: <WrenchScrewdriverIcon className="h-8 w-8 text-yellow-600" />,
        color: 'bg-yellow-50 text-yellow-700 border-yellow-200'
    },
    {
        label: 'Fichas Técnicas',
        value: 8, // Reemplaza por tu dato real
        icon: <DocumentTextIcon className="h-8 w-8 text-purple-600" />,
        color: 'bg-purple-50 text-purple-700 border-purple-200'
    }
];

const DashboardKPIs = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, idx) => (
            <div
                key={idx}
                className={`rounded-2xl border shadow-lg flex items-center gap-4 p-6 ${kpi.color} hover:scale-105 transition-transform duration-200`}
            >
                <div className="flex-shrink-0">{kpi.icon}</div>
                <div>
                    <div className="text-3xl font-extrabold">{kpi.value}</div>
                    <div className="mt-1 text-lg font-medium">{kpi.label}</div>
                </div>
            </div>
        ))}
    </div>
);

export default DashboardKPIs;