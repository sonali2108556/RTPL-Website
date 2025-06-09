import "@/styles/global.scss"
import { Metadata } from "next"
import Script from "next/script";

export const metadata: Metadata = {
  title: 'RTPL Digital',
  description: 'RTPL Digital - Your Digital Transformation Partner',
  icons: {
    icon: '/rtpl_favicon-80x80.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body>
      <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
