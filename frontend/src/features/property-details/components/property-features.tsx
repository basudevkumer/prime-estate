import {
  RiWifiLine,
  RiShieldCheckLine,
  RiCarLine,
  RiPlantLine,
} from "react-icons/ri";

import { MdPool, MdFitnessCenter } from "react-icons/md";

import { Property } from "@/types";

interface PropertyFeaturesProps {
  property: Property;
}

const amenities = [
  {
    icon: RiWifiLine,
    title: "High Speed Internet",
  },

  {
    icon: MdPool,
    title: "Infinity Pool",
  },

  {
    icon: MdFitnessCenter,
    title: "Private Gym",
  },

  {
    icon: RiShieldCheckLine,
    title: "24/7 Security",
  },

  {
    icon: RiCarLine,
    title: "Private Parking",
  },

  {
    icon: RiPlantLine,
    title: "Landscaped Garden",
  },
];

export function PropertyFeatures({ property }: PropertyFeaturesProps) {
  return (
    <>
      <section
        className="
      mt-20
      grid
      lg:grid-cols-3
      gap-10
      "
      >
        {/* LEFT */}
        <div
          className="
        lg:col-span-2
        "
        >
          <h2
            className="
          text-3xl
          font-bold
          "
          >
            Overview
          </h2>

          <p
            className="
          mt-6
          text-slate-400
          leading-relaxed
          "
          >
            {property.description ??
              `
Luxury residence located in a prime area,
designed with modern architecture,
premium finishes, and world-class amenities.
This property offers an exceptional living
experience for families, investors, and
high-net-worth individuals seeking comfort,
prestige, and long-term value.
`}
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
        glass-card
        p-8
        "
        >
          <h3
            className="
          text-xl
          font-semibold
          "
          >
            Quick Facts
          </h3>

          <div
            className="
          mt-6
          space-y-4
          "
          >
            <div className="flex justify-between">
              <span className="text-slate-400">Property Type</span>

              <span>{property.type}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Bedrooms</span>

              <span>{property.bedrooms}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Bathrooms</span>

              <span>{property.bathrooms}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-400">Area</span>

              <span>{property.area} sqft</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="
  mt-20
  "
      >
        <h2
          className="
    text-3xl
    font-bold
    "
        >
          Amenities
        </h2>

        <div
          className="
    mt-8
    grid
    md:grid-cols-2
    xl:grid-cols-3
    gap-6
    "
        >
          {amenities.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="
          glass-card
          p-6
          flex
          items-center
          gap-4
          "
            >
              <div
                className="
            h-12
            w-12
            rounded-2xl
            bg-primary-500/10
            flex
            items-center
            justify-center
            "
              >
                <Icon size={22} />
              </div>

              <span>{title}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
