"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/Button';

export default function AboutClient() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: containerRef });

    useGSAP(() => {
        // Hero entrance animation
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        tl.from('.hero-img', {
            y: 30,
            opacity: 0,
            duration: 0.8,
        })
        .from('.hero-text > *', {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
        }, '-=0.4');

        // Scroll animations for sections
        gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
            });
        });

        // Stagger for tech stack
        gsap.from('.tech-item', {
            scrollTrigger: {
                trigger: '.tech-grid',
                start: 'top 80%',
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out',
        });
    });

    const handleTechHover = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            y: -5,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            duration: 0.2,
            ease: 'power2.out',
        });
        gsap.to(e.currentTarget.querySelector('.tool-name'), {
            color: '#8B5CF6', // --color-accent-primary
            duration: 0.2,
            ease: 'power2.out',
        });
    });

    const handleTechLeave = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
        gsap.to(e.currentTarget, {
            y: 0,
            backgroundColor: 'transparent',
            duration: 0.2,
            ease: 'power2.out',
            clearProps: 'backgroundColor',
        });
        gsap.to(e.currentTarget.querySelector('.tool-name'), {
            color: '',
            duration: 0.2,
            ease: 'power2.out',
            clearProps: 'color',
        });
    });

    return (
        <div ref={containerRef}>
            {/* Hero / Intro */}
            <section className="mb-24 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2 hero-img">
                    <div className="aspect-[4/5] bg-card-bg border border-border rounded-xl overflow-hidden relative group">
                        <Image
                            src="/Istiyaq-Khan-Razin.png"
                            alt="Istiyaq Khan Razin - Creative Technologist"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 hero-text">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        The <span className="text-primary">Creative</span> meets <br />
                        The <span className="text-secondary">Engineer</span>.
                    </h1>

                    <div className="space-y-4 text-lg text-foreground/80 leading-relaxed mb-8">
                        <p>
                            I am <strong>Istiyaq Khan</strong>, a Sylhet-based creative technologist and Founder of <strong>IKK Studio</strong>.
                        </p>
                        <p>
                            My mission is simple: <strong>Solve efficiency problems for creators.</strong>
                        </p>
                        <p>
                            I don't just edit videos; I build the <em>systems</em> that scale them. By combining motion graphics with Python and n8n automations, I help YouTubers and brands repurpose content, manage workflows, and grow without burnout.
                        </p>
                    </div>

                    <Button href="/contact">Let's Build Systems</Button>
                </div>
            </section>

            {/* Experience & Vision */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 fade-in-section">
                <div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-primary rounded-full" />
                        Experience
                    </h2>

                    <div className="space-y-8 border-l border-border pl-8 relative">
                        {/* Timeline Item 1 */}
                        <div className="relative">
                            <span className="absolute -left-[39px] top-1 w-5 h-5 bg-background border-2 border-primary rounded-full" />
                            <h3 className="text-xl font-bold">Founder</h3>
                            <p className="text-primary font-mono text-sm mb-2">IKK Studio • Dec 2025 - Present</p>
                            <p className="text-foreground/70">
                                Specialized agency focused on AI Workflow & Content Systems.
                                Helping "solopreneurs" scale through automated content pipelines.
                            </p>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="relative">
                            <span className="absolute -left-[39px] top-1 w-5 h-5 bg-background border-2 border-border rounded-full" />
                            <h3 className="text-xl font-bold">Freelance Designer & Editor</h3>
                            <p className="text-foreground/50 font-mono text-sm mb-2">Self-Employed • Feb 2024 - Present</p>
                            <p className="text-foreground/70">
                                Delivered high-retention video edits and motion graphics for diverse clients.
                                Mastered Adobe Creative Suite (After Effects, Photoshop).
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-secondary rounded-full" />
                        The Vision
                    </h2>
                    <div className="bg-card-bg border border-border p-8 rounded-xl h-full">
                        <p className="text-xl font-medium mb-6 leading-relaxed">
                            "I am not just editing videos; I am building the systems that edit videos."
                        </p>
                        <p className="text-foreground/70 mb-6">
                            My transition from individual execution to <strong>system architecture</strong> is driven by a desire to productize creativity.
                        </p>
                        <p className="text-foreground/70">
                            Future Focus: <strong>AI Agents, Marketing Automation, and High-Volume Content Pipelines.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Editorial Grid */}
            <section className="fade-in-section">
                <h2 className="text-3xl font-bold mb-10 text-center">Tech Stack & Tools</h2>
                <div className="tech-grid grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
                    {[
                        { cat: "Creative", tool: "After Effects" },
                        { cat: "Creative", tool: "Premiere Pro" },
                        { cat: "Creative", tool: "Photoshop" },
                        { cat: "Creative", tool: "DaVinci Resolve" },
                        { cat: "Automation", tool: "n8n" },
                        { cat: "Automation", tool: "Python" },
                        { cat: "Automation", tool: "OpenAI API" },
                        { cat: "Web", tool: "Next.js" },
                    ].map((item, idx) => (
                        <div 
                            key={idx} 
                            onMouseEnter={handleTechHover}
                            onMouseLeave={handleTechLeave}
                            className="tech-item bg-background p-8 transition-colors group cursor-pointer"
                        >
                            <span className="block text-xs font-mono text-foreground/40 mb-2 uppercase tracking-widest">{item.cat}</span>
                            <span className="tool-name block text-xl font-mono font-bold transition-colors">{item.tool}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
