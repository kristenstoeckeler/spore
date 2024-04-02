import type { Metadata } from 'next'
import '../index.css'

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
        <body>
            <div id="root">{children}</div>
        </body>
    </html>
  );
}