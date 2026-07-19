"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { RiStarFill, RiDoubleQuotesL } from "react-icons/ri";

import "swiper/css";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 28,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="pb-2"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.id}>
          <div className="glass-card p-6 md:p-8 rounded-[32px] h-full flex flex-col">
            {/* Quote Icon */}
            <RiDoubleQuotesL className="text-blue-400/60 text-2xl mb-4 shrink-0" />

            {/* Review */}
            <p className="text-slate-300 leading-relaxed text-sm md:text-base flex-1">
              &ldquo;{t.review}&rdquo;
            </p>

            {/* Stars */}
            <div className="mt-4 flex items-center gap-1 text-yellow-400 shrink-0">
              {Array.from({ length: t.rating }).map((_, i) => (
                <RiStarFill key={i} size={16} />
              ))}
            </div>

            {/* User */}
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3 shrink-0">
              <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden ring-2 ring-blue-500/30 shrink-0">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm md:text-base truncate">
                  {t.name}
                </p>
                <p className="text-xs md:text-sm text-slate-500 truncate">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
