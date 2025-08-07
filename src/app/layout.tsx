import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Jaybash Customs | Car Wraps & Performance Mods in Abuja',
    template: '%s | Jaybash Customs',
  },
  description: 'Transform your ride with premium car wraps, performance modifications, and drifting classes at Jaybash Customs, Abuja, Nigeria.',
  openGraph: {
    title: 'Jaybash Customs',
    description: 'Premium car wraps, performance mods, and drifting classes in Abuja, Nigeria.',
    url: 'https://jaybashcustoms.com',
    siteName: 'Jaybash Customs',
    images: [
      {
        url: '/images/hero/hero-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom wrapped car by Jaybash Customs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://jaybashcustoms.com',
    types: {
      'application/rss+xml': 'https://jaybashcustoms.com/feed.xml',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}