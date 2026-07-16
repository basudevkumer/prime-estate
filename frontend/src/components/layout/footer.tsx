import Link from "next/link";

import {
  footerLinks,
} from "@/data";

import {
  RiFacebookFill,
  RiTwitterXFill,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/10"
    >
      {/* Glow */}

      <div
        className="absolute inset-0 bg-blue-500/5 blur-[160px] pointer-events-none"
      />

      <div
        className="container-premium relative z-10"
      >
        {/* Main Footer */}

        <div
          className="py-20 grid gap-12 lg:grid-cols-6"
        >
          {/* Brand */}

          <div className="lg:col-span-2">

            <h3
              className="text-2xl font-bold text-gradient"
            >
              Prime Estate
            </h3>

            <p
              className="mt-4 text-slate-400 max-w-sm"
            >
              Discover premium properties,
              connect with verified agents,
              and invest with confidence.
            </p>

            {/* Social */}

            <div
              className="flex gap-4 mt-6"
            >
              <button className="glass-card p-3">
                <RiFacebookFill />
              </button>

              <button className="glass-card p-3">
                <RiTwitterXFill />
              </button>

              <button className="glass-card p-3">
                <RiInstagramLine />
              </button>

              <button className="glass-card p-3">
                <RiLinkedinFill />
              </button>
            </div>

          </div>

          {/* Company */}

          <div>
            <h4 className="font-semibold mb-5">
              Company
            </h4>

            <ul className="space-y-3">
              {footerLinks.company.map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Properties */}

          <div>
            <h4 className="font-semibold mb-5">
              Properties
            </h4>

            <ul className="space-y-3">
              {footerLinks.properties.map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h4 className="font-semibold mb-5">
              Resources
            </h4>

            <ul className="space-y-3">
              {footerLinks.resources.map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}

          <div>

            <h4 className="font-semibold mb-5">
              Newsletter
            </h4>

            <p
              className="text-slate-400 text-sm mb-4"
            >
              Get luxury property updates.
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="w-full glass-card px-4 py-3 outline-none"
            />

          </div>

        </div>

        {/* Bottom */}

        <div
          className="border-t border-white/10 py-6 flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <p className="text-slate-500">
            © 2026 Prime Estate.
            All rights reserved.
          </p>

          <div
            className="flex gap-6 text-sm text-slate-500"
          >
            <Link href="/">
              Privacy
            </Link>

            <Link href="/">
              Terms
            </Link>

            <Link href="/">
              Cookies
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}