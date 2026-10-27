import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Background from './components/atoms/BackgroundGrid/Background';
import Cursor from './components/atoms/Cursor/Cursor';
import { CursorProvider } from './providers';
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'sonner';

const outfit = Outfit({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Marco Spallone | Software Engineer | Full Stack Developer',
  description:
    'Software Engineer & Full Stack Developer building scalable, high-quality web applications. Based in Italy.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <CursorProvider>
          <Background />

          {children}

          <Cursor />

          <Toaster position="top-right" richColors closeButton />

          <Analytics />
        </CursorProvider>
      </body>
    </html>
  );
}
