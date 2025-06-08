'use client';
import { useState, useEffect } from 'react';
import UserForm from '../../components/UserForm';

export default function CreateUserPage() {
    const [tipos, setTipos] = useState([]);

    useEffect(() => {
        fetch('/api/tipousuario').then(r => r.json()).then(setTipos);
    }, []);

    const handleCreate = async (data) => {
        await fetch('/api/users', { method: 'POST', body: JSON.stringify(data) });
        window.location.href = '/users';
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Crear Usuario</h1>
            <UserForm onSubmit={handleCreate} tipos={tipos} />
        </div>
    );
}