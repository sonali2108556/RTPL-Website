import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Inventory Management Portal | AI-Driven Development by RTPL Digital",
  description: "AI-powered inventory management system with predictive analytics, real-time tracking, and automated optimization for efficient warehouse operations."  ,
  keywords: "Inventory management, warehouse management, AI inventory, stock tracking, RFID, barcode scanning, RTPL Digital" ,
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Inventory Management Portal | AI-Driven Development by RTPL Digital",
    description: "AI-powered inventory management system with predictive analytics, real-time tracking, and automated optimization for efficient warehouse operations."  ,
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
