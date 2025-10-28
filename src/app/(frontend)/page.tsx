import React from 'react'
import Hero from '@/components/homepage/Hero'
import OurServices from '@/components/homepage/OurServices'
import Albums from '@/components/homepage/Albums'
import About from '@/components/homepage/About'

export default function page() {
  return (
    <>
    <Hero/>
    <OurServices/>
    <Albums/>
    <About/>
    </>
  )
}
