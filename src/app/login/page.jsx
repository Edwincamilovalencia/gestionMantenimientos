'use client';
import { useState } from 'react';

export default function LoginPage() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [mensaje, setMensaje] = useState('');

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setMensaje('');
        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' }
        });
        if (res.ok) {
            const user = await res.json();
            sessionStorage.setItem('usuario', JSON.stringify(user));
            window.location.href = '/';
        } else {
            setMensaje('Credenciales inválidas');
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen relative"
            style={{
                backgroundImage: "url('/images/loginImg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Capa de glassmorphism y desenfoque */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-orange-900/60 backdrop-blur-[6px] z-0"></div>
            {/* Logo y título */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                <img src="/images/logo.png" alt="Logo" className="h-16 w-16 mb-2 drop-shadow-xl" />
                <h1 className="text-4xl font-extrabold text-white drop-shadow-lg tracking-widest">GAM-TX</h1>
                <span className="text-orange-200 font-semibold tracking-wide text-lg">Gestión de Mantenimiento Textil</span>
            </div>
            {/* Card de login */}
            <div className="relative z-10 bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-8 border border-orange-200/30 mt-36">
                <h2 className="text-2xl font-extrabold text-orange-400 mb-2 text-center tracking-wide drop-shadow">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-orange-200 font-semibold mb-1">Correo electrónico</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="usuario@empresa.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/80 placeholder:text-gray-500 shadow"
                        />
                    </div>
                    <div>
                        <label className="block text-orange-200 font-semibold mb-1">Contraseña</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white/80 placeholder:text-gray-500 shadow"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition text-lg tracking-wide"
                    >
                        Ingresar
                    </button>
                    {mensaje && <div className="text-center text-red-400 font-semibold">{mensaje}</div>}
                </form>
                <div className="text-center text-orange-200/80 text-xs mt-4">
                    © {new Date().getFullYear()} GAM-TX. Todos los derechos reservados.
                </div>
            </div>
        </div>
    );
}