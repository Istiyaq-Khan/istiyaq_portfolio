import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Project from '@/models/Project';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

// GET: Fetch all projects
export async function GET(req: Request) {
    await connectToDatabase();

    // Check for seed param
    const { searchParams } = new URL(req.url);
    if (searchParams.get('seed') === 'true') {
        const session = await getServerSession(authOptions);
        if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

        const demoProject = {
            title: "Neon Genesis | Brand Overhaul",
            slug: "neon-genesis",
            category: "Motion Graphics",
            projectType: "Client",
            thumbnailUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Cyberpunk placeholder
            description: "A comprehensive visual identity overhaul for a cyberpunk-themed esports team. The project involved 3D logo animation, stream overlays, and a high-energy intro sequence using After Effects and Blender. The goal was to capture the 'glitch' aesthetic while maintaining brand readability.",
            skills: ["3D Animation", "Sound Design", "Brand Strategy", "Glitch Art"],
            tools: ["After Effects", "Blender", "Illustrator", "Audition"],
            featured: true
        };

        // Prevent duplicate
        const existing = await Project.findOne({ slug: demoProject.slug });
        if (!existing) {
            await Project.create(demoProject);
        }

        return NextResponse.json({ success: true, message: 'Demo project seeded' });
    }

    try {
        const projects = await Project.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: projects });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch projects' }, { status: 500 });
    }
}

// POST: Create a new project (Protected)
export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    try {
        const body = await req.json();
        const project = await Project.create(body);
        return NextResponse.json({ success: true, data: project }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to create project' }, { status: 400 });
    }
}

// PUT: Update a project (Protected)
export async function PUT(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    try {
        const { _id, ...updateData } = await req.json();
        const project = await Project.findByIdAndUpdate(_id, updateData, { new: true });
        return NextResponse.json({ success: true, data: project });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to update project' }, { status: 400 });
    }
}

// DELETE: Delete a project (Protected)
export async function DELETE(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await Project.findByIdAndDelete(id);
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to delete project' }, { status: 400 });
    }
}
