import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Digital Transformation | Consulting & Insights | RTPL Digital",
  description: "Transform your business for the digital age with RTPL Digital's comprehensive digital transformation services. From process automation and digital strategy to technology modernization and AI integration, we help you stay ahead in the digital landscape.",
  keywords: "digital transformation, business process automation, digital strategy, technology modernization, AI integration, digital innovation, business transformation, digital solutions, enterprise digitalization, digital business models",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Digital Transformation | Consulting & Insights | RTPL Digital",
    description: "Transform your business for the digital age with RTPL Digital's comprehensive digital transformation services. From process automation and digital strategy to technology modernization and AI integration, we help you stay ahead in the digital landscape.",
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
