import "@/styles/global.css"
import { Metadata } from "next"

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
      <body>
        {children}
      </body>
    </html>
  );
}
