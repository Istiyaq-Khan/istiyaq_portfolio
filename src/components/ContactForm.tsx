'use client';

import { useState } from 'react';
import Button from './Button';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (status === 'success') {
        return (
            <div className="bg-card-bg border border-secondary/20 p-8 rounded-xl text-center shadow-[0_0_30px_rgba(163,230,53,0.1)]">
                <CheckCircle className="text-secondary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2 text-white">Message Received</h3>
                <p className="text-foreground/70 mb-6">I'll get back to you within 24 hours.</p>
                <Button onClick={() => setStatus('idle')} variant="outline">
                    Send Another
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5 bg-card-bg p-6 md:p-8 rounded-xl border border-border shadow-2xl">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Enter your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                    Project Details
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell me about your project..."
                />
            </div>

            {status === 'error' && (
                <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded">
                    <AlertCircle size={16} />
                    <span>Error sending message. Please try again.</span>
                </div>
            )}

            <Button type="submit" className="w-full relative overflow-hidden group" disabled={status === 'loading'}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                    {!status && <Send size={16} />}
                </span>
            </Button>

            <p className="text-xs text-center text-foreground/40 mt-4">
                I respect your privacy. No spam, ever.
            </p>
        </form>
    );
}
