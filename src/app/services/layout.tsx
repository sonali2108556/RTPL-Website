import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Services | Consulting & Insights | RTPL Digital ",
  description: "Comprehensive technology services including AI-driven development, cloud solutions, digital transformation, and custom platform development."  ,
  keywords: "AI development, cloud services, digital transformation, custom software, DevOps, automation, RTPL Digital" ,
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Services | Consulting & Insights | RTPL Digital ",
    description: "Comprehensive technology services including AI-driven development, cloud solutions, digital transformation, and custom platform development."  ,
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
