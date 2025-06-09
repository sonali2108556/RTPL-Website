import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Case Studies | RTPL Digital - AI Success Stories & Transformations",
  description: "Explore RTPL Digital's success stories and case studies showcasing our AI-driven solutions, digital transformations, and enterprise automation projects across various industries.",
  keywords: "RTPL Digital case studies, AI success stories, digital transformation examples, enterprise automation case studies, AI implementation examples, industry solutions case studies, RTPL Digital projects",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Case Studies | RTPL Digital - AI Success Stories & Transformations",
    description: "Explore RTPL Digital's success stories and case studies showcasing our AI-driven solutions, digital transformations, and enterprise automation projects across various industries.",
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
