'use client';
import { useEffect, useState } from 'react';
import UserForm from '../../../components/UserForm';
import { useRouter, useParams } from 'next/navigation';

export default function EditUserPage() {
    const router = useRouter();
    const params = useParams();
    const [tipos, setTipos] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`/api/users/${params.id}`).then(r => r.json()).then(setUser);
        fetch('/api/tipousuario').then(r => r.json()).then(setTipos);
    }, [params.id]);

    const handleUpdate = async (data) => {
        await fetch(`/api/users/${params.id}`, { method: 'PUT', body: JSON.stringify(data) });
        router.push('/users');
    };

    if (!user) return <div>Cargando...</div>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Editar Usuario</h1>
            <UserForm onSubmit={handleUpdate} initialData={user} tipos={tipos} />
        </div>
    );
}