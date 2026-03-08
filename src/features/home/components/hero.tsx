"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Reliable Fleet",
    description: "Well-maintained 4x4s.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
      </svg>
    ),
    title: "Camping Gear",
    description: "Rooftop tents available.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
    title: "Itinerary Help",
    description: "Free route planning.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "24/7 Rescue",
    description: "We've got your back.",
  },
];

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="African wildlife safari"
          fill
          priority
          className="object-cover scale-110"
        />
      </div>
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-32 pt-20 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-display space-y-0 leading-none">
            <span className="hero-title block text-6xl italic text-white sm:text-7xl lg:text-8xl">
              Wildlife
            </span>
            <span className="hero-title-delay block text-5xl italic text-olive-soft sm:text-6xl lg:text-7xl">
              Nature Tours
            </span>
          </h1>
          <p className="hero-description max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Premium self-drive car rentals and tailored
            safari experiences. Reliable 4x4s, camping gear,
            and local expertise for the ultimate road trip.
          </p>
        </div>
      </div>

      {/* Feature bar at bottom */}
      <div className="hero-features absolute bottom-0 left-0 right-0">
        <div className="bg-gradient-to-t from-sand/95 via-sand/80 to-sand/60 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-olive">{feature.icon}</div>
                  <div>
                    <div className="text-sm font-semibold text-espresso">
                      {feature.title}
                    </div>
                    <div className="text-xs text-espresso/60">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
