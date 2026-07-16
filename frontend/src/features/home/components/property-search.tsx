import { Button } from "@/components/ui";

import {
  RiMapPinLine,
  RiHome4Line,
  RiMoneyDollarCircleLine,
  RiSearchLine,
} from "react-icons/ri";

export function PropertySearch() {
  return (
    <section
      className="relative -mt-16 z-20"
    >
      <div className="container-premium">
        <div
          className="glass-card gradient-border p-6 lg:p-8"
        >
          <div
            className="grid lg:grid-cols-4 gap-5"
          >
            {/* Location */}

            <div>
              <label
                className="text-sm text-slate-400 mb-2 block"
              >
                Location
              </label>

              <div
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 h-14"
              >
                <RiMapPinLine />

                <input
                  placeholder="New York"
                  className="bg-transparent outline-none w-full"
                />
              </div>
            </div>

            {/* Property Type */}

            <div>
              <label
                className="text-sm text-slate-400 mb-2 block"
              >
                Property Type
              </label>

              <div
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 h-14"
              >
                <RiHome4Line />

                <select
                  className="bg-transparent outline-none w-full"
                >
                  <option>Villa</option>

                  <option>Apartment</option>

                  <option>Penthouse</option>
                </select>
              </div>
            </div>

            {/* Price */}

            <div>
              <label
                className="text-sm text-slate-400 mb-2 block"
              >
                Budget
              </label>

              <div
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 h-14"
              >
                <RiMoneyDollarCircleLine />

                <select
                  className="bg-transparent outline-none w-full"
                >
                  <option>$500K+</option>

                  <option>$1M+</option>

                  <option>$5M+</option>
                </select>
              </div>
            </div>

            {/* Button */}

            <div
              className="flex items-end"
            >
              <Button variant="gradient" fullWidth>
                <RiSearchLine />
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
