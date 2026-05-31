import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About Istiyaq Khan Razin | AI Workflow Engineer & IKK Studio Founder',
    description: 'Learn about Istiyaq Khan Razin, a Sylhet-based creative technologist bridging video editing and AI automation. Founder of IKK Studio specializing in content systems for YouTubers and creators.',
    keywords: [
        'Istiyaq Khan bio',
        'IKK Studio founder',
        'AI automation engineer',
        'content creator tools',
        'Sylhet technology',
        'video editor biography',
        'Python automation expert',
        'n8n specialist',
        'creator systems',
    ],
    openGraph: {
        title: 'About Istiyaq Khan Razin | AI Workflow Engineer & IKK Studio Founder',
        description: 'Sylhet-based creative technologist bridging video editing and AI automation. Founder of IKK Studio.',
        url: 'https://istiyaq.com/about',
        type: 'profile',
    },
    alternates: {
        canonical: 'https://istiyaq.com/about',
    },
};

export default function AboutPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Istiyaq Khan Razin',
        jobTitle: 'Founder & Automation Engineer',
        url: 'https://istiyaq.com/about',
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
            
            <AboutClient />
        </div>
    );
}
