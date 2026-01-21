import Link from 'next/link';
import Button from '@/components/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6 pt-20">
            <div className="text-center">
                <h1 className="text-[120px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary leading-none mb-4 font-mono">
                    404
                </h1>
                <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
                <p className="text-foreground/60 mb-8 max-w-md mx-auto">
                    The system cannot locate the file you are looking for. It might have been deleted, moved, or never existed.
                </p>
                <Button href="/">Back to Home</Button>
            </div>
        </div>
    );
}
