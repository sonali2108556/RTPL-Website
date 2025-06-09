import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "IDEA Methodology | AI-Driven Development by RTPL Digital",
  description: "Discover RTPL Digital's IDEA Methodology - Innovation, Design, Engineering, and Artificial Intelligence approach to deliver exceptional technology solutions.",
  keywords: "IDEA methodology, innovation, design, engineering, artificial intelligence, digital transformation, technology solutions",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "IDEA Methodology | AI-Driven Development by RTPL Digital",
    description: "Discover RTPL Digital's IDEA Methodology - Innovation, Design, Engineering, and Artificial Intelligence approach to deliver exceptional technology solutions.",
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
