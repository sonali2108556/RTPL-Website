import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Technology | Industry Consulting & Insights",
  description: "Accelerate tech innovation with RTPL Digital's AI solutions. From software development to cloud infrastructure, we help technology companies build scalable and cutting-edge solutions.",
  keywords: "tech innovation, AI development, cloud solutions, software engineering, tech automation, digital transformation, enterprise tech, technology consulting",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Technology | Industry Consulting & Insights",
    description: "Accelerate tech innovation with RTPL Digital's AI solutions. From software development to cloud infrastructure, we help technology companies build scalable and cutting-edge solutions.",
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
