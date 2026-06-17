import Image from "next/image";

import { Button } from "@/components/ui";

import {
  RiMapPinLine,
} from "react-icons/ri";


export function MapPreview() {
  return (
    <section
      className="
      section-padding
      relative
      overflow-hidden
      "
    >
      {/* Glow Background */}

      <div
        className="
        absolute
        inset-0
        bg-blue-500/5
        blur-[160px]
        pointer-events-none
        "
      />

      <div className="container-premium relative z-10">

        {/* Header */}

        <div className="text-center mb-12">

          <p className="text-blue-400 uppercase tracking-[0.2em] text-sm">
            Global Locations
          </p>

          <h2 className="heading-2 font-heading mt-4">
            Explore Properties on Map
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Discover luxury properties across the world with interactive location insights.
          </p>

        </div>

        {/* Map Container */}

        <div className="relative glass-card overflow-hidden rounded-[32px]">

          {/* Map Image */}

          <div className="relative h-[500px] lg:h-[650px]">

            <Image
              src="/images/world-map.jpg"
              alt="World Map"
              fill
              className="object-cover opacity-70"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/40" />

            {/* Pins */}

            <div className="absolute top-[30%] left-[20%]">
              <RiMapPinLine className="text-blue-400 text-3xl animate-pulse" />
            </div>

            <div className="absolute top-[45%] left-[60%]">
              <RiMapPinLine className="text-cyan-400 text-3xl animate-pulse" />
            </div>

            <div className="absolute top-[65%] left-[35%]">
              <RiMapPinLine className="text-violet-400 text-3xl animate-pulse" />
            </div>

          </div>

          {/* Floating Info Card */}

          <div
            className="
            absolute
            bottom-6
            left-6
            glass-card
            p-5
            max-w-xs
            "
          >
            <p className="text-slate-400 text-sm">
              Featured Region
            </p>

            <h3 className="text-white font-semibold mt-2">
              New York • Miami • LA
            </h3>

            <p className="text-gradient mt-2">
              2,400+ Premium Listings
            </p>

            <Button
              variant="gradient"
              size="sm"
              className="mt-4"
            >
              Explore Map
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}