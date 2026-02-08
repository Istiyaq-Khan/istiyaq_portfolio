import Link from 'next/link';
import Button from '@/components/Button';
import { ArrowLeft, Check } from 'lucide-react';
import connectToDatabase from '@/lib/db';
import Project from '@/models/Project';
import { Metadata } from 'next';
import { truncateDescription } from '@/lib/seo-utils';

interface PageProps {
    params: Promise<{ slug: string }>;
}

interface IProject {
    _id?: string;
    title: string;
    category: string;
    description: string;
    videoUrl?: string;
    thumbnailUrl: string;
    challenges?: string[];
    tools: string[];
    skills: string[];
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    slug: string;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    await connectToDatabase();
    const project = await Project.findOne({ slug }).lean() as unknown as IProject;

    if (!project) {
        return {
            title: 'Project Not Found | Istiyaq Khan',
            description: 'The requested project could not be found.',
        };
    }

    const title = project.metaTitle || `${project.title} | Istiyaq Khan Portfolio`;
    const description = project.metaDescription || truncateDescription(project.description, 160);
    const keywords = project.keywords || [
        project.title,
        project.category,
        ...project.tools,
        ...project.skills,
        'Istiyaq Khan',
        'portfolio'
    ];

    return {
        title,
        description,
        keywords,
        openGraph: {
            title,
            description,
            type: 'article',
            url: `https://istiyaq.vercel.app/work/${slug}`,
            images: [
                {
                    url: project.thumbnailUrl,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [project.thumbnailUrl],
        },
        alternates: {
            canonical: `/work/${slug}`,
        },
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;

    // DB Call
    await connectToDatabase();
    const project = await Project.findOne({ slug }).lean() as unknown as IProject;

    if (!project) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Button href="/work">Return to Work</Button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <Link href="/work" className="inline-flex items-center text-sm text-foreground/60 hover:text-primary mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Work
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content (Video + Description) */}
                <div className="lg:col-span-2">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">{project.title}</h1>

                    {/* Video Player Handling */}
                    <div className="aspect-video bg-black rounded-xl border border-white/10 overflow-hidden mb-8 relative">
                        {project.videoUrl && (project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be')) ? (
                            <iframe
                                src={project.videoUrl.replace('watch?v=', 'embed/').split('&')[0]}
                                className="w-full h-full"
                                title={project.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : project.videoUrl ? (
                            <video
                                controls
                                className="w-full h-full object-cover"
                                poster={project.thumbnailUrl} // Use project thumbnail as poster
                            >
                                <source src={project.videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-foreground/30">
                                No video available
                            </div>
                        )}
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <h3 className="text-xl font-bold mb-4">About the Project</h3>
                        {/* Rich Text Rendering */}
                        <div
                            className="text-foreground/80 leading-relaxed mb-6 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5"
                            dangerouslySetInnerHTML={{ __html: project.description }}
                        />

                        {project.challenges && project.challenges.length > 0 && (
                            <>
                                <h3 className="text-xl font-bold mb-4">Key Challenges & Solutions</h3>
                                <ul className="list-none space-y-2 pl-0">
                                    {project.challenges.map((item: string, i: number) => (
                                        <li key={i} className="flex gap-3 text-foreground/80">
                                            <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {/* Fallback for skills/tools if challenges aren't sufficient content */}
                        {(!project.challenges || project.challenges.length === 0) && (
                            <div className="bg-white/5 p-6 rounded-lg border border-white/10 mt-8">
                                <h3 className="text-lg font-bold mb-2">Technical Summary</h3>
                                <p className="text-foreground/70">
                                    Built using {project.tools?.join(', ')} focusing on {project.skills?.join(', ')}.
                                </p>
                            </div>
                        )}
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
                                {project.tools.map((tool: string) => (
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
