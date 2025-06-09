import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ecommerce | Industry Consulting & Insights",
  description: "Boost your ecommerce business with RTPL Digital's AI solutions. From personalized shopping to inventory optimization, we help online retailers enhance customer experience and drive sales.",
  keywords: "ecommerce solutions, AI shopping, inventory optimization, personalized retail, online store automation, digital commerce, retail technology, ecommerce innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Ecommerce | Industry Consulting & Insights",
    description: "Boost your ecommerce business with RTPL Digital's AI solutions. From personalized shopping to inventory optimization, we help online retailers enhance customer experience and drive sales.",
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
