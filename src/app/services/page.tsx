
import Card from '@/components/Card';
import Button from '@/components/Button';
import { Video, PenTool, Youtube, Cpu, Check, Box } from 'lucide-react';
import { Metadata } from 'next';
import connectToDatabase from '@/lib/db';
import ServiceModel from '@/models/Service'; // Renamed to avoid naming conflict

export const metadata: Metadata = {
    title: 'Services | Istiyaq - Video Editing & Automation',
    description: 'Specialized video editing services for short-form, long-form, and motion graphics, plus automation systems for creators.',
};

export const revalidate = 60;

// Icon mapping
const iconMap: any = {
    Video: <Video className="text-primary" size={40} />,
    PenTool: <PenTool className="text-secondary" size={40} />,
    Youtube: <Youtube className="text-red-500" size={40} />,
    Cpu: <Cpu className="text-blue-400" size={40} />,
};

async function getServices() {
    await connectToDatabase();
    // Auto-seed handled in API, but for direct DB call we just fetch.
    // If empty, we might want to trigger the seed or just return empty.
    const services = await ServiceModel.find({}).sort({ order: 1 });
    return services;
}

export default async function ServicesPage() {
    const services = await getServices();

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Services tailored for <span className="text-primary">Growth</span>.</h1>
                <p className="text-xl text-foreground/70">
                    I don't just edit videos; I build content assets that perform.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {services.map((service: any) => (
                    <Card key={service._id} className="flex flex-col h-full border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                        <div className="mb-6 p-4 bg-background rounded-xl w-fit border border-white/10">
                            {iconMap[service.icon] || <Box size={40} className="text-primary" />}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-foreground/70 mb-8 leading-relaxed">
                            {service.description}
                        </p>
                        <ul className="space-y-3 mt-auto mb-8">
                            {service.features.map((feature: string, i: number) => (
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
