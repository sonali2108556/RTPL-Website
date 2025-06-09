import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Driven Development | Consulting & Insights | RTPL Digital",
  description: "Accelerate your software development with RTPL Digital's AI-driven development solutions. Leverage machine learning, automated testing, and intelligent code generation for faster, more efficient development cycles.",
  keywords: "AI-driven development, machine learning in development, automated testing, intelligent code generation, AI software development, development automation, AI coding tools, smart development solutions, AI programming assistance, enterprise development automation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "AI Driven Development | Consulting & Insights | RTPL Digital",
    description: "Accelerate your software development with RTPL Digital's AI-driven development solutions. Leverage machine learning, automated testing, and intelligent code generation for faster, more efficient development cycles.",
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
