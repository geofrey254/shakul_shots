/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import { Camera } from 'lucide-react'

interface PortfolioProps {
  block: {
    sectionTitle: string
    sectionParagraph: string
    projects: Array<{
      id: number
        image: {
          url: string
          alt: string
        }
        category: string
        title: string
      
    }>
  }
}

export default function Portfolio({ block }: PortfolioProps) {
  const filteredProjects = block.projects

  const breakpointColumnsObj = {
    default: 2,
    1100: 3,
    768: 2,
    500: 2,
  }
  return (
    <section className="bg-black px-6 md:px-12 lg:px-8 2xl:px-16 py-20 text-white border-t border-zinc-800" id='porfolio'>
      <div className="max-w-7xl 2xl:max-w-full mx-auto">
        {/* Header */}
        <div
          className="flex md:justify-center items-center gap-1 mb-6 text-sm tracking-wider text-gray-400"
          style={{ animation: 'slideIn 0.5s ease-out' }}
        >
          <span>05</span>
          <span className="text-zinc-600">{'//'}</span>
          <span className="font-medium">PORTFOLIO</span>
        </div>

        {/* Title */}
        <div className="mb-12 flex flex-col justify-center items-center">
          <h2 className="text-5xl font-semibold tracking-tight leading-tight mb-4">
            Our Creative Portfolio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore our diverse collection of captivating moments and artistic visions
          </p>
        </div>

        {/* Masonry Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="masonry-column space-y-6"
        >
          {filteredProjects.map((project: any, index) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
              }}
            >
              <Image
                src={project.image.url}
                alt={project.image.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-zinc-700/50 rounded-full text-xs font-medium text-white flex items-center gap-2">
                <Camera className="w-3 h-3" />
                {project.category}
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4  transition-all duration-500">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </section>
  )
}
