'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Video, PlusSquare, LogOut, ExternalLink } from 'lucide-react';

const navItems = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'All Projects', href: '/admin/projects', icon: Video },
    { label: 'New Project', href: '/admin/projects/new', icon: PlusSquare },
    { label: 'All Services', href: '/admin/services', icon: PlusSquare },
    { label: 'New Service', href: '/admin/services/new', icon: PlusSquare },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 bg-card-bg border-r border-border min-h-screen flex flex-col fixed left-0 top-0 pt-20 z-40 hidden md:flex">
            <div className="p-6">
                <h2 className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-4">Admin Menu</h2>
                <nav className="space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-primary/10 text-primary border border-primary/20'
                                        : 'text-foreground/70 hover:bg-white/5 hover:text-foreground'
                                    }`}
                            >
                                <Icon size={20} />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="mt-auto p-6 border-t border-border">
                <Link href="/" className="flex items-center gap-3 text-foreground/50 hover:text-primary mb-4 transition-colors">
                    <ExternalLink size={18} />
                    <span>View Site</span>
                </Link>
                <Link
                    href="/api/auth/signout"
                    className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-colors w-full px-4 py-3 rounded-lg hover:bg-red-500/10"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </Link>
            </div>
        </div>
    );
}
