import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title:
    'MindUp Media | Premium Landing Pages & Social Media Marketing Sri Lanka',
  description:
    "MindUp Media is Sri Lanka's leading digital agency for high-converting landing pages, expert social media management, and content creation. Scale your brand with our premium digital products and data-driven marketing strategies.",
  keywords: [
    'social media marketing agency in sri lanka',
    'social media marketing agency in colombo',
    'best landing page developers sri lanka',
    'best Marketing page developers sri lanka',
    'best marketing agency in sri lanka',
    'best fullstack developers sri lanka',
    'best web developers sri lanka',
    'e-commerce website development sri lanka',
    'content creation agency',
    'social media handling services',
    'digital marketing sri lanka',
    'seo optimization sri lanka',
    'high-converting landing pages',
    'MindUp Media',
    'web development sri lanka',
  ],
  openGraph: {
    title:
      'MindUp Media | Premium Landing Pages & Social Media Marketing Sri Lanka',
    description:
      'Scale your brand with MindUp Media. Expert landing pages, social media management, and content creation that drives real business growth.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
