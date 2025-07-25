// src/components/ui/CardSwipe.jsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import Image from 'next/image'

export default function CardSwipe({ images = [], autoplayDelay = 2000, slideShadows = false }) {
  const allImages = images.concat(images) // duplicate for looped autoplay

  return (
    <div className="w-full max-w-md mx-auto ">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
        className="h-[400px]"
      >
        {allImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
