import React from 'react'
import Hero from '@/components/homepage/Hero'
import OurServices from '@/components/homepage/OurServices'
import Albums from '@/components/homepage/Albums'
import About from '@/components/homepage/About'
import Team from '@/components/homepage/Team'
import Portfolio from '@/components/homepage/Portfolio'

export default function page() {
  return (
    <>
    <Hero/>
    <OurServices/>
    <Albums/>
    <About/>
    <Team/>
    <Portfolio/>
    </>
  )
}
