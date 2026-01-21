'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';

interface ProjectFormProps {
    initialData?: any;
}

export default function ProjectForm({ initialData }: ProjectFormProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        category: 'Short-Form',
        projectType: 'Personal',
        thumbnailUrl: '',
        videoUrl: '',
        description: '',
        skills: '', // Comma separated string for input
        tools: '', // Comma separated string for input
        featured: false,
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
                skills: initialData.skills.join(', '),
                tools: initialData.tools.join(', '),
            });
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            ...formData,
            skills: formData.skills.split(',').map(s => s.trim()).filter(s => s),
            tools: formData.tools.split(',').map(s => s.trim()).filter(s => s),
        };

        const method = initialData ? 'PUT' : 'POST';
        const res = await fetch('/api/projects', {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(initialData ? { ...payload, _id: initialData._id } : payload),
        });

        if (res.ok) {
            router.push('/admin/projects');
            router.refresh();
        } else {
            alert('Error saving project');
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-card-bg p-8 rounded-xl border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input name="title" value={formData.title} onChange={handleChange} required className="w-full bg-background border border-border rounded px-3 py-2" />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Slug</label>
                    <input name="slug" value={formData.slug} onChange={handleChange} required className="w-full bg-background border border-border rounded px-3 py-2" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-background border border-border rounded px-3 py-2">
                        <option>Short-Form</option>
                        <option>Motion Graphics</option>
                        <option>YouTube</option>
                        <option>Automation</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-background border border-border rounded px-3 py-2">
                        <option>Personal</option>
                        <option>Practice</option>
                        <option>Client</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Thumbnail URL</label>
                <input name="thumbnailUrl" value={formData.thumbnailUrl} onChange={handleChange} required className="w-full bg-background border border-border rounded px-3 py-2" placeholder="https://..." />
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Video URL (Optional)</label>
                <input name="videoUrl" value={formData.videoUrl} onChange={handleChange} className="w-full bg-background border border-border rounded px-3 py-2" />
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required rows={4} className="w-full bg-background border border-border rounded px-3 py-2" />
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Skills (comma separated)</label>
                <input name="skills" value={formData.skills} onChange={handleChange} className="w-full bg-background border border-border rounded px-3 py-2" placeholder="Pacing, Sound Design, Color Grading" />
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Tools (comma separated)</label>
                <input name="tools" value={formData.tools} onChange={handleChange} className="w-full bg-background border border-border rounded px-3 py-2" placeholder="Premiere Pro, n8n, After Effects" />
            </div>

            <div className="flex items-center gap-2">
                <input type="checkbox" name="featured" id="featured" checked={formData.featured} onChange={handleChange} className="rounded" />
                <label htmlFor="featured">Featured Project</label>
            </div>

            <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Saving...' : 'Save Project'}
            </Button>
        </form>
    );
}
