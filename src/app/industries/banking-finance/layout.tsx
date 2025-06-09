import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Banking & Finance | Industry Consulting & Insights",
  description: "Transform banking operations with RTPL Digital's AI solutions. From fraud detection to automated compliance, we help financial institutions innovate and enhance customer experience.",
  keywords: "banking solutions, fintech innovation, AI banking, fraud detection, compliance automation, financial technology, digital banking, banking automation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Banking & Finance | Industry Consulting & Insights",
    description: "Transform banking operations with RTPL Digital's AI solutions. From fraud detection to automated compliance, we help financial institutions innovate and enhance customer experience.",
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
