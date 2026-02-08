import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact | Istiyaq Khan - Let\'s Work Together',
    description: 'Get in touch for video editing, motion graphics, or automation consulting. I usually respond within 24 hours.',
};

export default function ContactPage() {
    return (
        <div className="container mx-auto px-6 py-12 min-h-[80vh] flex items-center">
            <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Copy */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Let's start a <br />
                        <span className="text-primary">Conversation</span>.
                    </h1>
                    <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                        Ready to elevate your content or automate your workflow?
                        Fill out the form, and I'll get back to you with a custom plan.
                    </p>

                    <div className="space-y-6">
                        <a href="mailto:razinkhn3245@gmail.com" className="flex items-center gap-4 text-xl font-mono font-medium hover:text-primary transition-colors">
                            <div className="p-3 bg-white/5 rounded-full">
                                <Mail className="text-secondary" size={24} />
                            </div>
                            razinkhan3245@gmail.com
                        </a>

                        <div className="flex items-center gap-4 text-xl font-mono font-medium text-foreground/80">
                            <div className="p-3 bg-white/5 rounded-full">
                                <MapPin className="text-primary" size={24} />
                            </div>
                            Sylhet, Bangladesh
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div>
                    <ContactForm />
                </div>

            </div>
        </div>
    );
}
