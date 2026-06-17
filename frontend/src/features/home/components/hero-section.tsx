import Image from "next/image";

import { Button } from "@/components/ui";

export function HeroSection() {
  return (
    <section
      className="
      relative
      overflow-hidden
      section-padding-xl
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-500/20
        blur-[140px]
        "
      />

      <div
        className="
        absolute
        right-0
        top-20
        h-[400px]
        w-[400px]
        rounded-full
        bg-violet-500/20
        blur-[140px]
        "
      />

      <div
        className="
        container-premium
        relative
        z-10
        "
      >
        <div
          className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
          "
        >
          {/* LEFT */}

          <div>
            <span
              className="
              inline-flex
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-4
              py-2
              text-sm
              "
            >
              #1 Premium Real Estate Platform
            </span>

            <h1
              className="
              display-xl
              font-heading
              mt-8
              "
            >
              Discover
              <span className="text-gradient"> Extraordinary</span>
              <br />
              Luxury Properties
            </h1>

            <p
              className="
              body-lg
              text-slate-400
              mt-8
              max-w-xl
              "
            >
              Buy, rent and invest in the world’s most exclusive properties
              using cutting-edge technology.
            </p>

            <div
              className="
              flex
              flex-wrap
              gap-4
              mt-10
              "
            >
              <Button variant="gradient">Explore Properties</Button>

              <Button variant="secondary">Book Consultation</Button>
            </div>

            {/* Stats */}

            <div
              className="
              grid
              grid-cols-3
              gap-6
              mt-16
              "
            >
              <div>
                <h3
                  className="
                  text-3xl
                  font-bold
                  text-gradient
                  "
                >
                  12K+
                </h3>

                <p
                  className="
                  text-slate-400
                  "
                >
                  Properties
                </p>
              </div>

              <div>
                <h3
                  className="
                  text-3xl
                  font-bold
                  text-gradient
                  "
                >
                  8K+
                </h3>

                <p
                  className="
                  text-slate-400
                  "
                >
                  Clients
                </p>
              </div>

              <div>
                <h3
                  className="
                  text-3xl
                  font-bold
                  text-gradient
                  "
                >
                  98%
                </h3>

                <p
                  className="
                  text-slate-400
                  "
                >
                  Success
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">
            <div
              className="
              glass-card
              overflow-hidden
              rounded-[32px]
              "
            >
              <div
                className="
                relative
                h-[600px]
                "
              >
                <Image
                  src="/images/hero-property.jpg"
                  alt="Luxury Property"
                  fill
                  priority
                  className="
                  object-cover
                  "
                />
              </div>
            </div>

            {/* Floating Card */}

            <div
              className="
              glass-card
              absolute
              -bottom-8
              -left-8
              p-5
              max-w-xs
              "
            >
              <p
                className="
                text-slate-400
                text-sm
                "
              >
                Featured Listing
              </p>

              <h4
                className="
                mt-2
                font-semibold
                "
              >
                Ocean View Villa
              </h4>

              <p
                className="
                text-gradient
                mt-2
                "
              >
                $4.5M
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
