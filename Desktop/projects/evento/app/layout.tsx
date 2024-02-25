import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evento -- Trace Global Events',
  description: 'Trace ober 10,000 events around you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`S{inter.className} bg-gray-900 text-white`}>
       <Container>
          <Header/>
            {children}
          <Footer/>
        </Container>
        </body>
    </html>
  )
}