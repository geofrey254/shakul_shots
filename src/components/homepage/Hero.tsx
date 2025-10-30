'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'
import { HiOutlineArrowRight } from 'react-icons/hi'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface HeroProps {
  block: {
    slides: Array<{
      image: {
        url: string
        alt: string
        category: string
      }
      title: string
      subtitle: string
      description: string
    }>
  }
}

export default function Hero({ block }: HeroProps) {
  const slider = block?.slides?.filter((s) => s && s.image?.url) ?? []

  if (slider.length === 0) {
    return null
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <Carousel
        className="w-full h-full"
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        {' '}
        <CarouselContent className="h-full">
          {slider.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen w-full">
              <Image
                src={slide.image.url}
                alt={slide.title}
                fill
                quality={100}
                className="object-cover object-top"
                priority={index === 0}
              />
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/30"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/50"></div>
              <div className="absolute inset-0 bg-linear-to-br from-[#990000]/20 via-transparent to-transparent mix-blend-multiply"></div>

              {/* Text Content */}
              <div className="relative z-20 flex md:items-center items-end h-full">
                <div className="container mx-auto px-8 lg:px-16 pb-16 md:pb-0 pt-0 md:pt-16 max-w-7xl">
                  <div className="max-w-xl space-y-6">
                    <span className="inline-flex items-center gap-2 text-[#feeede] text-xs font-light tracking-[0.2em] uppercase">
                      <span className="w-8 h-px bg-[#feeede]/50"></span>
                      {slide.image.category}
                    </span>

                    <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="text-[#feeede] text-sm font-light tracking-wide">
                      {slide.subtitle}
                    </p>

                    <div className="w-16 h-0.5 bg-[#990000]"></div>

                    <p className="text-white/80 text-base leading-relaxed max-w-md">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <Link
                        href="#contact"
                        className="group bg-white px-6 py-3 text-black text-sm font-medium tracking-wide hover:bg-[#feeede] transition-all duration-300 flex items-center gap-2"
                      >
                        Book a Session
                        <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="#portfolio"
                        className="group relative px-6 py-3 text-white text-sm font-medium tracking-wide overflow-hidden"
                      >
                        <span className="absolute inset-0 border border-white/30 group-hover:border-white/50 transition-colors"></span>
                        <span className="relative flex items-center gap-2">
                          View Work
                          <FaPlay size={10} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Navigation Buttons */}
        <div className="absolute right-8 bottom-[39vh] md:top-1/2 -translate-y-1/2 z-30 flex md:flex-col gap-8 items-center">
          <CarouselPrevious className="static! translate-x-0! bg-transparent hover:bg-transparent text-white/50 hover:text-white transition-colors">
            <FaChevronLeft />
          </CarouselPrevious>
          <CarouselNext className="static! translate-x-0! bg-transparent hover:bg-transparent text-white/50 hover:text-white transition-colors">
            <FaChevronRight />
          </CarouselNext>
        </div>
      </Carousel>

      {/* Ambient Lights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#feeede]/5 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#990000]/10 rounded-full blur-[120px] animate-pulse pointer-events-none"
        style={{ animationDelay: '1000ms' }}
      ></div>
    </section>
  )
}
