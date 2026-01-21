import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import ContactSubmission from '@/models/ContactSubmission';

export async function POST(req: Request) {
    try {
        const { name, email, projectType, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        await connectToDatabase();

        const submission = await ContactSubmission.create({
            name,
            email,
            projectType,
            message,
        });

        return NextResponse.json({ success: true, data: submission }, { status: 201 });
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
