import AdminSidebar from '@/components/AdminSidebar';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <AdminSidebar />
            <div className="md:ml-64 p-6 md:p-12">
                {children}
            </div>
        </div>
    );
}
