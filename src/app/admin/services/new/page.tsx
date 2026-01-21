'use client';
import { useState } from 'react';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function NewServicePage() {
    const router = useRouter();
    const [form, setForm] = useState({ title: '', description: '', icon: 'Video', features: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch('/api/services', {
            method: 'POST',
            body: JSON.stringify({
                ...form,
                features: form.features.split(',').map(f => f.trim())
            })
        });
        router.push('/admin/services');
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Add Service</h1>
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
                    <label className="block mb-2">Features (comma separated)</label>
                    <input className="w-full bg-card-bg border border-border p-3 rounded" value={form.features} onChange={e => setForm({ ...form, features: e.target.value })} />
                </div>
                <Button type="submit">Create Service</Button>
            </form>
        </div>
    );
}
