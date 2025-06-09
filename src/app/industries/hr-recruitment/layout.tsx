import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "HR & Recruitment | Industry Consulting & Insights",
  description: "Streamline HR processes with RTPL Digital's AI solutions. From talent acquisition to employee engagement, we help organizations optimize recruitment and enhance workforce management.",
  keywords: "HR technology, AI recruitment, talent acquisition, employee engagement, HR automation, workforce management, recruitment software, HR innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "HR & Recruitment | Industry Consulting & Insights",
    description: "Streamline HR processes with RTPL Digital's AI solutions. From talent acquisition to employee engagement, we help organizations optimize recruitment and enhance workforce management.",
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
