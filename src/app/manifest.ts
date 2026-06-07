import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Istiyaq Khan Razin | IKK Studio',
    short_name: 'Istiyaq Khan',
    description: 'AI Workflow Engineer & Founder of IKK Studio',
    start_url: '/',
    display: 'standalone',
    background_color: '#111111',
    theme_color: '#8B5CF6',
    icons: [
      {
        src: '/icon',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
