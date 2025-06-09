import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Disamina AI | RTPL Digital - AI Success Stories & Transformations",
  description: "Discover how RTPL Digital developed Disamina AI, an intelligent system for automated analysis. Learn how we enhanced efficiency and accuracy through advanced AI technology.",
  keywords: "disamina AI, automated analysis, AI system, intelligent automation, data analysis, AI technology, process automation, AI innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Disamina AI | RTPL Digital - AI Success Stories & Transformations",
    description: "Discover how RTPL Digital developed Disamina AI, an intelligent system for automated analysis. Learn how we enhanced efficiency and accuracy through advanced AI technology.",
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
