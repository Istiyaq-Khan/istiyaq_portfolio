import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
    default: "Istiyaq | Video Editor & Automation Engineer",
    template: "%s | Istiyaq Khan",
  },
  description:
    "Portfolio of Istiyaq Khan Razin - Video Editing, Motion Graphics, and Automation Systems.",
  applicationName: "Istiyaq Khan Portfolio",
  authors: [{ name: "Istiyaq Khan", url: "https://istiyaq.vercel.app" }],
  generator: "Next.js",
  keywords: [
    "Istiyaq Khan",
    "Video Editor",
    "Automation Engineer",
    "Motion Graphics",
    "Portfolio",
    "Next.js",
    "React",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Istiyaq Khan",
  publisher: "Istiyaq Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Istiyaq | Video Editor & Automation Engineer",
    description:
      "Portfolio of Istiyaq Khan Razin - Video Editing, Motion Graphics, and Automation Systems.",
    url: "https://istiyaq.vercel.app",
    siteName: "Istiyaq Khan", // Crucial for Google to display the correct name
    images: [
      {
        url: "/Istiyaq-Khan-Razin.png", // Ensure you have this image in public folder or update path
        width: 1200,
        height: 630,
        alt: "Istiyaq Khan Razin - AI Workflow Engineer & Creator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Istiyaq | Video Editor & Automation Engineer",
    description:
      "Portfolio of Istiyaq Khan Razin - Video Editing, Motion Graphics, and Automation Systems.",
    creator: "@istiyaq", // Update with actual handle if available
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
  "@type": "WebSite",
  name: "Istiyaq Khan",
  alternateName: ["Istiyaq Portfolio", "Istiyaq Khan Razin"],
  url: "https://istiyaq.vercel.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
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
