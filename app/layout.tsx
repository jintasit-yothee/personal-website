import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = 'width=device-width, initial-scale=1';

export const metadata: Metadata = {
  title: "Jintasit Yothee - Full Stack Software Engineer",
  description: "Full stack software engineer with 12+ years of experience building impactful solutions",
  metadataBase: new URL('https://www.jintasit.com'),
  icons: {
    icon: "/images/profile.jpg",
  },
  openGraph: {
    title: "Jintasit Yothee - Full Stack Software Engineer",
    description: "Full stack software engineer with 12+ years of experience building impactful solutions",
    url: 'https://www.jintasit.com',
    siteName: 'Jintasit Yothee',
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Jintasit Yothee - Full Stack Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jintasit Yothee - Full Stack Software Engineer",
    description: "Full stack software engineer with 12+ years of experience building impactful solutions",
    images: ['/images/profile.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
