import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next";
import './globals.css'

export const metadata: Metadata = {
  title: 'Gennit.dev',
  description: 'Gennit Waitlist',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
