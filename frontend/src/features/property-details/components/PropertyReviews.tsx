"use client";

import Image from "next/image";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";

const reviews = [
  {
    id: 1,
    name: "Jennifer Adams",
    role: "Home Buyer",
    image: "/testimonials/testimonial-2.jpg",
    rating: 5,
    date: "March 2026",
    comment:
      "Absolutely stunning property! The attention to detail and premium finishes exceeded all our expectations. The virtual tour was incredibly helpful in making our decision.",
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "Investor",
    image: "/testimonials/testimonial-3.jpg",
    rating: 5,
    date: "February 2026",
    comment:
      "Prime Estate made the entire process seamless. From the initial viewing to closing, their team was professional and responsive. Highly recommended for luxury investments.",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Property Buyer",
    image: "/testimonials/testimonial-4.jpg",
    rating: 4,
    date: "January 2026",
    comment:
      "Beautiful property in a prime location. The only reason I'm not giving 5 stars is the competitive pricing, but the quality is undeniable. Our family loves our new home.",
  },
];

export function PropertyReviews() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">Buyer Reviews</h2>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="glass-card p-6 rounded-[32px]">
            {/* Stars */}
            <div className="flex gap-1 text-yellow-400 mb-4">
              {Array.from({ length: review.rating }).map((_, i) => (
                <RiStarFill key={i} />
              ))}
              {review.rating % 1 !== 0 && <RiStarHalfFill />}
            </div>

            {/* Comment */}
            <p className="text-slate-300 leading-relaxed text-sm">
              &ldquo;{review.comment}&rdquo;
            </p>

            {/* Reviewer */}
            <div className="mt-5 flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-blue-500/30">
                <Image
                  src={review.image}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-sm">{review.name}</h4>
                <p className="text-xs text-slate-500">
                  {review.role} &middot; {review.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
