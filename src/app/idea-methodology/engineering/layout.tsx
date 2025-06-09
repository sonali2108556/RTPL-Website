import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Engineering | IDEA Methodology | AI-Driven Development by RTPL Digital",
  description: "Discover RTPL Digital's Engineering excellence in building robust, scalable systems using best-in-class practices and cutting-edge technologies.",
  keywords: "software engineering, full-stack development, cloud architecture, microservices, DevOps, performance optimization",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Engineering | IDEA Methodology | AI-Driven Development by RTPL Digital",
    description: "Discover RTPL Digital's Engineering excellence in building robust, scalable systems using best-in-class practices and cutting-edge technologies.",
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
