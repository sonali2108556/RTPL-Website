import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Medina | RTPL Digital - AI Success Stories & Transformations",
  description: "Discover how RTPL Digital transformed Medina with AI technology. Learn how we enhanced business operations and improved customer experience through innovative digital solutions.",
  keywords: "medina project, business transformation, AI solutions, digital innovation, customer experience, business automation, digital solutions, business technology",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Medina | RTPL Digital - AI Success Stories & Transformations",
    description: "Discover how RTPL Digital transformed Medina with AI technology. Learn how we enhanced business operations and improved customer experience through innovative digital solutions.",
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
