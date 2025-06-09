import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Data & AI Services | Consulting & Insights | RTPL Digital",
  description: "Unlock the power of your data with RTPL Digital's comprehensive Data & AI services. From advanced analytics and machine learning to predictive modeling and AI-driven insights, we transform raw data into actionable business intelligence.",
  keywords: "data analytics, machine learning services, predictive modeling, AI insights, business intelligence, data science consulting, big data solutions, AI implementation, data transformation, enterprise AI solutions",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Data & AI Services | Consulting & Insights | RTPL Digital",
    description: "Unlock the power of your data with RTPL Digital's comprehensive Data & AI services. From advanced analytics and machine learning to predictive modeling and AI-driven insights, we transform raw data into actionable business intelligence.",
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
