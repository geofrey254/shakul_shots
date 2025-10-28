'use client'

import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import Link from 'next/link'
import { Camera, ArrowUpRight } from 'lucide-react'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Golden Hour Wedding',
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      likes: 234,
      views: 1523,
      height: 'tall',
      description: 'A breathtaking sunset ceremony captured in stunning detail.',
    },
    {
      id: 2,
      title: 'Urban Portrait',
      category: 'Portrait',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
      likes: 189,
      views: 982,
      height: 'medium',
      description: 'Modern street photography with dramatic lighting.',
    },
    {
      id: 3,
      title: 'Aerial Landscape',
      category: 'Aerial',
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80',
      likes: 567,
      views: 3421,
      height: 'short',
      description: "Breathtaking bird's eye view of coastal beauty.",
    },
    {
      id: 4,
      title: 'Fashion Editorial',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
      likes: 432,
      views: 2156,
      height: 'tall',
      description: 'High fashion editorial with bold creative direction.',
    },
    {
      id: 5,
      title: 'Corporate Event',
      category: 'Event',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
      likes: 156,
      views: 876,
      height: 'medium',
      description: 'Professional corporate gathering documentation.',
    },
    {
      id: 6,
      title: 'Intimate Moments',
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
      likes: 298,
      views: 1654,
      height: 'short',
      description: 'Candid moments of love and celebration.',
    },
    {
      id: 7,
      title: 'Studio Portrait',
      category: 'Portrait',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
      likes: 412,
      views: 2341,
      height: 'tall',
      description: 'Classic studio portrait with timeless elegance.',
    },
    {
      id: 8,
      title: 'Drone Cityscape',
      category: 'Aerial',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
      likes: 678,
      views: 4532,
      height: 'medium',
      description: 'Urban architecture from a unique perspective.',
    },
    {
      id: 9,
      title: 'Runway Show',
      category: 'Fashion',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      likes: 523,
      views: 3210,
      height: 'short',
      description: 'Fashion week runway captured in motion.',
    },
    {
      id: 10,
      title: 'Conference Coverage',
      category: 'Event',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      likes: 187,
      views: 1098,
      height: 'medium',
      description: 'Dynamic event photography with energy.',
    },
    {
      id: 11,
      title: 'Beach Ceremony',
      category: 'Wedding',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
      likes: 445,
      views: 2876,
      height: 'tall',
      description: 'Romantic beachside wedding celebration.',
    },
    {
      id: 12,
      title: 'Mountain Vista',
      category: 'Aerial',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      likes: 789,
      views: 5123,
      height: 'short',
      description: 'Majestic mountain ranges from above.',
    },
  ]

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  const breakpointColumnsObj = {
    default: 2,
    1100: 3,
    768: 2,
    500:2,
  }

  return (
    <section className="bg-black px-6 md:px-12 lg:px-8 py-20 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="flex md:justify-center items-center gap-1 mb-6 text-sm tracking-wider text-gray-400"
          style={{ animation: 'slideIn 0.5s ease-out' }}
        >
          <span>05</span>
          <span className="text-zinc-600">//</span>
          <span className="font-medium">PORTFOLIO</span>
        </div>

        {/* Title */}
        <div className="mb-12 flex flex-col justify-center items-center">
          <h2 className="text-5xl font-semibold tracking-tight leading-tight mb-4">
            Our Creative{' '}
              Portfolio
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
          {filteredProjects.map((project:any, index) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
              }}
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.image}
                alt={project.title}
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
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </Masonry>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-zinc-900 border border-zinc-700 rounded-full text-white font-medium hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 flex items-center gap-2 mx-auto">
            <span>Load More Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
