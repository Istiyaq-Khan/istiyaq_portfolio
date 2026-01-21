'use client';

import { useEffect } from 'react';
import Button from '@/components/Button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6 pt-20">
            <div className="text-center bg-card-bg border border-red-500/20 p-8 rounded-xl max-w-md w-full">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                    <AlertTriangle size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-2">System Error</h2>
                <p className="text-foreground/60 mb-6 font-mono text-sm break-all">
                    {error.message || "An unexpected error occurred."}
                </p>
                <div className="flex gap-4 justify-center">
                    <Button onClick={() => reset()} variant="outline">Try Again</Button>
                    <Button href="/">Return Home</Button>
                </div>
            </div>
        </div>
    );
}
