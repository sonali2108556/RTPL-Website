import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Manufacturing ERP | AI-Driven Development by RTPL Digital",
  description: "Advanced ERP solution for manufacturing industry with AI-powered production management, inventory control, and supply chain optimization." ,
  keywords: "Manufacturing ERP, production management, inventory control, supply chain, AI ERP, RTPL Digital" ,
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Manufacturing ERP | AI-Driven Development by RTPL Digital",
    description: "Advanced ERP solution for manufacturing industry with AI-powered production management, inventory control, and supply chain optimization." ,
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
