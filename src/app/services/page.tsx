import Card from '@/components/Card';
import Button from '@/components/Button';
import { Video, PenTool, Youtube, Cpu, Check } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Istiyaq - Video Editing & Automation',
    description: 'Specialized video editing services for short-form, long-form, and motion graphics, plus automation systems for creators.',
};

const services = [
    {
        icon: <Video className="text-primary" size={40} />,
        title: 'Short-Form Video Editing',
        description: 'Maximize retention on Instagram Reels, TikTok, and YouTube Shorts. I focus on pacing, hooks, and sound design to keep viewers watching.',
        features: ['Hook optimization', 'Dynamic captions', 'Sound design & mixing', 'fast delivery']
    },
    {
        icon: <PenTool className="text-secondary" size={40} />,
        title: 'Motion Graphics',
        description: 'Elevate your brand with custom animations. From logo reveals to complex title sequences that explain your concepts visually.',
        features: ['Logo animation', 'Explainer graphics', 'Lower thirds', 'Custom transitions']
    },
    {
        icon: <Youtube className="text-red-500" size={40} />,
        title: 'YouTube Long-Form',
        description: 'Storytelling-driven editing for long-form content. I maintain the flow while removing fluff to increase Average View Duration (AVD).',
        features: ['Narrative structure', 'B-roll sourcing', 'Color grading', 'Thumbnail consultation']
    },
    {
        icon: <Cpu className="text-blue-400" size={40} />,
        title: 'Content Systems',
        description: 'I help you organize your production workflow so you can focus on filming while I handle the post-production pipeline.',
        features: ['File management', 'Template creation', 'Workflow automation', 'Strategy calls']
    },
];

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Services tailored for <span className="text-primary">Growth</span>.</h1>
                <p className="text-xl text-foreground/70">
                    I don't just edit videos; I build content assets that perform.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {services.map((service, index) => (
                    <Card key={index} className="flex flex-col h-full border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="mb-6 p-4 bg-background rounded-xl w-fit border border-white/10">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-foreground/70 mb-8 leading-relaxed">
                            {service.description}
                        </p>
                        <ul className="space-y-3 mt-auto mb-8">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                    <Check className="text-primary" size={16} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <Button href="/contact" variant="outline" className="w-full">
                            Let's Talk
                        </Button>
                    </Card>
                ))}
            </div>

            {/* Pricing Philosophy */}
            <div className="bg-card-bg border border-border rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">Simple, Transparent Pricing</h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                    I don't believe in generic price lists because every project has unique needs.
                    I offer <strong>project-based pricing</strong> or <strong>monthly retainers</strong> for consistent creators.
                </p>
                <Button size="lg" href="/contact">
                    Get a Custom Quote
                </Button>
            </div>
        </div>
    );
}
