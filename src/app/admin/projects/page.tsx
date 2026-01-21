'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { Trash2, Plus, Edit } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Project {
    _id: string;
    title: string;
    slug: string;
    category: string;
    projectType: string;
    thumbnailUrl: string;
    description: string;
}

export default function AdminProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

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

    if (loading) return <div className="p-12 text-center">Loading projects...</div>;

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Projects</h1>
                <Button href="/admin/projects/new">
                    <Plus size={16} className="mr-2" /> Add Project
                </Button>
            </div>

            <div className="grid gap-4">
                {projects.length === 0 ? (
                    <p className="text-foreground/50">No projects found.</p>
                ) : (
                    projects.map((project) => (
                        <div key={project._id} className="bg-card-bg border border-border p-4 rounded-lg flex justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg">{project.title}</h3>
                                <div className="flex gap-2 text-sm text-foreground/60">
                                    <span>{project.category}</span>
                                    <span>•</span>
                                    <span>{project.projectType}</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" href={`/admin/projects/edit/${project._id}`} className="!p-2">
                                    <Edit size={16} />
                                </Button>
                                <button
                                    onClick={() => handleDelete(project._id)}
                                    className="p-2 text-red-500 hover:bg-red-500/10 rounded"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
