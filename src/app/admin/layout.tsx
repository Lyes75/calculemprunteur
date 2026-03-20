'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '\u{1F4CA}' },
  { href: '/admin/leads', label: 'Leads', icon: '\u{1F4CB}' },
  { href: '/admin/clicks', label: 'Clics', icon: '\u{1F517}' },
  { href: '/admin/simulations', label: 'Simulations', icon: '\u{1F4BB}' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [authChecked, setAuthChecked] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Set document title and meta robots
  useEffect(() => {
    document.title = 'CE Admin';

    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');
  }, []);

  // Auth check on mount
  useEffect(() => {
    // Skip auth check on the login page
    if (pathname === '/admin/login') {
      setAuthChecked(true);
      return;
    }

    fetch('/api/admin/stats')
      .then((res) => {
        if (res.status === 401) {
          router.push('/admin/login');
        } else {
          setAuthChecked(true);
        }
      })
      .catch(() => {
        router.push('/admin/login');
      });
  }, [pathname, router]);

  // Don't wrap login page in admin layout
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  async function handleLogout() {
    // Clear the cookie by calling a simple endpoint or just deleting cookie client-side
    document.cookie = 'admin_token=; path=/; max-age=0';
    router.push('/admin/login');
  }

  if (!authChecked) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile top bar */}
      <div className="lg:hidden bg-gray-900 text-white px-4 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        <span className="font-bold text-lg">CE Admin</span>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-800"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {sidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 z-50 transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="px-6 py-6 border-b border-gray-800">
            <span className="text-white font-bold text-xl">CE Admin</span>
          </div>

          {/* Nav items */}
          <nav className="flex-1 py-4">
            {navItems.map((item) => {
              const isActive =
                item.href === '/admin'
                  ? pathname === '/admin'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                    isActive
                      ? 'bg-gray-800 text-white border-l-4 border-blue-500 pl-5'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50 border-l-4 border-transparent pl-5'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="border-t border-gray-800 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-2 py-2 text-sm text-gray-400 hover:text-white transition-colors w-full rounded-lg hover:bg-gray-800/50"
            >
              <span className="text-lg">{'\u{1F6AA}'}</span>
              <span>Deconnexion</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-64 min-h-screen p-6 pt-20 lg:pt-6">
        {children}
      </main>
    </div>
  );
}
