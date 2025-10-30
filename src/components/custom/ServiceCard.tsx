import React from 'react'
import Image from 'next/image';

interface ServiceCardProps {
  icon: {
    url: string;
    alt: string;
  };
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard ({icon, title, description, delay}: ServiceCardProps) {
  return (
    <div 
      className="group relative bg-zinc-900 rounded-lg p-8 border border-zinc-800 hover:border-zinc-600 transition-all duration-500 overflow-hidden"
      style={{ 
        animation: `fadeInUp 0.6s ease-out ${delay}s both`
      }}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-linear-to-br from-zinc-800/0 via-zinc-800/0 to-zinc-700/0 group-hover:from-zinc-800/20 group-hover:via-zinc-700/10 group-hover:to-zinc-600/20 transition-all duration-500"></div>
      
      <div className="relative z-10">
        {/* Icon container with animatiaon */}
        <div className="mb-6 inline-block">
          <div className="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-700 group-hover:border-zinc-600 group-hover:scale-110 transition-all duration-300">
<Image src={icon.url} width={500} height={500} alt={icon.alt}/>
          </div>
        </div>
        
        {/* Title */}
        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">
          {title}
        </h4>
        
        {/* Description */}
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {description}
        </p>
        
        {/* Decorative element */}
        <div className="mt-6 w-12 h-0.5 bg-zinc-700 group-hover:w-20 group-hover:bg-zinc-500 transition-all duration-300"></div>
      </div>
    </div>
  );
};