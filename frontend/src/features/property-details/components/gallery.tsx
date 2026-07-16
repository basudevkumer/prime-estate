"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: string[];
}

export function Gallery({
  images,
}: GalleryProps) {
  const [activeImage, setActiveImage] =
    useState(images[0]);

  return (
    <section className="space-y-4">
      
      {/* Main Image */}
      <div
        className="relative h-[500px] rounded-[32px] overflow-hidden"
      >
        <Image
          src={activeImage}
          alt="Property"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div
        className="grid grid-cols-4 gap-4"
      >
        {images.map((image) => (
          <button
            key={image}
            onClick={() =>
              setActiveImage(image)
            }
            className="relative h-28 rounded-2xl overflow-hidden border border-white/10"
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}   