import React from 'react'
import ServiceCard from '../custom/ServiceCard'

interface OurServicesProps {
  block: {
    sectionTitle: string
    sectionParagraph: string
    services: Array<{
      icon: {
        url: string
        alt: string
      }
      title: string
      description: string
    }>
  }
}

export default function OurServices({ block }: OurServicesProps) {
  const services = block.services || []

  return (
    <section
      id="services"
      className="bg-black px-6 md:px-12 lg:px-8 py-20 text-white border-t border-white"
    >
      {/* Header */}
      <div
        className="flex items-center gap-1 mb-6 text-sm tracking-wider text-gray-400"
        style={{ animation: 'slideIn 0.5s ease-out' }}
      >
        <span>01</span>
        <span className="text-zinc-600">{'//'}</span>
        <span className="font-medium">SERVICES</span>
      </div>

      {/* Title and Description Grid */}
      <div className="grid grid-cols-12 gap-8 mb-16 items-center">
        <div className="col-span-12 md:col-span-5">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-tighter"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
          >
            {block.sectionTitle}
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

      {/* Services Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            delay={0.3 + index * 0.1}
          />
        ))}
      </div>
    </section>
  )
}
