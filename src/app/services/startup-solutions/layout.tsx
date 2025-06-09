import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Startup Solutions | Consulting & Insights | RTPL Digital",
  description: "Build and scale your startup with RTPL Digital's tech solutions. From MVP development to AI integration, we help startups innovate and grow efficiently.",
  keywords: "startup solutions, MVP development, AI integration, cloud infrastructure, startup scaling, tech innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Startup Solutions | Consulting & Insights | RTPL Digital",
    description: "Build and scale your startup with RTPL Digital's tech solutions. From MVP development to AI integration, we help startups innovate and grow efficiently.",
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
