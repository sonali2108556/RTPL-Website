import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact Us | RTPL Digital - AI Solutions & Services",
  description: "Get in touch with RTPL Digital for AI-driven solutions, enterprise automation, and digital transformation services. Connect with our experts to start your AI journey.",
  keywords: "contact RTPL Digital, AI solutions contact, enterprise AI services, digital transformation contact, AI automation services, RTPL Digital contact information, AI consulting contact",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Contact Us | RTPL Digital - AI Solutions & Services",
    description: "Get in touch with RTPL Digital for AI-driven solutions, enterprise automation, and digital transformation services. Connect with our experts to start your AI journey.",
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
