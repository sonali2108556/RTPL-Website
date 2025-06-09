import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Artificial Intelligence | IDEA Methodology | AI-Driven Development by RTPL Digital',
  description: "Explore RTPL Digital's Artificial Intelligence expertise in machine learning, NLP, computer vision, and AI automation for intelligent business transformation.",
  keywords: "artificial intelligence, machine learning, AI automation, NLP, computer vision, predictive analytics, deep learning",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: ' Artificial Intelligence | IDEA Methodology | AI-Driven Development by RTPL Digital',
    description: "Explore RTPL Digital's Artificial Intelligence expertise in machine learning, NLP, computer vision, and AI automation for intelligent business transformation.",
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
