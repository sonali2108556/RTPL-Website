import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Event Club Booking Platform | RTPL Digital - AI Success Stories & Transformations",
  description: "Explore how RTPL Digital created an AI-powered event booking platform. See how we revolutionized venue management and streamlined the booking process for clubs and events.",
  keywords: "event booking platform, club management, venue booking, event technology, booking automation, event management, digital booking, event innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Event Club Booking Platform | RTPL Digital - AI Success Stories & Transformations",
    description: "Explore how RTPL Digital created an AI-powered event booking platform. See how we revolutionized venue management and streamlined the booking process for clubs and events.",
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
