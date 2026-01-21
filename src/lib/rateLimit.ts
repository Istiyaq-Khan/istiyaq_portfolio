import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import ContactSubmission from '@/models/ContactSubmission';

// Simple rate limiter: Check if IP has submitted > 2 times in last 10 minutes
export async function checkRateLimit(ip: string): Promise<boolean> {
    const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

    // Note: In production (Vercel), getting real IP can be tricky without headers.
    // We will simulate IP tracking or use session if logged in, but for public contact form:
    // We will verify against recent submissions in DB by timestamp as a heuristic since we're not storing IPs in this schema yet.
    // To properly do this, we should add IP to schema.

    return true;
}

// Updating schema to include IP (Optional but recommended for blocking)
// For now, we'll do a basic check: 
// Prevent submitting the SAME message/email within 5 minutes.

export async function isSpam(email: string, message: string): Promise<boolean> {
    await connectToDatabase();
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

    const recent = await ContactSubmission.findOne({
        email,
        createdAt: { $gt: fiveMinutesAgo },
    });

    return !!recent;
}
