import { Metadata } from 'next';
import Button from '@/components/Button';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About Istiyaq | Video Editor & Automation Engineer',
    description: 'Founder of IKK Studio. I bridge the gap between creative storytelling and technical automation for YouTubers and brands.',
};

export default function AboutPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Istiyaq Khan Razin',
        jobTitle: 'Founder & Automation Engineer',
        url: 'https://istiyaq.vercel.app/about',
        sameAs: [
            'https://github.com/Istiyaq-Khan',
            'https://www.linkedin.com/in/istiyaq-khan',
            'https://www.instagram.com/ist.iyaqkhan',
            'https://www.youtube.com/@istiyaq-khan10',
            'https://x.com/istiyaqkhanr'
        ],
        knowsAbout: ['Video Editing', 'Motion Graphics', 'Python', 'n8n', 'Automation', 'YouTube Growth'],
        description: 'A Sylhet-based professional positioning himself at the intersection of creative media and technical automation.'
    };

    return (
        <div className="container mx-auto px-6 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero / Intro */}
            <section className="mb-24 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                    {/* Placeholder for real image */}
                    <div className="aspect-[4/5] bg-card-bg border border-border rounded-xl overflow-hidden relative group">
                        <Image
                            src="/Istiyaq-Khan-Razin.png"
                            alt="Istiyaq Khan Razin - Creative Technologist"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        The <span className="text-primary">Creative</span> meets <br />
                        The <span className="text-secondary">Engineer</span>.
                    </h1>

                    <div className="space-y-4 text-lg text-foreground/80 leading-relaxed mb-8">
                        <p>
                            I am <strong>Istiyaq Khan</strong>, a Sylhet-based creative technologist and Founder of <strong>IKK Studio</strong>.
                        </p>
                        <p>
                            My mission is simple: <strong>Solve efficiency problems for creators.</strong>
                        </p>
                        <p>
                            I don't just edit videos; I build the <em>systems</em> that scale them. By combining motion graphics with Python and n8n automations, I help YouTubers and brands repurpose content, manage workflows, and grow without burnout.
                        </p>
                    </div>

                    <Button href="/contact">Let's Build Systems</Button>
                </div>
            </section>

            {/* Experience & Vision */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                <div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-primary rounded-full" />
                        Experience
                    </h2>

                    <div className="space-y-8 border-l border-border pl-8 relative">
                        {/* Timeline Item 1 */}
                        <div className="relative">
                            <span className="absolute -left-[39px] top-1 w-5 h-5 bg-background border-2 border-primary rounded-full" />
                            <h3 className="text-xl font-bold">Founder</h3>
                            <p className="text-primary font-mono text-sm mb-2">IKK Studio • Dec 2025 - Present</p>
                            <p className="text-foreground/70">
                                Specialized agency focused on AI Workflow & Content Systems.
                                Helping "solopreneurs" scale through automated content pipelines.
                            </p>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="relative">
                            <span className="absolute -left-[39px] top-1 w-5 h-5 bg-background border-2 border-border rounded-full" />
                            <h3 className="text-xl font-bold">Freelance Designer & Editor</h3>
                            <p className="text-foreground/50 font-mono text-sm mb-2">Self-Employed • Feb 2024 - Present</p>
                            <p className="text-foreground/70">
                                Delivered high-retention video edits and motion graphics for diverse clients.
                                Mastered Adobe Creative Suite (After Effects, Photoshop).
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-secondary rounded-full" />
                        The Vision
                    </h2>
                    <div className="bg-card-bg border border-border p-8 rounded-xl h-full">
                        <p className="text-xl font-medium mb-6 leading-relaxed">
                            "I am not just editing videos; I am building the systems that edit videos."
                        </p>
                        <p className="text-foreground/70 mb-6">
                            My transition from individual execution to <strong>system architecture</strong> is driven by a desire to productize creativity.
                        </p>
                        <p className="text-foreground/70">
                            Future Focus: <strong>AI Agents, Marketing Automation, and High-Volume Content Pipelines.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Editorial Grid */}
            <section>
                <h2 className="text-3xl font-bold mb-10 text-center">Tech Stack & Tools</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
                    {[
                        { cat: "Creative", tool: "After Effects" },
                        { cat: "Creative", tool: "Premiere Pro" },
                        { cat: "Creative", tool: "Photoshop" },
                        { cat: "Creative", tool: "DaVinci Resolve" },
                        { cat: "Automation", tool: "n8n" },
                        { cat: "Automation", tool: "Python" },
                        { cat: "Automation", tool: "OpenAI API" },
                        { cat: "Web", tool: "Next.js" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-background p-8 hover:bg-white/5 transition-colors group">
                            <span className="block text-xs text-foreground/40 mb-2 uppercase tracking-widest">{item.cat}</span>
                            <span className="block text-xl font-bold group-hover:text-primary transition-colors">{item.tool}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
