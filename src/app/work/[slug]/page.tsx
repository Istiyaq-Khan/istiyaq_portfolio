import Link from 'next/link';
import Button from '@/components/Button';
import { ArrowLeft, Check } from 'lucide-react';

// Mock params handling for Next.js 15+ (needs to be async)
// Actually in Next 15 `params` is a Promise.
// But this is a server component so I need to await it.

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;

    // Mock data lookup (would be DB call)
    const project = {
        title: slug === 'fitness-reel' ? 'High-Energy Fitness Reel' : 'Sample Project',
        category: 'Short-Form',
        description: 'This project focused on maximizing retention through fast cuts and engaging sound design. The goal was to keep viewers watching until the very end.',
        challenges: [
            'Maintaining high energy for 60 seconds',
            'Syncing cuts to a fast-paced beat',
            'Designing custom text animations'
        ],
        tools: ['Premiere Pro', 'After Effects'],
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' // Placeholder
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <Link href="/work" className="inline-flex items-center text-sm text-foreground/60 hover:text-primary mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Work
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content (Video + Description) */}
                <div className="lg:col-span-2">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">{project.title}</h1>

                    {/* Video Player Placeholder */}
                    <div className="aspect-video bg-black rounded-xl border border-white/10 overflow-hidden mb-8 relative">
                        <video
                            controls
                            className="w-full h-full object-cover"
                            poster="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80"
                        >
                            <source src={project.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <h3 className="text-xl font-bold mb-4">About the Project</h3>
                        <p className="text-foreground/80 leading-relaxed mb-6">
                            {project.description}
                        </p>

                        <h3 className="text-xl font-bold mb-4">Key Challenges & Solutions</h3>
                        <ul className="list-none space-y-2 pl-0">
                            {project.challenges.map((item, i) => (
                                <li key={i} className="flex gap-3 text-foreground/80">
                                    <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebar (Meta Info) */}
                <div className="lg:col-span-1">
                    <div className="bg-card-bg border border-border rounded-xl p-6 sticky top-24">
                        <div className="mb-6">
                            <h4 className="text-sm uppercase tracking-wider text-foreground/50 font-bold mb-2">Category</h4>
                            <p className="text-lg font-medium">{project.category}</p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-sm uppercase tracking-wider text-foreground/50 font-bold mb-2">Tools Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map(tool => (
                                    <span key={tool} className="bg-white/5 px-3 py-1 rounded text-sm">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Button className="w-full mt-4" href="/contact">
                            Hire Me for Similar Work
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
