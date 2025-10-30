'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Instagram, Linkedin, Camera } from 'lucide-react'
import { FiFacebook } from 'react-icons/fi'
import { RiTiktokLine } from "react-icons/ri";

interface TeamProps {
  block: {
    sectionTitle: string
    sectionParagraph: string
    members: Array<{
      name: string
      role: string
      photo: {
        url: string
        alt: string
      }
      socialLinks: {
        instagram?: string
        linkedin?: string
        facebook?: string
        tiktok?: string
      }
    }>
  }
}

export default function Team({ block }: TeamProps) {
  const teamMembers = block.members

  return (
    <>
      <section className="bg-black px-6 md:px-12 lg:px-8 py-20 text-white border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div
            className="flex items-center gap-1 mb-6 text-sm tracking-wider text-gray-400"
            style={{ animation: 'slideIn 0.5s ease-out' }}
          >
            <span>04</span>
            <span className="text-zinc-600">{'//'}</span>
            <span className="font-medium">OUR TEAM</span>
          </div>

          {/* Title and Description Grid */}
          <div className="grid grid-cols-12 gap-8 mb-16 items-center">
            <div className="col-span-12 md:col-span-5">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold"
                style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
              >
                {block.sectionTitle}{' '}
              </h2>
            </div>

            <div className="hidden md:block md:col-span-1"></div>

            <div className="col-span-12 md:col-span-6">
              <p
                className="text-gray-400 text-base md:text-lg leading-relaxed"
                style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
              >
                {block.sectionParagraph}
              </p>
            </div>
          </div>
        </div>

        {/* Team Carousel */}
        <div
          className="relative max-w-[95vw] mx-auto"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}
        >
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent className="ml-0">
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="pl-0 md:basis-1/2 lg:basis-1/3">
                  <div className="team-card bg-black p-6 h-full">
                    {/* Image Container */}
                    <div className="relative h-96 overflow-hidden mb-6 group">
                      <Image
                        src={member.photo.url}
                        alt={member.photo.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent z-10"></div>

                      {/* Specialty Badge */}
                      <div className="absolute top-4 left-4 specialty-badge z-20">
                        <div className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-zinc-700/50 rounded-full text-xs font-medium text-white shadow-lg">
                          {member.role}
                        </div>
                      </div>

                      {/* Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                            <p className="text-sm text-gray-300 flex items-center gap-2">
                              <Camera className="w-4 h-4" />
                              {member.role}
                            </p>
                            <div className="space-y-3">
                              {/* Social Links */}
                              <div className="social-links flex gap-2 mt-4">
                                {member.socialLinks.instagram && (
                                  <Link
                                    href={member.socialLinks.instagram}
                                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                    aria-label="Instagram"
                                  >
                                    <Instagram className="w-4 h-4" />
                                  </Link>
                                )}
                                {member.socialLinks.linkedin && (
                                  <Link
                                    href={member.socialLinks.linkedin}
                                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                    aria-label="LinkedIn"
                                  >
                                    <Linkedin className="w-4 h-4" />
                                  </Link>
                                )}

                                {member.socialLinks.facebook && (
                                  <Link
                                    href={member.socialLinks.facebook}
                                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                    aria-label="Facebook"
                                  >
                                    <FiFacebook className="w-4 h-4" />{' '}
                                  </Link>
                                )}

                                {member.socialLinks.tiktok && (
                                  <Link
                                    href={member.socialLinks.tiktok}
                                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                    aria-label="TikTok"
                                  >
                                    <RiTiktokLine className="w-4 h-4" />{' '}
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  )
}
