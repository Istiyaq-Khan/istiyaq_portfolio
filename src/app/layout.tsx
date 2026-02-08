import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CursorProvider } from "@/components/cursor-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://istiyaq.vercel.app"),
  title: {
    default: "Istiyaq Khan Razin | AI Workflow Engineer & Founder of IKK Studio",
    template: "%s | Istiyaq Khan",
  },
  description:
    "Sylhet-based AI Workflow Engineer and creative technologist. Founder of IKK Studio helping YouTubers and creators scale content with Python, n8n, and AI automation. Specializing in video editing, motion graphics, and content pipelines.",
  applicationName: "Istiyaq Khan Portfolio",
  authors: [{ name: "Istiyaq Khan Razin", url: "https://istiyaq.vercel.app" }],
  generator: "Next.js",
  keywords: [
    // Personal branding
    "Istiyaq Khan",
    "Istiyaq Khan Razin",
    "IKK Studio",
    "IKK Studio founder",

    // Core services
    "AI workflow automation",
    "content automation systems",
    "video editing services",
    "motion graphics designer",
    "YouTube automation",
    "creator tools",

    // Technical skills
    "Python automation",
    "n8n workflows",
    "Generative AI",
    "OpenAI automation",
    "content pipelines",
    "marketing automation",

    // Creative skills
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "DaVinci Resolve",
    "video editor for hire",
    "short-form content",

    // Industry/niche
    "solopreneur tools",
    "YouTube growth",
    "content SEO",
    "automated editing",

    // Location
    "Sylhet Bangladesh",
    "video editor Sylhet",

    // Technologies
    "Next.js portfolio",
    "React developer",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Istiyaq Khan Razin",
  publisher: "Istiyaq Khan Razin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Istiyaq Khan Razin | AI Workflow Engineer & Founder of IKK Studio",
    description:
      "Sylhet-based AI Workflow Engineer and creative technologist. Founder of IKK Studio helping YouTubers and creators scale content with Python, n8n, and AI automation.",
    url: "https://istiyaq.vercel.app",
    siteName: "Istiyaq Khan", // Crucial for Google to display the correct name
    images: [
      {
        url: "/Istiyaq-Khan-Razin.png", // Ensure you have this image in public folder or update path
        width: 1200,
        height: 630,
        alt: "Istiyaq Khan Razin - AI Workflow Engineer & Founder of IKK Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Istiyaq Khan Razin | AI Workflow Engineer & Founder of IKK Studio",
    description:
      "Sylhet-based AI Workflow Engineer helping creators scale with Python, n8n, and AI automation. Founder of IKK Studio.",
    creator: "@istiyaqkhanr",
    images: ["/Istiyaq-Khan-Razin.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "r7320kg3zhgfCc-dBs17Z5HYl2vblzN0-f5aIWVVp7M",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Istiyaq Khan Razin",
  alternateName: ["Istiyaq Khan", "IKK"],
  jobTitle: "AI Workflow Engineer & Founder",
  description: "A Sylhet-based professional positioning himself at the intersection of creative media and technical automation. Founder of IKK Studio, specializing in AI workflow systems for content creators.",
  image: "https://istiyaq.vercel.app/Istiyaq-Khan-Razin.png",
  url: "https://istiyaq.vercel.app",
  sameAs: [
    "https://github.com/Istiyaq-Khan",
    "https://www.linkedin.com/in/istiyaq-khan",
    "https://x.com/istiyaqkhanr",
    "https://www.youtube.com/@istiyaq-khan10",
    "https://www.instagram.com/ist.iyaqkhan",
    "https://istiyaq-blog.vercel.app",
    "https://devpost.com/Istiyaq-Khan"
  ],
  worksFor: {
    "@type": "Organization",
    name: "IKK Studio",
    foundingDate: "2025-12",
    description: "AI Workflow & Content Systems",
    url: "https://istiyaq.vercel.app",
  },
  knowsAbout: [
    "Video Editing",
    "Motion Graphics",
    "Python Programming",
    "n8n Automation",
    "Generative AI",
    "YouTube Growth",
    "Content SEO",
    "Marketing Automation",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "DaVinci Resolve",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Scholars Home, Sylhet"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sylhet",
    addressCountry: "Bangladesh"
  },
  email: "razinkhan3245@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased cursor-none">
        <CursorProvider />
        <Navbar />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
