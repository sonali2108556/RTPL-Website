import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Innovation | IDEA Methodology | AI-Driven Development by RTPL Digital",
  description: "Discover how RTPL Digital's Innovation approach drives breakthrough solutions and strategic technology advancement for your business transformation.",
  keywords: "innovation consulting, technology roadmap, emerging technologies, digital innovation, strategic innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Innovation | IDEA Methodology | AI-Driven Development by RTPL Digital",
    description: "Discover how RTPL Digital's Innovation approach drives breakthrough solutions and strategic technology advancement for your business transformation.",
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
