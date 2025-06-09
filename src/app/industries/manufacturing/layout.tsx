import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Manufacturing | Industry Consulting & Insights",
  description: "Transform manufacturing with RTPL Digital's AI solutions. From predictive maintenance to quality control automation, we help manufacturers optimize production and reduce operational costs.",
  keywords: "manufacturing technology, AI manufacturing, predictive maintenance, quality control, production automation, smart factory, industrial IoT, manufacturing innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Manufacturing | Industry Consulting & Insights",
    description: "Transform manufacturing with RTPL Digital's AI solutions. From predictive maintenance to quality control automation, we help manufacturers optimize production and reduce operational costs.",
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
