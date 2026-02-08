'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import { PlayCircle } from 'lucide-react';

interface Project {
    _id: string;
    title: string;
    slug: string;
    category: string;
    projectType: string;
    thumbnailUrl: string;
    skills: string[];
}

interface WorkGalleryProps {
    initialProjects: Project[];
}

export default function WorkGallery({ initialProjects }: WorkGalleryProps) {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Short-Form', 'Motion Graphics', 'YouTube', 'Automation'];

    const filteredProjects = initialProjects.filter(project => {
        if (filter === 'All') return true;
        return project.category === filter;
    });

    return (
        <>
            {/* Filter Tabs */}
            <div className="flex gap-4 mb-12 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-5 py-2 rounded-full text-sm font-mono font-bold whitespace-nowrap transition-all duration-300 ${filter === category
                            ? 'bg-cta text-black shadow-[0_0_15px_rgba(163,230,53,0.3)]'
                            : 'bg-white/5 hover:bg-white/10 text-foreground/70 hover:text-foreground'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.length === 0 ? (
                    <div className="col-span-full text-center py-20 opacity-50">
                        <p className="text-xl">No projects found in this category.</p>
                    </div>
                ) : (
                    filteredProjects.map((project) => (
                        <Link key={project.slug} href={`/work/${project.slug}`}>
                            <Card hoverEffect className="group cursor-pointer overflow-hidden h-full">
                                {/* Thumbnail Container */}
                                <div className="relative aspect-video rounded-lg overflow-hidden bg-white/10 mb-4">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={project.thumbnailUrl || '/placeholder.jpg'}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <PlayCircle size={48} className="text-cta" />
                                    </div>
                                </div>

                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono text-accent-primary bg-accent-primary/10 px-2 py-1 rounded border border-accent-primary/20">
                                        {project.category}
                                    </span>
                                    {project.projectType && (
                                        <span className="text-xs font-mono text-foreground/40 border border-white/10 px-2 py-1 rounded">
                                            {project.projectType}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-cta transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex gap-2 flex-wrap">
                                    {project.skills?.slice(0, 3).map((skill) => (
                                        <span key={skill} className="text-xs font-mono text-foreground/50 border border-white/10 px-2 py-0.5 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </Link>
                    ))
                )}
            </div>
        </>
    );
}
