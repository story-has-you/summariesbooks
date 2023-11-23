import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Brand from './components/Brand';
import Header from './components/Header';
import Footer from './components/Footer';
import Producthunt from './components/Producthunt';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Book Summary',
  description: 'Summary of works By AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`flex flex-col ${inter.className}`}>
        <Header />
        <Brand />
        <Producthunt />
        {children}
        <Footer />
      </body>
    </html>
  );
}
