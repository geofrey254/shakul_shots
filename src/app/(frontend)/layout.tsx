import React from 'react'
import './styles.css'
import Navbar from '@/components/navigation/Navbar'
import { Sora } from 'next/font/google'
import Footer from '@/components/navigation/Footer'


export const metadata = {
  title: 'Shakul Shots | Photography & Cinematography',
  description:
    'Shakul Shots — professional photography and cinematography capturing timeless moments through creative visuals, storytelling, and cinematic artistry.',
}


const sora = Sora({
  weight: ['200','300', '400', '500', '600', '700'],
  subsets: ['latin'],
})

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={sora.className}>
      <body>
        <main>
          <Navbar/>
          {children}
          <Footer/>
          </main>
      </body>
    </html>
  )
}
