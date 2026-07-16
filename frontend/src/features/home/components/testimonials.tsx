"use client";

import { testimonials } from "@/data";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import {
  RiStarFill,
} from "react-icons/ri";


export function Testimonials() {
  return (
    <section
      className="section-padding relative overflow-hidden"
    >
      {/* Background Glow */}

      <div
        className="absolute inset-0 bg-violet-500/5 blur-[160px] pointer-events-none"
      />

      <div className="container-premium relative z-10">

        {/* Header */}

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-[0.2em] text-sm">
            Testimonials
          </p>

          <h2 className="heading-2 font-heading mt-4">
            What Our Clients Say
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Real experiences from investors, buyers, and agents worldwide.
          </p>

        </div>

        {/* Slider */}

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >

          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>

              <div
                className="glass-card p-8 rounded-[32px] h-full"
              >

                {/* Stars */}

                <div className="flex gap-1 text-yellow-400 mb-4">
                  {Array.from({ length: t.rating }).map(
                    (_, i) => (
                      <RiStarFill key={i} />
                    )
                  )}
                </div>

                {/* Review */}

                <p className="text-slate-300 leading-relaxed">
                  "{t.review}"
                </p>

                {/* User */}

                <div className="mt-6">
                  <h4 className="font-semibold text-white">
                    {t.name}
                  </h4>

                  <p className="text-slate-400 text-sm">
                    {t.role}
                  </p>
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}