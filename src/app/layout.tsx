import type { Metadata } from 'next';
import './globals.css';
import ClientBody from './ClientBody';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Highvale Events - Exceptional Event Planning & Management',
  description: 'Transform your vision into unforgettable experiences with Highvale Events. Premium event planning, corporate events, weddings, and special occasions.',
  keywords: 'event planning, corporate events, weddings, special occasions, luxury events, Highvale Events',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Netlify Identity Widget for CMS Authentication */}
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" strategy="afterInteractive" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
