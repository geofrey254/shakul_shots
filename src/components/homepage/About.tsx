import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GrLinkNext } from "react-icons/gr";

export default function About() {
  return (
    <section className="bg-black px-6 md:px-12 lg:px-8 py-12 md:py-20">
      <div
        className="flex items-center gap-1 mb-6 text-sm tracking-wider text-gray-400"
        style={{ animation: 'slideIn 0.5s ease-out' }}
      >
        <span>01</span>
        <span className="text-zinc-600">//</span>
        <span className="font-medium">SERVICES</span>
      </div>

      {/* Title and Description Grid */}
      <div className="grid grid-cols-12 gap-8 mb-16 items-center">
        <div className="col-span-12 md:col-span-6">
          <h2
            className="text-4xl md:text-5xl lg:text-5xl text-white font-semibold tracking-tighter"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
          >
            Shakul captures All of Your beautiful memories
          </h2>
        </div>

        <div className="col-span-12 md:col-span-6 flex md:justify-end">
          <Link href="#" className="bg-white text-black px-6 py-4">
            Book Us Now
          </Link>
        </div>
      </div>

      {/* image and text */}
      <div className="relative grid md:grid-cols-12 justify-center items-center space-y-12 md:space-y-0">
        <div className="relative md:col-span-6 flex justify-center items-center">
          <div className="relative w-full max-w-[500px]">
            <Image
              src="/images/bg1.jpg"
              width={500}
              height={500}
              alt="about image"
              className="relative z-20 rounded-2xl w-full h-auto"
            />

            {/* Background boxes (responsive) */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-2 bg-white/20 rounded-2xl z-10"></div>
            <div className="absolute inset-0 translate-x-4 translate-y-4 md:translate-x-7 md:translate-y-6 bg-white/10 rounded-2xl z-0"></div>

            {/* Explore button */}
            <div className="absolute -right-4 md:-right-8 -bottom-8 z-30">
              <Link
                href="#"
                className="inline-flex items-center text-sm justify-center px-6 py-4 gap-2 rounded-full bg-white text-gray-900 font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Explore Us
                <GrLinkNext className='-rotate-50'/>
              </Link>

            </div>
          </div>
        </div>

        <div className="right-side text-white md:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl md:text-4xl">ABOUT SHAKUL SHOTS</h3>{' '}
            <div className="bg-white/60 w-[60px] md:w-[100px] h-px"></div>
          </div>
          <p className="tagline text-2xl font-extralight">
            Shakul Shots runs wide and deep. Across many markets, geographies & typologies, our team
            members
          </p>
          <p className="about-content font-extralight">
            The talent at kimono runs wide range of services. Across many markets, geographies &
            typologies, our team members are some of the finest people of photographers in the
            industry wide and deep. From Across many markets, geographies & boundaries. Hire Kimono
            in your event.
          </p>
        </div>
      </div>
    </section>
  )
}
