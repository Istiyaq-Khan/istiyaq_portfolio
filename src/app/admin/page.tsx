import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import connectToDatabase from '@/lib/db';
import ContactSubmission from '@/models/ContactSubmission';
import Link from 'next/link';

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/login');
    }

    await connectToDatabase();
    const submissions = await ContactSubmission.find().sort({ createdAt: -1 });

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <Link href="/api/auth/signout" className="text-red-400 hover:text-red-300">
                    Logout
                </Link>
            </div>

            <div className="grid gap-6">
                <h2 className="text-xl font-bold mb-4">Contact Inquiries ({submissions.length})</h2>

                {submissions.length === 0 ? (
                    <p className="text-foreground/50">No messages yet.</p>
                ) : (
                    submissions.map((sub: any) => (
                        <div key={sub._id} className="bg-card-bg border border-border p-6 rounded-lg">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold">{sub.name}</h3>
                                    <p className="text-sm text-foreground/70">{sub.email}</p>
                                </div>
                                <span className="text-xs text-foreground/50">
                                    {new Date(sub.createdAt).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="mb-4">
                                <span className="bg-white/5 text-xs px-2 py-1 rounded">
                                    {sub.projectType}
                                </span>
                            </div>

                            <p className="text-foreground/80 whitespace-pre-wrap">{sub.message}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
