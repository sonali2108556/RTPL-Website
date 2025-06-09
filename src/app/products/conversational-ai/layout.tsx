import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Conversational AI | AI-Driven Development by RTPL Digital",
  description: "Advanced conversational AI agents with natural speech synthesis, multi-language support, and human-like interactions for customer service and business automation.",
  keywords: "Conversational AI, voice AI, chatbot, speech synthesis, NLP, virtual assistant, RTPL Digital" ,
  icons: {
    icon: "/rtpl_favicon-80x80.png",
  },
  openGraph: {
    title: "Conversational AI | AI-Driven Development by RTPL Digital",
    description: "Advanced conversational AI agents with natural speech synthesis, multi-language support, and human-like interactions for customer service and business automation.",
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
