import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Custom Platform Development | Consulting & Insights | RTPL Digital",
  description: "Build scalable, enterprise-grade platforms with RTPL Digital's custom development expertise. From microservices architecture to API-first design and real-time processing, we create robust platforms that drive business growth.",
  keywords: "custom platform development, enterprise platform solutions, microservices architecture, API-first design, scalable platforms, real-time processing systems, platform modernization, custom software platforms, enterprise-grade development, platform integration services",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Custom Platform Development | Consulting & Insights | RTPL Digital",
    description: "Build scalable, enterprise-grade platforms with RTPL Digital's custom development expertise. From microservices architecture to API-first design and real-time processing, we create robust platforms that drive business growth.",
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
