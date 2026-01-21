import { CheckCircle2 } from 'lucide-react';

const reasons = [
    {
        title: 'Retention-First Approach',
        description: 'Every cut, transition, and effect is designed to keep the viewer watching.',
    },
    {
        title: 'Creator-Centric Mindset',
        description: 'I understand the algorithms and what makes content perform on YouTube and Instagram.',
    },
    {
        title: 'Systems Over Random Edits',
        description: 'I build workflows that ensure consistency and speed without dropping quality.',
    },
    {
        title: 'Clean & Modern Visuals',
        description: 'A premium aesthetic that elevates your brand perception instantly.',
    },
];

export default function WhyChooseMe() {
    return (
        <section className="py-24 px-6 bg-white/5">
            <div className="container mx-auto max-w-5xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Me?</h2>
                    <p className="text-foreground/70 max-w-lg mx-auto">
                        Beyond just editing, I bring a strategic partnership to your content creation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {reasons.map((reason, index) => (
                        <div key={index} className="flex gap-4">
                            <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                            <div>
                                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                                <p className="text-foreground/70 leading-relaxed">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
