import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Agents & Copilots | Consulting & Insights | RTPL Digital",
  description: "Transform your business operations with RTPL Digital's intelligent AI agents and copilots. Automate tasks, enhance productivity, and enable smarter decision-making with our advanced AI solutions.",
  keywords: "AI agents, AI copilots, intelligent automation, business process automation, AI assistants, digital workforce, AI task automation, smart business solutions, AI productivity tools, enterprise AI automation",
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "AI Agents & Copilots | Consulting & Insights | RTPL Digital",
    description: "Transform your business operations with RTPL Digital's intelligent AI agents and copilots. Automate tasks, enhance productivity, and enable smarter decision-making with our advanced AI solutions.",
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
