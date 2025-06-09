import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Autoguidance Web App | RTPL Digital - AI Success Stories & Transformations",
  description: "Discover how RTPL Digital developed an AI-powered autoguidance web application that revolutionized precision farming. Learn about the technology stack, challenges overcome, and measurable results achieved.",
  keywords: "autoguidance app, precision farming, AI agriculture, web application, farming technology, agricultural automation, smart farming, farming innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Autoguidance Web App | RTPL Digital - AI Success Stories & Transformations",
    description: "Discover how RTPL Digital developed an AI-powered autoguidance web application that revolutionized precision farming. Learn about the technology stack, challenges overcome, and measurable results achieved.",
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
