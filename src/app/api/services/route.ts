import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Service from '@/models/Service';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

// Seed data
const initialServices = [
    {
        icon: 'Video',
        title: 'Short-Form Video Editing',
        description: 'Maximize retention on Instagram Reels, TikTok, and YouTube Shorts. I focus on pacing, hooks, and sound design to keep viewers watching.',
        features: ['Hook optimization', 'Dynamic captions', 'Sound design & mixing', 'fast delivery'],
        order: 1
    },
    {
        icon: 'PenTool',
        title: 'Motion Graphics',
        description: 'Elevate your brand with custom animations. From logo reveals to complex title sequences that explain your concepts visually.',
        features: ['Logo animation', 'Explainer graphics', 'Lower thirds', 'Custom transitions'],
        order: 2
    },
    {
        icon: 'Youtube',
        title: 'YouTube Long-Form',
        description: 'Storytelling-driven editing for long-form content. I maintain the flow while removing fluff to increase Average View Duration (AVD).',
        features: ['Narrative structure', 'B-roll sourcing', 'Color grading', 'Thumbnail consultation'],
        order: 3
    },
    {
        icon: 'Cpu',
        title: 'Content Systems',
        description: 'I help you organize your production workflow so you can focus on filming while I handle the post-production pipeline.',
        features: ['File management', 'Template creation', 'Workflow automation', 'Strategy calls'],
        order: 4
    },
];

export async function GET() {
    await connectToDatabase();
    try {
        let services = await Service.find({}).sort({ order: 1 });

        // Auto-seed if empty
        if (services.length === 0) {
            services = await Service.insertMany(initialServices);
        }

        return NextResponse.json({ success: true, data: services });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to fetch services' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await connectToDatabase();
    try {
        const body = await req.json();
        const service = await Service.create(body);
        return NextResponse.json({ success: true, data: service }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to create service' }, { status: 400 });
    }
}

export async function PUT(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await connectToDatabase();
    try {
        const { _id, ...updateData } = await req.json();
        const service = await Service.findByIdAndUpdate(_id, updateData, { new: true });
        return NextResponse.json({ success: true, data: service });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to update service' }, { status: 400 });
    }
}

export async function DELETE(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    await connectToDatabase();
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

        await Service.findByIdAndDelete(id);
        return NextResponse.json({ success: true, data: {} });
    } catch (error) {
        return NextResponse.json({ success: false, error: 'Failed to delete service' }, { status: 400 });
    }
}
