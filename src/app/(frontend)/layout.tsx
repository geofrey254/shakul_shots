import React from 'react'
import './styles.css'
import Navbar from '@/components/navigation/Navbar'
import { Montserrat } from 'next/font/google'


export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

const montserrat = Montserrat({
  weight: ['200','300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <main>
          <Navbar/>
          {children}</main>
      </body>
    </html>
  )
}
