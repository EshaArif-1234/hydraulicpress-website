'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const images = [
  {
    src: '/machine-1.jpg',
    alt: 'Industrial Hydraulic Press',
    title: 'High-Capacity Industrial Press',
    description: 'Capable of exerting up to 1000 tons of pressure'
  },
  {
    src: '/machine-2.jpg',
    alt: 'Precision Hydraulic Press',
    title: 'Precision Engineering Press',
    description: 'Perfect for detailed manufacturing processes'
  },
  {
    src: '/machine-3.jpg',
    alt: 'Automated Hydraulic Press',
    title: 'Automated Production Press',
    description: 'Fully automated with smart control systems'
  },
  {
    src: '/machine-4.jpg',
    alt: 'Workshop Hydraulic Press',
    title: 'Workshop Series Press',
    description: 'Ideal for small to medium workshops'
  },
  {
    src: '/machine-5.jpg',
    alt: 'Heavy Duty Hydraulic Press',
    title: 'Heavy-Duty Industrial Press',
    description: 'Built for continuous operation in demanding environments'
  }
];

export default function ImageSlider() {
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Our Premium Press Collection
        </h2>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full py-12"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-[400px] sm:w-[500px]">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
                <div className="relative h-[400px] sm:h-[600px] group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2 transform transition-transform group-hover:translate-y-[-8px]">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-200 transform transition-transform group-hover:translate-y-[-8px]">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
