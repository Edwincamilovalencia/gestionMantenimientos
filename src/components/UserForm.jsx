import { useState, useEffect } from 'react';
import { UserIcon, PhoneIcon, HomeIcon, EnvelopeIcon, IdentificationIcon } from '@heroicons/react/24/outline';

export default function UserForm({ onSubmit, initialData = {}, tipos = [] }) {
    const [form, setForm] = useState({
        nombre: '',
        telefono: '',
        direccion: '',
        email: '',
        tipoUsuarioId: '',
        ...initialData,
    });
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState({ texto: '', tipo: '' });

    useEffect(() => {
        setForm({
            nombre: '',
            telefono: '',
            direccion: '',
            email: '',
            tipoUsuarioId: '',
            ...initialData,
        });
    }, [initialData]);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setMensaje({ texto: '', tipo: '' });
        const result = await onSubmit(form);
        setLoading(false);
        if (result !== false) {
            setMensaje({ texto: '¡Usuario guardado exitosamente!', tipo: 'success' });
            setForm({
                nombre: '',
                telefono: '',
                direccion: '',
                email: '',
                tipoUsuarioId: '',
            });
        } else {
            setMensaje({ texto: 'Ocurrió un error. Intenta nuevamente.', tipo: 'error' });
        }
        setTimeout(() => setMensaje({ texto: '', tipo: '' }), 3000);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-gradient-to-br from-blue-100 via-white to-blue-200 p-10 rounded-2xl shadow-2xl space-y-7 border border-blue-100 animate-fade-in"
        >
            <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                <IdentificationIcon className="h-7 w-7 text-blue-500" /> Registro de Usuario
            </h2>
            {mensaje.texto && (
                <div className={`mb-4 p-3 rounded font-semibold shadow text-center
                    ${mensaje.tipo === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {mensaje.texto}
                </div>
            )}
            <div>
                <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2" htmlFor="nombre">
                    <UserIcon className="h-5 w-5 text-blue-400" /> Nombre
                </label>
                <input
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                    autoFocus
                    className="w-full px-4 py-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition hover:shadow-lg"
                    aria-label="Nombre"
                />
            </div>
            <div>
                <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2" htmlFor="telefono">
                    <PhoneIcon className="h-5 w-5 text-blue-400" /> Teléfono
                </label>
                <input
                    id="telefono"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    required
                    className="w-full px-4 py-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition hover:shadow-lg"
                    aria-label="Teléfono"
                />
            </div>
            <div>
                <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2" htmlFor="direccion">
                    <HomeIcon className="h-5 w-5 text-blue-400" /> Dirección
                </label>
                <input
                    id="direccion"
                    name="direccion"
                    value={form.direccion}
                    onChange={handleChange}
                    placeholder="Dirección"
                    required
                    className="w-full px-4 py-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition hover:shadow-lg"
                    aria-label="Dirección"
                />
            </div>
            <div>
                <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2" htmlFor="email">
                    <EnvelopeIcon className="h-5 w-5 text-blue-400" /> Email
                </label>
                <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    type="email"
                    required
                    className="w-full px-4 py-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition hover:shadow-lg"
                    aria-label="Email"
                />
            </div>
            <div>
                <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2" htmlFor="tipoUsuarioId">
                    <IdentificationIcon className="h-5 w-5 text-blue-400" /> Tipo de usuario
                </label>
                <select
                    id="tipoUsuarioId"
                    name="tipoUsuarioId"
                    value={form.tipoUsuarioId}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-200 transition bg-white hover:shadow-lg"
                    aria-label="Tipo de usuario"
                >
                    <option value="">Selecciona tipo de usuario</option>
                    {tipos.map(tipo => (
                        <option key={tipo.idTipoUsuario} value={tipo.idTipoUsuario}>{tipo.descripcion}</option>
                    ))}
                </select>
            </div>
            <button
                type="submit"
                disabled={loading || !form.nombre || !form.telefono || !form.direccion || !form.email || !form.tipoUsuarioId}
                className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition text-lg
                    ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                aria-label="Guardar Usuario"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {loading ? "Guardando..." : "Guardar Usuario"}
            </button>
        </form>
    );
}

