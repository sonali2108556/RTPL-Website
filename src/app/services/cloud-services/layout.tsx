import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Cloud Services | Consulting & Insights | RTPL Digital",
  description: "Transform your business with RTPL Digital's comprehensive cloud solutions. From cloud migration and optimization to hybrid cloud management and cloud-native development, we help you leverage the full power of cloud computing.",
  keywords: "cloud migration, cloud optimization, hybrid cloud solutions, cloud-native development, AWS services, Azure cloud, Google Cloud Platform, cloud infrastructure, cloud consulting, enterprise cloud solutions",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Cloud Services | Consulting & Insights | RTPL Digital",
    description: "Transform your business with RTPL Digital's comprehensive cloud solutions. From cloud migration and optimization to hybrid cloud management and cloud-native development, we help you leverage the full power of cloud computing.",
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
