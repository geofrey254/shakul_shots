import React from 'react';
import { Camera, Plane, Heart, User } from 'lucide-react';
import Image from 'next/image';
import ServiceCard from '../custom/ServiceCard';
import { MonteCarlo } from 'next/font/google';

// Simulating the Montez font with a script-style class
const montezStyle = MonteCarlo(
    {
        weight:['400'],
        subsets: ['latin'],

    }
)

export default function OurServices() {
  const services = [
    {
      icon: '/icons/photography.png',
      title: "Photography",
      description: "Capture stunning moments with professional photography services tailored to your vision and style."
    },
    {
      icon: '/icons/drone.png',
      title: "Drone Cinematography",
      description: "Elevate your perspective with breathtaking aerial shots and cinematic drone footage."
    },
    {
      icon: '/icons/wedding.png',
      title: "Weddings",
      description: "Preserve your special day with elegant wedding photography that tells your unique love story."
    },
    {
      icon: '/icons/portrait.png',
      title: "Portfolio Shoot",
      description: "Professional headshots and portfolio photography to showcase your best self and personal brand."
    }
  ];

  return (
    <>
      <section className="bg-black px-6 md:px-12 lg:px-8 py-20 text-white border-t border-white">
        {/* Header */}
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
          <div className="col-span-12 md:col-span-5">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold tracking-tighter"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
            >
              Our Creative{' '}
              <span 
                className={[montezStyle.className, "block text-5xl md:text-6xl lg:text-7xl md:mt-2"].join(" ")}
               
              >
                Services
              </span>
            </h2>
          </div>
          
          <div className="hidden md:block md:col-span-1"></div>
          
          <div className="col-span-12 md:col-span-6">
            <p 
              className="text-gray-400 text-base md:text-lg leading-relaxed"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.2s both' }}
            >
              We're deeply passionate about catching your lovely memories through our lenses and conveying your love for every moment of life as a whole.
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
    </>
  );
}