import Link from "next/link";
import { FaTools, FaUsers, FaCogs, FaFileAlt, FaHome } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
            <div className="flex items-center justify-between">
                {/* Logo o título */}
                <div className="text-2xl font-bold text-yellow-400">
                    GAM-TX
                </div>

                {/* Menú */}
                <ul className="flex space-x-6 text-base font-medium">
                    <li className="flex items-center space-x-1 hover:text-yellow-400 transition">
                        <FaHome />
                        <Link href="/">Inicio</Link>
                    </li>
                    <li className="flex items-center space-x-1 hover:text-yellow-400 transition">
                        <FaUsers />
                        <Link href="/users">Usuarios</Link>
                    </li>
                    <li className="flex items-center space-x-1 hover:text-yellow-400 transition">
                        <FaCogs />
                        <Link href="/machines">Máquinas</Link>
                    </li>
                    <li className="flex items-center space-x-1 hover:text-yellow-400 transition">
                        <FaTools />
                        <Link href="/maintenance">Mantenimiento</Link>
                    </li>
                    <li className="flex items-center space-x-1 hover:text-yellow-400 transition">
                        <FaFileAlt />
                        <Link href="/specificationSheet">Ficha Técnica</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
