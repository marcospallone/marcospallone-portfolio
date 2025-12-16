import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/molecules/Header/Header';
import Background from './components/atoms/BackgroundGrid/Background';
import Cursor from './components/atoms/Cursor/Cursor';
import { CursorProvider } from './providers';
import Scrollbar from './components/atoms/Scrollbar/Scrollbar';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Marco',
  description: 'Marco Spallone Portfolio',
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <CursorProvider>
          <Scrollbar />

          <Background />

          <header className="fixed z-20 w-full">
            <Header />
          </header>

          {children}

          <Cursor />
        </CursorProvider>
      </body>
    </html>
  );
}
