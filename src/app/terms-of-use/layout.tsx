import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms of Use | RTPL Digital",
  description: "Terms of Use - RTPL Digital",
  keywords: "AI development, cloud services, digital transformation, custom software, DevOps, automation, RTPL Digital",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Terms of Use | RTPL Digital",
    description: "Terms of Use - RTPL Digital",
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
