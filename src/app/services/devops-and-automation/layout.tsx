import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "DevOps & Automation | Consulting & Insights | RTPL Digital",
  description: "Accelerate your software delivery with RTPL Digital's DevOps and automation solutions. From CI/CD pipeline implementation to infrastructure as code and automated testing, we help you achieve faster, more reliable deployments.",
  keywords: "DevOps automation, CI/CD pipelines, infrastructure as code, automated testing, continuous integration, continuous deployment, cloud automation, DevOps consulting, deployment automation, infrastructure automation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "DevOps & Automation | Consulting & Insights | RTPL Digital",
    description: "Accelerate your software delivery with RTPL Digital's DevOps and automation solutions. From CI/CD pipeline implementation to infrastructure as code and automated testing, we help you achieve faster, more reliable deployments.",
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
