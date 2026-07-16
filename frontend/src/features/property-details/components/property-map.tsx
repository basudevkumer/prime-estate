import {
  RiMapPinLine,
} from "react-icons/ri";

interface PropertyMapProps {
  location: string;
}

export function PropertyMap({
  location,
}: PropertyMapProps) {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold">
        Location
      </h2>

      <div
        className="mt-8 glass-card rounded-[32px] overflow-hidden"
      >
        <div
          className="h-[420px] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        >
          <div className="text-center">
            <RiMapPinLine
              size={60}
              className="mx-auto text-blue-400"
            />

            <h3 className="mt-6 text-2xl font-semibold">
              {location}
            </h3>

            <p className="mt-3 text-slate-400">
              Interactive Google Maps integration
              will be added in a future step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}