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
    'MindUp Media | Digital Marketing & Social Media Agency based in Sri Lanka',
  description:
    "MindUp Media is a premier social media marketing agency based in Sri Lanka, dedicated to elevating your brand's online presence. We specialize in crafting compelling content, SEO optimization, and executing strategic campaigns that drive engagement and growth across all major platforms.",
  keywords: [
    'social media marketing agency in sri lanka',
    'content creation',
    'brand growth',
    'digital marketing sri lanka',
    'seo optimization sri lanka',
    'social media strategy',
    'MindUp Media',
  ],
  openGraph: {
    title:
      'MindUp Media | Digital Marketing & Social Media Agency based in Sri Lanka',
    description:
      "MindUp Media is a premier social media marketing agency based in Sri Lanka, dedicated to elevating your brand's online presence. We specialize in crafting compelling content, SEO optimization, and executing strategic campaigns that drive engagement and growth across all major platforms.",
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
