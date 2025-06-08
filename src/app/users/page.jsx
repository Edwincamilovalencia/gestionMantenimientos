'use client';
import { useState, useEffect } from 'react';
import UserForm from '../../components/UserForm';
import UserList from '../../components/UserList';

export default function UsersPage() {
    const [tipos, setTipos] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [mensaje, setMensaje] = useState('');
    const [busqueda, setBusqueda] = useState('');
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetch('/api/tipousuario').then(r => r.json()).then(setTipos);
        fetch('/api/users').then(r => r.json()).then(setUsuarios);
    }, []);

    const handleCreateOrEdit = async (data) => {
        if (editingUser) {
            // Editar usuario
            const res = await fetch(`/api/users/${editingUser.idUsuario}`, {
                method: 'PUT',
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setMensaje('Usuario actualizado correctamente');
                setEditingUser(null);
                fetch('/api/users').then(r => r.json()).then(setUsuarios);
            } else {
                setMensaje('Error al actualizar usuario');
            }
        } else {
            // Crear usuario
            const res = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify(data),
            });
            if (res.ok) {
                setMensaje('¡Usuario registrado exitosamente!');
                fetch('/api/users').then(r => r.json()).then(setUsuarios);
            } else {
                setMensaje('Error al registrar usuario');
            }
        }
        setTimeout(() => setMensaje(''), 3000);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('¿Seguro que deseas eliminar este usuario?')) return;
        const res = await fetch(`/api/users/${id}`, { method: 'DELETE' });
        if (res.ok) {
            setMensaje('Usuario eliminado correctamente');
            setUsuarios(usuarios.filter(u => u.idUsuario !== id));
        } else {
            setMensaje('Error al eliminar usuario');
        }
        setTimeout(() => setMensaje(''), 3000);
    };

    // Filtro de búsqueda
    const usuariosFiltrados = usuarios.filter(u =>
        u.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        u.email.toLowerCase().includes(busqueda.toLowerCase()) ||
        u.tipoUsuario?.descripcion?.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Formulario a la izquierda */}
                <div className="md:col-span-1">
                    <div className="sticky top-8">
                        <h1 className="text-2xl font-bold mb-4 text-blue-800">Registrar Usuario</h1>
                        {mensaje && (
                            <div className="mb-4 p-3 rounded bg-green-100 text-green-800 font-semibold shadow">{mensaje}</div>
                        )}
                        <UserForm
                            onSubmit={handleCreateOrEdit}
                            tipos={tipos}
                            initialData={editingUser || {}}
                        />
                    </div>
                </div>
                {/* Lista de usuarios a la derecha */}
                <div className="md:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-blue-800">Usuarios Registrados</h2>
                        <input
                            type="text"
                            placeholder="Buscar usuario..."
                            value={busqueda}
                            onChange={e => setBusqueda(e.target.value)}
                            className="px-4 py-2 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <UserList
                        usuarios={usuariosFiltrados}
                        onEdit={u => setEditingUser(u)}
                        onDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
}

