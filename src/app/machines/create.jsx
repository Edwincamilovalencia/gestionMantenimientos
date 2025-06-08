'use client';
import { useState, useEffect } from 'react';
import MachineForm from '../../components/MachineForm';

export default function CreateMachinePage() {
    const [tipos, setTipos] = useState([]);

    useEffect(() => {
        fetch('/api/tipomaquina').then(r => r.json()).then(setTipos);
    }, []);

    const handleCreate = async (data) => {
        await fetch('/api/machines', { method: 'POST', body: JSON.stringify(data) });
        window.location.href = '/machines';
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Crear Máquina</h1>
            <MachineForm onSubmit={handleCreate} tipos={tipos} />
        </div>
    );
}