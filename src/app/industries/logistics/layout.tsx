import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Logistics | Industry Consulting & Insights",
  description: "Optimize logistics operations with RTPL Digital's AI solutions. From route optimization to supply chain automation, we help logistics companies enhance efficiency and reduce operational costs.",
  keywords: "logistics technology, AI logistics, supply chain automation, route optimization, fleet management, logistics software, transportation tech, logistics innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Logistics | Industry Consulting & Insights",
    description: "Optimize logistics operations with RTPL Digital's AI solutions. From route optimization to supply chain automation, we help logistics companies enhance efficiency and reduce operational costs.",
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
