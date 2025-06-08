'use client';
import { useState, useEffect } from 'react';
import MachineForm from '../../components/MachineForm';
import MachineList from '../../components/MachineList';

export default function MachinesPage() {
    const [tipos, setTipos] = useState([]);
    const [maquinas, setMaquinas] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [busqueda, setBusqueda] = useState('');
    const [editingMachine, setEditingMachine] = useState(null);

    useEffect(() => {
        fetch('/api/tipomaquina').then(r => r.json()).then(setTipos);
        fetch('/api/machines').then(r => r.json()).then(setMaquinas);
    }, []);

    const handleCreateOrEdit = async (data) => {
        if (editingMachine) {
            // Editar máquina
            const res = await fetch(`/api/machines/${editingMachine.idMaquina}`, {
                method: 'PUT',
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setMensaje('Máquina actualizada correctamente');
                setEditingMachine(null);
                fetch('/api/machines').then(r => r.json()).then(setMaquinas);
            } else {
                setMensaje('Error al actualizar máquina');
            }
        } else {
            // Crear máquina
            const res = await fetch('/api/machines', {
                method: 'POST',
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setMensaje('¡Máquina registrada exitosamente!');
                fetch('/api/machines').then(r => r.json()).then(setMaquinas);
            } else {
                setMensaje('Error al registrar máquina');
            }
        }
        setTimeout(() => setMensaje(''), 3000);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Seguro que deseas eliminar esta máquina?')) return;
        const res = await fetch(`/api/machines/${id}`, { method: 'DELETE' });
        if (res.ok) {
            setMensaje('Máquina eliminada correctamente');
            setMaquinas(maquinas.filter(m => m.idMaquina !== id));
        } else {
            setMensaje('Error al eliminar máquina');
        }
        setTimeout(() => setMensaje(''), 3000);
    };

    // Filtro de búsqueda
    const maquinasFiltradas = maquinas.filter(m =>
        m.ubicacionMaquina?.toLowerCase().includes(busqueda.toLowerCase()) ||
        m.descripcionMaquina?.toLowerCase().includes(busqueda.toLowerCase()) ||
        m.tipoMaquina?.descripcionTipoMaquina?.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Formulario a la izquierda */}
                <div className="md:col-span-1">
                    <div className="sticky top-8">
                        <h1 className="text-2xl font-bold mb-4 text-blue-800">Registrar Máquina</h1>
                        {mensaje && (
                            <div className="mb-4 p-3 rounded bg-green-100 text-green-800 font-semibold shadow">{mensaje}</div>
                        )}
                        <MachineForm
                            onSubmit={handleCreateOrEdit}
                            tipos={tipos}
                            initialData={editingMachine || {}}
                        />
                    </div>
                </div>
                {/* Lista de máquinas a la derecha */}
                <div className="md:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-blue-800">Máquinas Registradas</h2>
                        <input
                            type="text"
                            placeholder="Buscar máquina..."
                            value={busqueda}
                            onChange={e => setBusqueda(e.target.value)}
                            className="px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <MachineList
                        maquinas={maquinasFiltradas}
                        onEdit={m => setEditingMachine(m)}
                        onDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
}