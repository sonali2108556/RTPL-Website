import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Industries | Industry Consulting & Insights | RTPL Digital",
  description: "Discover how RTPL Digital's AI solutions transform businesses across healthcare, finance, manufacturing, retail, and more. Industry-specific AI implementations for maximum impact.",
  keywords: "AI industry solutions, healthcare AI, financial services AI, manufacturing automation, retail AI solutions, enterprise AI by industry, RTPL Digital industry expertise, sector-specific AI solutions",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Industries | Industry Consulting & Insights | RTPL Digital",
    description: "Discover how RTPL Digital's AI solutions transform businesses across healthcare, finance, manufacturing, retail, and more. Industry-specific AI implementations for maximum impact.",
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
