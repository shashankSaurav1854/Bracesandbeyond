import React from 'react';
import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Braces and Beyond | Gurugram',
  description:
    'Experience exceptional dental care with Dr. Puja Priya. Comprehensive dental services including cleanings, cosmetic dentistry, and oral surgery in a comfortable, modern environment.',
  keywords:
    'dentist, dental care, cosmetic dentistry, teeth cleaning, oral surgery, dental implants, braces, orthodontics, Gurugram',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
