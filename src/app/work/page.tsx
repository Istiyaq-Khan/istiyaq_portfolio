import Link from 'next/link';
import Card from '@/components/Card';
import { PlayCircle } from 'lucide-react';

// Static data for now (since DB might be empty)
const projects = [
    {
        slug: 'fitness-reel',
        title: 'High-Energy Fitness Reel',
        category: 'Short-Form',
        thumbnailUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
        skills: ['Fast Pacing', 'Sound Design'],
        tools: ['Premiere Pro'],
    },
    {
        slug: 'tech-review',
        title: 'Tech Review Edit',
        category: 'YouTube',
        thumbnailUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
        skills: ['Storytelling', 'B-Roll Sync'],
        tools: ['Premiere Pro', 'After Effects'],
    },
    {
        slug: 'brand-motion',
        title: 'Brand Logo Animation',
        category: 'Motion Graphics',
        thumbnailUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
        skills: ['Logo Reveal', 'Keyframing'],
        tools: ['After Effects'],
    }
];

export default function WorkPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Selected Work</h1>
                <p className="text-foreground/70 max-w-2xl text-lg">
                    A collection of edits, animations, and systems designed to drive engagement.
                </p>
            </div>

            {/* Filter Tabs (Static for UI) */}
            <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
                {['All', 'Short-Form', 'Motion Graphics', 'YouTube'].map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${tab === 'All'
                            ? 'bg-primary text-white'
                            : 'bg-white/5 hover:bg-white/10 text-foreground/80'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link key={project.slug} href={`/work/${project.slug}`}>
                        <Card hoverEffect className="group cursor-pointer overflow-hidden h-full">
                            {/* Thumbnail Container */}
                            <div className="relative aspect-video rounded-lg overflow-hidden bg-white/10 mb-4">
                                {/* Placeholder Image */}
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.thumbnailUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <PlayCircle size={48} className="text-white" />
                                </div>
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <div className="flex gap-2 flex-wrap">
                                {project.skills.map(skill => (
                                    <span key={skill} className="text-xs text-foreground/50 border border-white/10 px-2 py-0.5 rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
