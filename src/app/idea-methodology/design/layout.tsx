import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Design | IDEA Methodology | AI-Driven Development by RTPL Digital",
  description: "Explore RTPL Digital's Design approach that creates intuitive, user-centric solutions through comprehensive UX/UI design and design thinking methodologies.",
  keywords: "UX design, UI design, user experience, design thinking, visual design, prototyping, design systems",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Design | IDEA Methodology | AI-Driven Development by RTPL Digital",
    description: "Explore RTPL Digital's Design approach that creates intuitive, user-centric solutions through comprehensive UX/UI design and design thinking methodologies.",
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
