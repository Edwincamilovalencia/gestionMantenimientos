import { PencilSquareIcon, TrashIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function UserList({ usuarios, onEdit, onDelete }) {
    return (
        <div className="overflow-x-auto rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md p-0 border border-blue-100">
            <table className="min-w-full divide-y divide-blue-200">
                <thead>
                    <tr>
                        <th className="px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-left text-xs font-bold text-white uppercase tracking-wider rounded-tl-2xl">ID</th>
                        <th className="px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-left text-xs font-bold text-white uppercase tracking-wider">Nombre</th>
                        <th className="px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-left text-xs font-bold text-white uppercase tracking-wider">Teléfono</th>
                        <th className="px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-left text-xs font-bold text-white uppercase tracking-wider">Dirección</th>
                        <th className="px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-left text-xs font-bold text-white uppercase tracking-wider">Email</th>
                        <th className="px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-left text-xs font-bold text-white uppercase tracking-wider">Tipo</th>
                        <th className="px-4 py-3 bg-gradient-to-r from-blue-700 to-blue-600 text-center text-xs font-bold text-white uppercase tracking-wider rounded-tr-2xl">Acciones</th>
                    </tr>
                </thead>
                <tbody className="bg-white/80 divide-y divide-blue-100">
                    {usuarios.length === 0 ? (
                        <tr>
                            <td colSpan={7} className="py-12 text-center text-blue-700 font-semibold text-lg">
                                <UserCircleIcon className="mx-auto h-12 w-12 text-blue-300 mb-2" />
                                No hay usuarios registrados.
                            </td>
                        </tr>
                    ) : usuarios.map(u => (
                        <tr key={u.idUsuario} className="hover:bg-blue-50/70 transition-all duration-200 group">
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 font-semibold">{u.idUsuario}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-800 flex items-center gap-2">
                                <UserCircleIcon className="h-6 w-6 text-blue-400 group-hover:text-blue-600" />
                                {u.nombre}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{u.telefono}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{u.direccion}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-blue-700">{u.email}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm">
                                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold shadow">
                                    {u.tipoUsuario?.descripcion}
                                </span>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap flex justify-center gap-2">
                                <button
                                    onClick={() => onEdit(u)}
                                    className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-3 rounded-lg shadow transition duration-150"
                                    title="Editar"
                                >
                                    <PencilSquareIcon className="h-5 w-5" />
                                    <span className="hidden md:inline">Editar</span>
                                </button>
                                <button
                                    onClick={() => onDelete(u.idUsuario)}
                                    className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded-lg shadow transition duration-150"
                                    title="Eliminar"
                                >
                                    <TrashIcon className="h-5 w-5" />
                                    <span className="hidden md:inline">Eliminar</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}