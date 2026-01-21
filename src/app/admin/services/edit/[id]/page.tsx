'use client';

import { useState, useEffect, use } from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

interface EditServicePageProps {
    params: Promise<{ id: string }>;
}

export default function EditServicePage({ params }: EditServicePageProps) {
    const { id } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ title: '', description: '', icon: '', features: '' });

    useEffect(() => {
        fetch(`/api/services`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const service = data.data.find((s: any) => s._id === id);
                    if (service) {
                        setForm({
                            title: service.title,
                            description: service.description,
                            icon: service.icon,
                            features: service.features.join(', ')
                        });
                    }
                }
                setLoading(false);
            });
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/services', {
            method: 'PUT',
            body: JSON.stringify({
                _id: id,
                ...form,
                features: form.features.split(',').map(f => f.trim())
            })
        });
        router.push('/admin/services');
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Edit Service</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block mb-2">Title</label>
                    <input className="w-full bg-card-bg border border-border p-3 rounded" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
                </div>
                <div>
                    <label className="block mb-2">Description</label>
                    <textarea className="w-full bg-card-bg border border-border p-3 rounded" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
                </div>
                <div>
                    <label className="block mb-2">Icon Name (Lucide React)</label>
                    <input className="w-full bg-card-bg border border-border p-3 rounded" value={form.icon} onChange={e => setForm({ ...form, icon: e.target.value })} required />
                    <p className="text-sm text-foreground/50 mt-1">E.g. Video, PenTool, Youtube, Cpu</p>
                </div>
                <div>
                    <label className="block mb-2">Features (comma separated)</label>
                    <input className="w-full bg-card-bg border border-border p-3 rounded" value={form.features} onChange={e => setForm({ ...form, features: e.target.value })} />
                </div>
                <div className="flex gap-4">
                    <Button type="submit">Save Changes</Button>
                    <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
                </div>
            </form>
        </div>
    );
}
