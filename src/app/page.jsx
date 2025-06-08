'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardWelcome from '../components/DashboardWelcome';
import DashboardKPIs from '../components/DashboardKPIs';
import DashboardShortcuts from '../components/DashboardShortcuts';
import DashboardNotices from '../components/DashboardNotices';
import DashboardChart from '../components/DashboardChart';

export default function HomePage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem('usuario')) {
      router.replace('/login');
    } else {
      setChecking(false); // <-- Esto permite mostrar el dashboard si hay sesión
    }
  }, [router]);

  if (checking) return null; // O un loader

  return (
    <main className="bg-gray-50 min-h-screen p-6">
      <DashboardWelcome userName="Edwin" />
      <DashboardKPIs />
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-2">
          <DashboardChart />
        </div>
        <div>
          <DashboardShortcuts />
          <DashboardNotices />
        </div>
      </div>
    </main>
  );
}

