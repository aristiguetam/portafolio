import './globals.css'

import { Footer, Navbar, SideMenu } from '@/components'
import Providers from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Pedro Aristigueta - Home</title>
        <meta name="description" content="Portafolio de Pedro Aristigueta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconPedroAristigueta.png" />
      </head>
      <body className='bg-background-light dark:bg-background-dark' >
        <Providers>
          
          <SideMenu />

          <header>
            <Navbar />
          </header>

          <main>
            {children}
          </main>
          
          <footer >
            <Footer />
          </footer>
        
        </Providers>
      </body>
    </html>
  )
}
