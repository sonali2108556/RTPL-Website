import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Education | Industry Consulting & Insights",
  description: "Transform education with RTPL Digital's AI solutions. From personalized learning to automated assessment, we help educational institutions enhance student engagement and improve learning outcomes.",
  keywords: "education technology, AI learning, personalized education, learning analytics, educational automation, digital learning, smart education, edtech solutions",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Education | Industry Consulting & Insights",
    description: "Transform education with RTPL Digital's AI solutions. From personalized learning to automated assessment, we help educational institutions enhance student engagement and improve learning outcomes.",
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
