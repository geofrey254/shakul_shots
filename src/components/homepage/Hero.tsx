'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { MdRestaurantMenu } from 'react-icons/md'
import { FaClock, FaMapMarkerAlt, FaPlay } from 'react-icons/fa'
import { IoSparkles } from 'react-icons/io5'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg1.jpg"
          alt="Delicious restaurant cuisine"
          fill
          className="object-cover"
          priority
        />
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30"></div>

        {/* Animated accent gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-[#990000]/40 via-transparent to-transparent mix-blend-multiply"></div>
      </div>

      <div className="absolute z-30 mx-auto px-8 left-0 bottom-1/6 text-left text-white w-1/2 flex flex-col gap-4">
        <span>Your Guys For The Job</span>
        <h2 className="text-white text-7xl font-extrabold">Shakul Shots</h2>
        <p>Lorem ipsum dolo sit amet consectetur adipisicing elit. Officiis sequi deleniti aperiam quidem in aut voluptas. Animi veritatis tempore ea?</p>

{/* CTA BUTTONS */}
        <div className='flex gap-4 mt-8'>
<Link href="#" className='bg-white px-6 py-2 text-black'>
Book Shakul</Link>

<Link href="#" className='bg-white/20 px-6 py-2 text-white border-'
>
    Explore Now
</Link>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[#feeede]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-[#990000]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  )
}