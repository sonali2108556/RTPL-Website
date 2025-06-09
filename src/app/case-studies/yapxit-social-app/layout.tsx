import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Yapxit Social App | RTPL Digital - AI Success Stories & Transformations",
  description: "Explore how RTPL Digital developed Yapxit, an innovative social networking platform. Learn how we created an engaging user experience with AI-powered features and modern technology.",
  keywords: "yapxit app, social networking, AI social platform, mobile app, social media, user engagement, app development, social innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Yapxit Social App | RTPL Digital - AI Success Stories & Transformations",
    description: "Explore how RTPL Digital developed Yapxit, an innovative social networking platform. Learn how we created an engaging user experience with AI-powered features and modern technology.",
    images: [
      {
        url: "/rtpl_favicon-80x80.png",
      },
    ],
    type: "website",
  }
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    children
  );
} 
