import { useState, useEffect } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';

export default function MachineForm({ onSubmit, initialData = {}, tipos = [] }) {
    const [form, setForm] = useState({
        ubicacionMaquina: '',
        estadoMaquina: '',
        descripcionMaquina: '',
        idTipoMaquina: '',
        ...initialData,
    });

    useEffect(() => {
        setForm({
            ubicacionMaquina: '',
            estadoMaquina: '',
            descripcionMaquina: '',
            idTipoMaquina: '',
            ...initialData,
        });
    }, [initialData]);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(form);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-blue-100"
        >
            <div className="flex items-center gap-3 mb-6">
                <Cog6ToothIcon className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold text-blue-700">Datos de la Máquina</span>
            </div>
            <div>
                <label className="block text-sm font-semibold text-blue-700 mb-1">Ubicación</label>
                <input
                    name="ubicacionMaquina"
                    value={form.ubicacionMaquina}
                    onChange={handleChange}
                    placeholder="Ubicación"
                    required
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90"
                />
            </div>
            <div>
                <label className="block text-sm font-semibold text-blue-700 mb-1">Estado</label>
                <select
                    name="estadoMaquina"
                    value={form.estadoMaquina}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90"
                >
                    <option value="">Selecciona estado</option>
                    <option value="Activa">Activa</option>
                    <option value="Inactiva">Inactiva</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-semibold text-blue-700 mb-1">Tipo de Máquina</label>
                <select
                    name="idTipoMaquina"
                    value={form.idTipoMaquina}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90"
                >
                    <option value="">Selecciona tipo</option>
                    {tipos.map(tipo => (
                        <option key={tipo.idTipoMaquina} value={tipo.idTipoMaquina}>
                            {tipo.descripcionTipoMaquina}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-sm font-semibold text-blue-700 mb-1">Descripción</label>
                <input
                    name="descripcionMaquina"
                    value={form.descripcionMaquina}
                    onChange={handleChange}
                    placeholder="Descripción"
                    required
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/90"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow transition"
            >
                Guardar Máquina
            </button>
        </form>
    );
}