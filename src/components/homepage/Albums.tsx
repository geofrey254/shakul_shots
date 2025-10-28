"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const montezStyle = {
  fontFamily: 'cursive',
  fontStyle: 'italic'
};

export default function Albums() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Sample photos - replace with your actual images
  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
      title: 'Wedding Ceremony',
      category: 'Weddings'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
      title: 'Aerial Landscape',
      category: 'Drone'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
      title: 'Portrait Session',
      category: 'Portfolio'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
      title: 'Candid Moments',
      category: 'Photography'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
      title: 'Nature Beauty',
      category: 'Photography'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
      title: 'Love Story',
      category: 'Weddings'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToSlide = (index:any) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Get visible photos (current + 2 on each side for preview)
  const getVisiblePhotos = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + photos.length) % photos.length;
      visible.push({ ...photos[index], offset: i });
    }
    return visible;
  };

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .photo-slide {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
      
      <section className="bg-black px-6 md:px-12 lg:px-8 py-12 md:py-20 text-white border-t border-zinc-800">
        {/* Header */}
        <div 
          className="flex justify-center items-center gap-1 mb-6 text-sm tracking-wider text-gray-400"
          style={{ animation: 'slideIn 0.5s ease-out' }}
        >
          <span>02</span>
          <span className="text-zinc-600">//</span>
          <span className="font-medium">PHOTO ALBUMS</span>
        </div>
        
        {/* Title Grid */}
        <div className="flex md:justify-center items-center">
          <div className="max-w-3xl">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl text-center text-white font-semibold tracking-tight leading-tight"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
            >
              Collection of photos All of Your Best Works
            </h2>
          </div>
        </div>
        
        {/* Photo Slider */}
        <div className="relative" style={{ animation: 'fadeInUp 0.6s ease-out 0.3s both' }}>
          {/* Main Slider Container */}
          <div className="relative h-[600px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <div className='absolute bottom-0 left-0 -z-50'><h2 className='text-[20rem] text-white opacity-30 blur-lg'>SHAKUL</h2></div>
            {/* Photos */}
            <div className="absolute inset-0 flex items-center justify-center">
              {getVisiblePhotos().map((photo, idx) => {
                const { offset } = photo;
                const isCenter = offset === 0;
                const scale = isCenter ? 1 : 0.75;
                const opacity = Math.abs(offset) === 0 ? 1 : Math.abs(offset) === 1 ? 0.6 : 0.3;
                const zIndex = 10 - Math.abs(offset);
                const translateX = offset * 320; // Spacing between photos
                const blur = Math.abs(offset) > 0 ? 'blur(2px)' : 'blur(0)';

                return (
                  <div
                    key={`${photo.id}-${idx}`}
                    className="photo-slide absolute cursor-pointer"
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                      filter: blur,
                      width: '280px',
                      height: isCenter ? '420px' : '380px'
                    }}
                    onClick={() => !isCenter && goToSlide((currentIndex + offset + photos.length) % photos.length)}
                  >
                    <div className={`relative w-full h-full rounded-lg overflow-hidden ${isCenter ? 'ring-2 ring-white shadow-2xl' : ''}`}>
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Photo info - only visible on center photo */}
                      {isCenter && (
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <span className="text-xs uppercase tracking-wider text-gray-400 mb-2 block">
                            {photo.category}
                          </span>
                          <h3 className="text-xl md:text-2xl font-semibold text-white">
                            {photo.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-12 bg-white' 
                    : 'w-1.5 bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>

          {/* Photo Counter */}
          <div className="text-center mt-6 text-gray-400 text-sm">
            <span className="text-white font-medium">{currentIndex + 1}</span> / {photos.length}
          </div>
        </div>
      </section>
    </>
  );
}