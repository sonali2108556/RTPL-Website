import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Empower Legacy Applications | Consulting & Insights | RTPL Digital",
  description: "Modernize your legacy systems with RTPL Digital's comprehensive application transformation services. From system modernization and cloud migration to API integration and microservices architecture, we help you breathe new life into your existing applications.",
  keywords: "legacy system modernization, application transformation, cloud migration, API integration, microservices architecture, legacy application upgrade, system modernization, application modernization, legacy software update, enterprise application transformation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Empower Legacy Applications | Consulting & Insights | RTPL Digital",
    description: "Modernize your legacy systems with RTPL Digital's comprehensive application transformation services. From system modernization and cloud migration to API integration and microservices architecture, we help you breathe new life into your existing applications.",
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
