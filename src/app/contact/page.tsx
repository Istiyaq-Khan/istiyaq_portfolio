'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Short-Form Editing',
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
                setFormData({ name: '', email: '', projectType: 'Short-Form Editing', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Create Something Great</h1>
                    <p className="text-foreground/70">
                        Tell me about your project or vision. I'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="bg-card-bg border border-border rounded-xl p-8">
                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <CheckCircle className="text-primary mx-auto mb-4" size={48} />
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-foreground/70 mb-6">Thanks for reaching out. I'll be in touch soon.</p>
                            <Button onClick={() => setStatus('idle')} variant="outline">
                                Send Another Message
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-foreground/30"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-foreground/30"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type</label>
                                <select
                                    id="projectType"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground [&>option]:bg-card-bg"
                                >
                                    <option>Short-Form Editing</option>
                                    <option>Motion Graphics</option>
                                    <option>YouTube Long-Form</option>
                                    <option>Automation / Systems</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-foreground/30"
                                    placeholder="Tell me about your project, goals, and timeline..."
                                />
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-500 text-sm">
                                    <AlertCircle size={16} />
                                    <span>Something went wrong. Please try again.</span>
                                </div>
                            )}

                            <Button type="submit" className="w-full" disabled={status === 'loading'}>
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    )}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-foreground/50 text-sm mb-2">Or email me directly at</p>
                    <a href="mailto:hello@istiyaq.com" className="text-primary hover:underline flex items-center justify-center gap-2">
                        <Mail size={16} /> hello@istiyaq.com
                    </a>
                </div>
            </div>
        </div>
    );
}
