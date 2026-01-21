import Link from 'next/link';
import Card from '@/components/Card';
import { PlayCircle } from 'lucide-react';
import { Metadata } from 'next';
import connectToDatabase from '@/lib/db';
import Project from '@/models/Project';

export const metadata: Metadata = {
    title: 'Work | Istiyaq Khan - Portfolio',
    description: 'Selected video editing and automation projects.',
};

export const revalidate = 60; // Revalidate every minute

async function getProjects() {
    await connectToDatabase();
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();
    return projects.map((p: any) => ({ ...p, _id: p._id.toString() }));
}

export default async function WorkPage() {
    const projects = await getProjects();

    // Grouping or filtering filter logic can be done client side if interactive, 
    // or we can just list them all for now. The prompt asked for specific categories.
    // For now, I will render all and keep the filter UI visuals static or simple until further refinement.

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Selected Work</h1>
                <p className="text-foreground/70 max-w-2xl text-lg">
                    A collection of edits, animations, and systems designed to drive engagement.
                </p>
            </div>

            {/* Filter Tabs (Client Side Logic would be ideal here but sticking to server render for simplicity) */}
            {/* Future Improvement: Make this interactive with query params */}
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
                {projects.length === 0 ? (
                    <p className="text-foreground/50">No projects yet. Add some from the Admin Dashboard.</p>
                ) : (
                    projects.map((project: any) => (
                        <Link key={project.slug} href={`/work/${project.slug}`}>
                            <Card hoverEffect className="group cursor-pointer overflow-hidden h-full">
                                {/* Thumbnail Container */}
                                <div className="relative aspect-video rounded-lg overflow-hidden bg-white/10 mb-4">
                                    {/* Placeholder Image handling */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={project.thumbnailUrl || '/placeholder.jpg'}
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
                                    {project.projectType && (
                                        <span className="text-xs text-foreground/40 border border-white/10 px-2 py-1 rounded">
                                            {project.projectType}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex gap-2 flex-wrap">
                                    {project.skills?.slice(0, 3).map((skill: string) => (
                                        <span key={skill} className="text-xs text-foreground/50 border border-white/10 px-2 py-0.5 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        </Link>
                    )))}
            </div>
        </div>
    );
}
