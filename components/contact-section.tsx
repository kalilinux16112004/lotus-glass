"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Lotus Tower, Andheri East, Mumbai 400069, India",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 22 4000 1234",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@lotusenterprises.in",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
];

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0B1D3A] overflow-hidden">
      {/* Glass grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(197,165,90,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(197,165,90,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating glass orbs */}
      <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-[#C5A55A]/5 blur-3xl animate-glow" />
      <div className="absolute bottom-16 right-[8%] h-48 w-48 rounded-full bg-[#C5A55A]/5 blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-white/[0.02] blur-3xl" />

      {/* Decorative floating glass panels */}
      <div className="absolute top-32 right-[5%] hidden xl:block">
        <div className="h-20 w-20 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md animate-float" style={{ animationDelay: "0s" }} />
      </div>
      <div className="absolute bottom-40 left-[4%] hidden xl:block">
        <div className="h-14 w-14 rounded-lg border border-[#C5A55A]/10 bg-[#C5A55A]/[0.03] backdrop-blur-md animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div
        ref={ref}
        className={cn(
          "relative mx-auto max-w-7xl px-6 lg:px-8 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Section header */}
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-12 bg-[#C5A55A]" />
          <span className="text-sm font-semibold tracking-[0.2em] text-[#C5A55A] uppercase">
            Contact Us
          </span>
          <div className="h-px w-12 bg-[#C5A55A]/30" />
        </div>
        <div className="mb-16 max-w-2xl">
          <h2 className="font-serif text-3xl font-bold leading-[1.15] text-white md:text-4xl lg:text-5xl text-balance">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60 text-pretty">
            Have a project in mind? Reach out to discuss your requirements with our
            engineering team.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact form -- Glass card */}
          <div className="lg:col-span-3 h-full">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl relative overflow-hidden group h-full">
              {/* Subtle hover glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A55A]/0 via-[#C5A55A]/10 to-[#C5A55A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl" />
              
              {/* Glass reflection */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-white/90">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      required
                      className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#C5A55A]/50 focus-visible:border-[#C5A55A] transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-white/90">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#C5A55A]/50 focus-visible:border-[#C5A55A] transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-white/90">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#C5A55A]/50 focus-visible:border-[#C5A55A] transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-semibold text-white/90">
                      Service Required
                    </Label>
                    <Input
                      id="service"
                      placeholder="e.g. Curtain Wall, Glazing"
                      className="h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#C5A55A]/50 focus-visible:border-[#C5A55A] transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-white/90">
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, location, timeline..."
                    rows={5}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-[#C5A55A]/50 focus-visible:border-[#C5A55A] resize-none transition-all duration-300"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitted}
                  className="w-full sm:w-auto bg-[#C5A55A] text-white hover:bg-[#D4B36A] font-semibold text-base px-10 rounded-full shadow-lg shadow-[#C5A55A]/20 transition-all duration-300 hover:shadow-[#C5A55A]/30 hover:scale-[1.02] border-0"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Enquiry Sent Successfully
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Enquiry
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact info -- Glass card */}
          <div className="lg:col-span-2 h-full">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl h-full">
              {/* Glass reflection */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* Decorative glass element */}
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[#C5A55A]/10 blur-3xl" />

              <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-sm leading-relaxed text-white/60 mb-8">
                Our offices are open for consultations and site visits. Feel free to reach out
                anytime.
              </p>

              <div className="flex flex-col gap-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-5 group">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:bg-[#C5A55A]/20 group-hover:border-[#C5A55A]/30 group-hover:scale-110">
                      <item.icon className="h-5 w-5 text-[#C5A55A]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] text-[#C5A55A] uppercase mb-1">
                        {item.label}
                      </p>
                      <p className="text-base font-medium text-white/90 leading-snug">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Quick trust badges */}
              <div className="flex flex-wrap gap-3">
                {["BIS Certified", "ISO 9001:2015", "Fire Safe"].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-[#C5A55A]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}