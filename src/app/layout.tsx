import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import CardProvider from '@/components/Provider'
import ShoppingCartModal from '@/components/ShoppingCartModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swift Deal',
  description: 'e-commerce',
  icons:["log-s-d.png"]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CardProvider>
          <ShoppingCartModal/>
          <NavBar />
          {children}
        </CardProvider>
      </body>
    </html>
  )
}
