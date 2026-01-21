'use client';

import Card from './Card';
import { ArrowRight, Video, PenTool, Youtube, Cpu } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: <Video className="text-primary" size={32} />,
        title: 'Short-Form Editing',
        description: 'High-retention editing for Reels, Shorts, and TikTok. Fast pacing, hooks, and captions.',
    },
    {
        icon: <PenTool className="text-secondary" size={32} />,
        title: 'Motion Graphics',
        description: 'Custom animations, titles, and visual effects to elevate your brand identity.',
    },
    {
        icon: <Youtube className="text-red-500" size={32} />,
        title: 'YouTube Editing',
        description: 'Long-form storytelling optimized for watch time. Clean cuts and engaging pacing.',
    },
    {
        icon: <Cpu className="text-blue-400" size={32} />,
        title: 'Content Systems',
        description: 'Streamlining your production workflow. From raw footage to final export.',
    },
];

export default function ServicesSnapshot() {
    return (
        <section className="py-24 px-6 container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">What I Do</h2>
                    <p className="text-foreground/70 max-w-md">
                        Specialized services tailored for modern content creators.
                    </p>
                </div>
                <Link
                    href="/services"
                    className="group flex items-center gap-2 text-primary mt-4 md:mt-0 font-medium"
                >
                    View All Services
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <Card key={index} hoverEffect className="h-full flex flex-col">
                        <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-grow">
                            {service.description}
                        </p>
                    </Card>
                ))}
            </div>
        </section>
    );
}
