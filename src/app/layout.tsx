import Navbar from '@/components/navbar/Navbar'
import './globals.css'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Pedro Aristigueta - Home</title>
        <meta name="description" content="Portafolio de Pedro Aristigueta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
