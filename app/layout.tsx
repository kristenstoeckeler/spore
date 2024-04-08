import '../app/ui/global.css';
import type { Metadata } from 'next'
import { comfortaa } from '../app/ui/font';

export const metadata: Metadata = {
  title: 'Spore',
  description: `A new project I'm working on`,
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} antialiased`}>{children}</body>
    </html>
  );
}