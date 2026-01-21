'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/Button';
import { Trash2, Plus, Edit, GripVertical } from 'lucide-react';

interface Service {
    _id: string;
    title: string;
    description: string;
    icon: string;
}

export default function AdminServicesPage() {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        const res = await fetch('/api/services');
        const data = await res.json();
        if (data.success) {
            setServices(data.data);
        }
        setLoading(false);
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure?')) return;
        await fetch(`/api/services?id=${id}`, { method: 'DELETE' });
        fetchServices();
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Manage Services</h1>
                {/* We can add a modal or a separate page for creating services. For speed, I'll do a simple prompt or just list them for now since the user only wanted editable. 
            Actually, the seed script populates them. Let's make it fully editable.
            I will redirect to a new page for simplicity.
        */}
                <Button href="/admin/services/new">
                    <Plus size={16} className="mr-2" /> Add Service
                </Button>
            </div>

            <div className="space-y-4">
                {services.map((service) => (
                    <div key={service._id} className="bg-card-bg border border-border p-4 rounded-xl flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-white/5 rounded">
                                <GripVertical size={20} className="text-foreground/30" />
                            </div>
                            <div>
                                <h3 className="font-bold">{service.title}</h3>
                                <p className="text-sm text-foreground/50">{service.description.substring(0, 60)}...</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button size="sm" variant="outline" href={`/admin/services/edit/${service._id}`} className="px-2">
                                <Edit size={16} />
                            </Button>
                            <button onClick={() => handleDelete(service._id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
