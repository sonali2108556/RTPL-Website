import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Products | AI-Driven Development by RTPL Digital",
  description: "Pre-built AI-powered products including Assessment Portal, Manufacturing ERP, Inventory Management, and Conversational AI solutions for accelerated implementation.",
  keywords: "AI products, assessment portal, ERP software, inventory management, conversational AI, RTPL Digital",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Products | AI-Driven Development by RTPL Digital",
    description: "Pre-built AI-powered products including Assessment Portal, Manufacturing ERP, Inventory Management, and Conversational AI solutions for accelerated implementation.",
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
