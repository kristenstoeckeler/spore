import SporeLogo from './ui/spore-logo';
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
      <body className={`${comfortaa.className} antialiased`}>
        <header className="App-header m-2 md:m-10">
          <SporeLogo/>
        </header>
        {children}
      </body>
    </html>
    
  );
}