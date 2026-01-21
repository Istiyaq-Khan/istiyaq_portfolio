'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { Trash2, Plus, Edit, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

interface Project {
    _id: string;
    title: string;
    slug: string;
    category: string;
    projectType: string;
    thumbnailUrl: string;
}

export default function AdminProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        const res = await fetch('/api/projects');
        const data = await res.json();
        if (data.success) {
            setProjects(data.data);
        }
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
        fetchProjects();
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-pulse text-primary font-mono">Loading data...</div>
        </div>
    );

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Projects</h1>
                    <p className="text-foreground/50">Manage your portfolio visible on the work page.</p>
                </div>
                <Button href="/admin/projects/new">
                    <Plus size={18} className="mr-2" /> Add New Project
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.length === 0 ? (
                    <div className="col-span-full py-20 text-center border border-dashed border-border rounded-xl bg-card-bg/50">
                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 text-foreground/30">
                            <ImageIcon size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">No projects yet</h3>
                        <p className="text-foreground/50 mb-6">Start by adding your first portfolio item.</p>
                        <Button href="/admin/projects/new" variant="outline">Create Initial Project</Button>
                    </div>
                ) : (
                    projects.map((project) => (
                        <div key={project._id} className="bg-card-bg border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-colors">
                            {/* Thumbnail */}
                            <div className="relative aspect-video bg-white/5">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.thumbnailUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-2 right-2 flex gap-2">
                                    <span className="bg-black/70 backdrop-blur text-xs px-2 py-1 rounded text-white font-mono">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-bold text-lg truncate pr-4" title={project.title}>{project.title}</h3>
                                </div>

                                <div className="flex items-center justify-between mt-4 md:mt-6">
                                    <div className="text-xs text-foreground/40 font-mono bg-white/5 px-2 py-1 rounded">
                                        {project.projectType}
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Link href={`/admin/projects/edit/${project._id}`} className="p-2 text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                            <Edit size={18} />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(project._id)}
                                            className="p-2 text-foreground/70 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
