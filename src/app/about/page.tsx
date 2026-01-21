import Image from 'next/image';
import Button from '@/components/Button';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            {/* Intro Section */}
            <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
                <div className="w-full md:w-1/2">
                    <div className="aspect-[4/5] relative rounded-lg overflow-hidden border border-white/10 bg-white/5">
                        <div className="absolute inset-0 flex items-center justify-center text-foreground/20">
                            {/* Replace with actual image later */}
                            [Your Image Here]
                        </div>
                        {/* <Image src="/path/to/image.jpg" fill alt="Istiyaq" className="object-cover" /> */}
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">More than just an Editor.</h1>
                    <p className="text-xl text-foreground/80 leading-relaxed mb-6">
                        I'm a video editor and creative strategist who helps creators & brands build authority through consistent, high-quality content.
                    </p>
                    <p className="text-foreground/70 leading-relaxed mb-8">
                        My journey started with a love for storytelling. Over time, I realized that great edits aren't enough—you need systems to scale. That's why I'm currently expanding my skillset into <strong>automation and workflow engineering</strong> to provide even more value to my clients.
                    </p>

                    <div className="flex gap-4">
                        <Button href="/contact">Work With Me</Button>
                        <Button variant="outline" href="/work">See My Edits</Button>
                    </div>
                </div>
            </div>

            {/* Beliefs / Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {[
                    { title: "Clarity Over Flash", desc: "If the viewer is confused, you've lost them. I prioritize clear communication." },
                    { title: "Consistency Is King", desc: "One viral video is luck. A system for posting quality content daily is a business." },
                    { title: "Always Evolving", desc: "The digital landscape changes fast. I stay ahead by learning new tools like automation." }
                ].map((item, i) => (
                    <div key={i} className="p-6 border-l-2 border-primary bg-white/5">
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-foreground/70">{item.desc}</p>
                    </div>
                ))}
            </div>

            {/* Skills Grid */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Tools & Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        'Premiere Pro', 'After Effects', 'Photoshop', 'DaVinci Resolve',
                        'Next.js', 'React', 'Tailwind CSS', 'n8n (Learning)',
                        'Python (Basics)', 'Notion', 'Figma', 'OpenAI API'
                    ].map((skill) => (
                        <div key={skill} className="bg-card-bg border border-border p-4 rounded text-center font-medium hover:border-primary/50 transition-colors">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
