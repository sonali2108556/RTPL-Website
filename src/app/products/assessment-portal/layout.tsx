import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Assessment Portal | AI-Driven Development by RTPL Digital",
  description: "AI-powered online assessment portal with multi-language support. Advanced proctoring, real-time analytics, and intelligent question generation for modern assessment needs.",
  keywords: "AI assessment, online testing, proctoring, multi-language assessment, Arabic assessment, English assessment, RTPL Digital",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Assessment Portal | AI-Driven Development by RTPL Digital",
    description: "AI-powered online assessment portal with multi-language support. Advanced proctoring, real-time analytics, and intelligent question generation for modern assessment needs.",
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
