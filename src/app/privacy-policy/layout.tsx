import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy | RTPL Digital ",
  description: "Privacy Policy - RTPL Digital"  ,
  keywords: "AI development, cloud services, digital transformation, custom software, DevOps, automation, RTPL Digital" ,
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Privacy Policy | RTPL Digital ",
    description: "Privacy Policy - RTPL Digital"  ,
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
