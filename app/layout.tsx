import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './aos.css';
import Preloader from './components/Preloader';
import AOSProvider from './aos-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LisaDesign',
  description: 'Профессиональный дизайн и разработка сайтов',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bodyClassName = geistSans.variable + ' ' + geistMono.variable + ' antialiased';

  return (
    <html lang='ru'>
      <body className={bodyClassName}>
        <Preloader>
          <AOSProvider>
            {children}
          </AOSProvider>
        </Preloader>
      </body>
    </html>
  );
}
