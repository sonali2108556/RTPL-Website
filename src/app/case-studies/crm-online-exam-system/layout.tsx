import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "CRM Online Exam System | RTPL Digital - AI Success Stories & Transformations",
  description: "Explore how RTPL Digital built an AI-powered CRM system for online exams. See how we streamlined exam management and enhanced student assessment with innovative technology.",
  keywords: "online exam system, CRM education, exam automation, student assessment, education technology, exam management, digital assessment, education innovation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "CRM Online Exam System | RTPL Digital - AI Success Stories & Transformations",
    description: "Explore how RTPL Digital built an AI-powered CRM system for online exams. See how we streamlined exam management and enhanced student assessment with innovative technology.",
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
