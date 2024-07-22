import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import './globals.css';

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blue House Technical Assesment',
  description: 'Created by Apoh Eldrige',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
