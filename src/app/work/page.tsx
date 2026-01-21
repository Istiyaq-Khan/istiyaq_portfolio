import Link from 'next/link';
import WorkGallery from '@/components/WorkGallery';
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

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Selected Work</h1>
                <p className="text-foreground/70 max-w-2xl text-lg">
                    A collection of edits, animations, and systems designed to drive engagement.
                </p>
            </div>

            <WorkGallery initialProjects={projects} />
        </div>
    );
}
