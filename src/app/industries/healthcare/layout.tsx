import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Healthcare | Industry Consulting & Insights",
  description: "Enhance healthcare delivery with RTPL Digital's AI solutions. From patient care optimization to medical data analytics, we help healthcare providers improve outcomes and streamline operations.",
  keywords: "healthcare technology, AI healthcare, medical analytics, patient care, health data, digital health, medical automation, healthcare innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Healthcare | Industry Consulting & Insights",
    description: "Enhance healthcare delivery with RTPL Digital's AI solutions. From patient care optimization to medical data analytics, we help healthcare providers improve outcomes and streamline operations.",
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
