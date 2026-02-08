import Link from 'next/link';
import WorkGallery from '@/components/WorkGallery';
import { FeaturedProjectsSection } from '@/components/featured-projects-section';
import { Metadata } from 'next';
import connectToDatabase from '@/lib/db';
import Project from '@/models/Project';

export const metadata: Metadata = {
    title: 'Portfolio | Video Editing & Automation Projects by Istiyaq Khan',
    description: 'Browse my portfolio of video editing, motion graphics, and AI automation projects. From short-form content to complete workflow systems for YouTubers and creators.',
    keywords: [
        'video editing portfolio',
        'motion graphics showcase',
        'automation projects',
        'content creation examples',
        'YouTube editing samples',
        'short-form video portfolio',
        'After Effects projects',
        'creative portfolio',
    ],
    openGraph: {
        title: 'Portfolio | Video Editing & Automation Projects',
        description: 'Browse my portfolio of video editing, motion graphics, and AI automation projects.',
        url: 'https://istiyaq.vercel.app/work',
        type: 'website',
    },
    alternates: {
        canonical: '/work',
    },
};

export const revalidate = 60; // Revalidate every minute

async function getProjects() {
    await connectToDatabase();
    const projects = await Project.find({}).sort({ createdAt: -1 }).lean();
    return projects.map((p: any) => ({ ...p, _id: p._id.toString() }));
}

export default async function WorkPage() {
    const projects = await getProjects();

    return (
        <>
            {/* Featured projects section at the top */}
            <FeaturedProjectsSection />

            <div className="container mx-auto px-6 py-12">
                <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">All Projects</h1>
                    <p className="text-foreground/70 max-w-2xl text-lg">
                        A collection of edits, animations, and systems designed to drive engagement.
                    </p>
                </div>

                <WorkGallery initialProjects={projects} />
            </div>
        </>
    );
}
