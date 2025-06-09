import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Your Trusted Digital Transformation Partner',
  description: "Since our founding, we've been dedicated to helping businesses navigate the digital landscape with innovative solutions and unwavering commitment to excellence",
  keywords: "about us, digital transformation, technology partner, innovation, excellence",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: ' About Us | Your Trusted Digital Transformation Partner',
    description: "Since our founding, we've been dedicated to helping businesses navigate the digital landscape with innovative solutions and unwavering commitment to excellence",
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
