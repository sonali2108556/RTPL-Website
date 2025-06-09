import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Careers | AI-Driven Development by RTPL Digital",
  description: "Join our team of innovative professionals working on cutting-edge AI and digital transformation projects. Explore career opportunities at RTPL Digital.",
  keywords: "careers, jobs, AI engineer, software developer, tech careers, remote work, RTPL Digital",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Careers | AI-Driven Development by RTPL Digital",
    description: "Join our team of innovative professionals working on cutting-edge AI and digital transformation projects. Explore career opportunities at RTPL Digital.",
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
