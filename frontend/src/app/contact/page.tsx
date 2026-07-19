"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\d\s\-\+\(\)]{7,20}$/.test(val),
      "Please enter a valid phone number",
    ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
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

              {/* Map */}
              <div className="glass-card rounded-2xl overflow-hidden h-48">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0060%2C40.7128%2C-73.9352%2C40.7614&layer=mapnik&marker=40.7484%2C-73.9967"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Prime Estate Office Location"
                  className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                />
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

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <FormField label="Full Name" error={errors.name?.message}>
                      <Input placeholder="John Doe" {...register("name")} />
                    </FormField>

                    <FormField
                      label="Email Address"
                      error={errors.email?.message}
                    >
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        {...register("email")}
                      />
                    </FormField>
                  </div>

                  <FormField
                    label="Phone Number (optional)"
                    error={errors.phone?.message}
                  >
                    <Input
                      type="tel"
                      placeholder="+1 555 123 4567"
                      {...register("phone")}
                    />
                  </FormField>

                  <FormField label="Message" error={errors.message?.message}>
                    <Textarea
                      placeholder="Tell us about your requirements..."
                      {...register("message")}
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
