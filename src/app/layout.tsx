import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Tutuianu WebDev',
    default: 'Tutuianu WebDev - 16-Year-Old Web Developer Prodigy',
  },

  description: 'I’m a 16-year-old web developer creating fast, modern, and custom websites. I turn your ideas into sleek, high-performance sites with clean design and professional quality—all done online with passion.',

  metadataBase: new URL('https://tutuianu.app.vercel'),

  icons: {
    icon: ['/Logo.ico'],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@tutuianuwebdev',
    creator: '@tutuianuwebdev',
    title: '16-year-old developer crafting fast, beautiful websites',
    description: 'Tutuianu WebDev: modern, efficient websites built by a passionate teen.',
    images: ['/OG.png'],
  },

  openGraph: {
    title: 'Tutuianu WebDev - Crafting Beautiful Websites at 16',
    description: 'Turn your ideas into sleek, high-performance websites built by a talented young developer.',
    images: ['/OG.png'],
    url: 'https://tutuianu.app.vercel',
    siteName: 'Tutuianu WebDev',
    locale: 'en_US',
    type: 'website',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
