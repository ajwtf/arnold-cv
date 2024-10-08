import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
      <GoogleTagManager gtmId='GTM-P97JQ7TB' />
    </html>
  );
}
