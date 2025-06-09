import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Journey | RTPL Digital - Pioneering AI Innovation",
  description: "Explore RTPL Digital's evolution from startup to AI industry leader. Discover our milestones, innovations, and commitment to transforming businesses through artificial intelligence.",
  keywords: "RTPL Digital journey, AI company history, technology innovation timeline, digital transformation milestones, AI development history, RTPL Digital evolution, tech company growth story",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Our Journey | RTPL Digital - Pioneering AI Innovation",
    description: "Explore RTPL Digital's evolution from startup to AI industry leader. Discover our milestones, innovations, and commitment to transforming businesses through artificial intelligence.",
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
