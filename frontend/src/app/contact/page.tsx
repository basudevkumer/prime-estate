"use client";

import { useState, FormEvent } from "react";
import {
  RiMapPinLine,
  RiMailLine,
  RiPhoneLine,
  RiTimeLine,
  RiSendPlaneLine,
} from "react-icons/ri";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { FormField } from "@/components/ui/FormField";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: RiMapPinLine,
      label: "Address",
      value: "123 Luxury Avenue, New York, NY 10001",
    },
    {
      icon: RiMailLine,
      label: "Email",
      value: "hello@primeestate.com",
    },
    {
      icon: RiPhoneLine,
      label: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: RiTimeLine,
      label: "Working Hours",
      value: "Mon – Sat: 9:00 AM – 7:00 PM",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden section-padding-lg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="container-premium relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-heading">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400">
              Touch
            </span>
          </h1>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Have a question or ready to find your dream property? We&apos;d love
            to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding pt-0">
        <div className="container-premium">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="glass-card p-5 rounded-2xl flex items-start gap-4"
                >
                  <div className="mt-1 h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="text-blue-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="glass-card p-5 rounded-2xl h-48 flex items-center justify-center">
                <p className="text-slate-500 text-sm">Map Integration</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8 md:p-10 rounded-[32px]">
                <h2 className="text-2xl md:text-3xl font-bold font-heading">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-slate-400">
                  Fill out the form below and we&apos;ll respond as soon as
                  possible.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField label="Full Name">
                      <Input
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                      />
                    </FormField>

                    <FormField label="Email Address">
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        required
                      />
                    </FormField>
                  </div>

                  <FormField label="Phone Number (optional)">
                    <Input
                      type="tel"
                      placeholder="+1 555 123 4567"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                    />
                  </FormField>

                  <FormField label="Message">
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      required
                    />
                  </FormField>

                  <Button
                    type="submit"
                    size="lg"
                    variant="gradient"
                    loading={loading}
                    className="w-full"
                  >
                    <RiSendPlaneLine />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
