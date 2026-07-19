import { StatsCard } from "@/components/ui/StatsCard";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faqs";
import { partners } from "@/data/partners";
import { testimonials } from "@/data/testimonials";
import { TestimonialsSlider } from "@/components/shared/TestimonialsSlider";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding-lg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="container-premium relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400">
              Prime Estate
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-3xl mx-auto">
            We are on a mission to redefine luxury real estate — combining
            cutting-edge technology with exceptional property expertise.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCard value="$2.4B" label="Total Sales" />
            <StatsCard value="12K+" label="Properties Listed" />
            <StatsCard value="99.8%" label="Client Satisfaction" />
            <StatsCard value="150+" label="Expert Agents" />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          <div className="glass-card p-8 md:p-12 rounded-[32px]">
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-slate-400 text-lg leading-relaxed max-w-4xl">
              <p>
                Prime Estate was founded with a simple vision: to transform the
                way people discover and invest in luxury real estate. What began
                as a passion project has grown into a trusted platform
                connecting discerning buyers with the world&apos;s most
                exceptional properties.
              </p>
              <p>
                Our team of dedicated professionals brings decades of combined
                experience in real estate, technology, and client services. We
                leverage advanced AI-powered search, immersive virtual tours,
                and personalized advisory to ensure every client finds their
                perfect match.
              </p>
              <p>
                From penthouses in Manhattan to villas on the Amalfi Coast,
                Prime Estate is your gateway to the finest properties worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          <div className="text-center mb-12">
            <p className="text-blue-400 uppercase tracking-[0.2em] text-sm">
              Trusted Partners
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3">
              We Work With the Best
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="glass-card px-8 py-4 rounded-2xl"
              >
                <span className="text-lg font-semibold text-slate-300">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          <div className="text-center mb-12">
            <p className="text-blue-400 uppercase tracking-[0.2em] text-sm">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3">
              What Our Clients Say
            </h2>
          </div>
          <TestimonialsSlider testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding pt-0">
        <div className="container-premium max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-blue-400 uppercase tracking-[0.2em] text-sm">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mt-3">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Accordion
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
