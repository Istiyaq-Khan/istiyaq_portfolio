import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import connectToDatabase from '@/lib/db';
import ContactSubmission from '@/models/ContactSubmission';
import Project from '@/models/Project';
import Link from 'next/link';
import { Mail, Video, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';

export default async function AdminDashboard() {
    await getServerSession(authOptions);
    await connectToDatabase();

    const submissions = await ContactSubmission.find().sort({ createdAt: -1 }).limit(5);
    const projectCount = await Project.countDocuments();
    const messageCount = await ContactSubmission.countDocuments();

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-card-bg border border-border p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-primary/10 text-primary rounded-lg">
                            <Mail size={24} />
                        </div>
                        <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded">Total</span>
                    </div>
                    <p className="text-3xl font-bold mb-1">{messageCount}</p>
                    <p className="text-foreground/50 text-sm">Inquiries Received</p>
                </div>

                <div className="bg-card-bg border border-border p-6 rounded-xl">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                            <Video size={24} />
                        </div>
                        <span className="text-xs font-bold bg-white/5 px-2 py-1 rounded">Live</span>
                    </div>
                    <p className="text-3xl font-bold mb-1">{projectCount}</p>
                    <p className="text-foreground/50 text-sm">Active Projects</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Inquiries */}
                <div className="lg:col-span-2">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Recent Inquiries</h2>
                        <Button variant="ghost" size="sm" className="text-sm">View All</Button>
                    </div>

                    <div className="space-y-4">
                        {submissions.length === 0 ? (
                            <div className="bg-card-bg border border-border p-8 rounded-xl text-center text-foreground/50">
                                No inquiries yet.
                            </div>
                        ) : (
                            submissions.map((sub: any) => (
                                <div key={sub._id} className="bg-card-bg border border-border p-6 rounded-xl hover:border-primary/30 transition-colors">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                                {sub.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-bold">{sub.name}</h3>
                                                <p className="text-sm text-foreground/50">{sub.email}</p>
                                            </div>
                                        </div>
                                        <span className="text-xs text-foreground/40 font-mono">
                                            {new Date(sub.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>

                                    {sub.projectType && (
                                        <div className="mb-3">
                                            <span className="inline-block bg-white/5 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded text-foreground/70">
                                                {sub.projectType}
                                            </span>
                                        </div>
                                    )}

                                    <p className="text-foreground/80 text-sm line-clamp-2">{sub.message}</p>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Quick Actions */}
                <div>
                    <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
                    <div className="bg-card-bg border border-border p-6 rounded-xl space-y-4">
                        <div className="pb-4 border-b border-border">
                            <h3 className="font-bold mb-2">Projects</h3>
                            <Link href="/admin/projects" className="flex items-center justify-between text-sm text-foreground/70 hover:text-primary transition-colors cursor-pointer group">
                                Manage Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/admin/projects/new" className="flex items-center justify-between text-sm text-foreground/70 hover:text-primary transition-colors cursor-pointer mt-2 group">
                                Add New Project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <div>
                            <h3 className="font-bold mb-2">System</h3>
                            <Link href="/" target="_blank" className="flex items-center justify-between text-sm text-foreground/70 hover:text-primary transition-colors cursor-pointer group">
                                Open Live Site <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
