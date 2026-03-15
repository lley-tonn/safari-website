"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";

type VehicleCategory = "all" | "4x4" | "suv" | "camper";

interface Vehicle {
  name: string;
  pricePerDay: number;
  description: string;
  image: string;
  category: VehicleCategory;
  features: string[];
  specs: { label: string; value: string }[];
  popular?: boolean;
}

const vehicles: Vehicle[] = [
  {
    name: "Toyota Land Cruiser V8",
    pricePerDay: 150,
    description:
      "The flagship safari vehicle. Unmatched power and luxury for the most demanding terrain.",
    image: "/vehicle2.jpg",
    category: "4x4",
    popular: true,
    features: ["Pop-up roof", "Fridge", "USB charging", "Roof rack"],
    specs: [
      { label: "7 Seats", value: "seats" },
      { label: "Automatic", value: "transmission" },
      { label: "6 Bags", value: "luggage" },
      { label: "Diesel", value: "fuel" },
    ],
  },
  {
    name: "Toyota Land Cruiser Prado",
    pricePerDay: 120,
    description:
      "Premium comfort meets rugged capability. Ideal for long safari adventures.",
    image: "/vehicle2.jpg",
    category: "4x4",
    features: ["Pop-up roof", "Cool box", "USB charging"],
    specs: [
      { label: "5 Seats", value: "seats" },
      { label: "Automatic", value: "transmission" },
      { label: "5 Bags", value: "luggage" },
      { label: "Diesel", value: "fuel" },
    ],
  },
  {
    name: "Toyota Hilux Double Cab",
    pricePerDay: 85,
    description:
      "The ultimate workhorse. Perfect for rough terrains and national parks.",
    image: "/vehicle1.jpg",
    category: "4x4",
    features: ["Roof rack", "Tow bar", "USB charging"],
    specs: [
      { label: "5 Seats", value: "seats" },
      { label: "Manual", value: "transmission" },
      { label: "4 Bags", value: "luggage" },
      { label: "Diesel", value: "fuel" },
    ],
  },
  {
    name: "Toyota Hilux Single Cab",
    pricePerDay: 65,
    description: "Compact and efficient. Great for solo travelers or couples.",
    image: "/vehicle1.jpg",
    category: "4x4",
    features: ["Roof rack", "Tow bar"],
    specs: [
      { label: "2 Seats", value: "seats" },
      { label: "Manual", value: "transmission" },
      { label: "2 Bags", value: "luggage" },
      { label: "Diesel", value: "fuel" },
    ],
  },
  {
    name: "Toyota RAV4",
    pricePerDay: 70,
    description:
      "Versatile crossover perfect for lighter off-road adventures and city driving.",
    image: "/vehicle2.jpg",
    category: "suv",
    features: ["USB charging", "Bluetooth", "Rear camera"],
    specs: [
      { label: "5 Seats", value: "seats" },
      { label: "Automatic", value: "transmission" },
      { label: "4 Bags", value: "luggage" },
      { label: "Petrol", value: "fuel" },
    ],
  },
  {
    name: "Toyota Fortuner",
    pricePerDay: 95,
    description:
      "A powerful SUV combining comfort with serious off-road capabilities.",
    image: "/vehicle2.jpg",
    category: "suv",
    features: ["7-seater option", "USB charging", "Bluetooth"],
    specs: [
      { label: "7 Seats", value: "seats" },
      { label: "Automatic", value: "transmission" },
      { label: "5 Bags", value: "luggage" },
      { label: "Diesel", value: "fuel" },
    ],
  },
  {
    name: "Land Cruiser Safari Camper",
    pricePerDay: 180,
    description:
      "Fully equipped camping vehicle with rooftop tent, kitchen, and all gear included.",
    image: "/vehicle2.jpg",
    category: "camper",
    popular: true,
    features: ["Rooftop tent", "Kitchen setup", "Fridge", "Solar panel"],
    specs: [
      { label: "2-4 Sleeps", value: "sleeps" },
      { label: "Automatic", value: "transmission" },
      { label: "Full gear", value: "gear" },
      { label: "Diesel", value: "fuel" },
    ],
  },
  {
    name: "Hilux Expedition Camper",
    pricePerDay: 140,
    description:
      "Adventure-ready pickup with rooftop tent and camping essentials.",
    image: "/vehicle1.jpg",
    category: "camper",
    features: ["Rooftop tent", "Awning", "Cool box", "Camp chairs"],
    specs: [
      { label: "2 Sleeps", value: "sleeps" },
      { label: "Manual", value: "transmission" },
      { label: "Camp gear", value: "gear" },
      { label: "Diesel", value: "fuel" },
    ],
  },
];

const categories: { value: VehicleCategory; label: string }[] = [
  { value: "all", label: "All Vehicles" },
  { value: "4x4", label: "4x4 Trucks" },
  { value: "suv", label: "SUVs" },
  { value: "camper", label: "Camper Equipped" },
];

export function VehiclesPageContent() {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>("all");

  const filteredVehicles =
    activeCategory === "all"
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  return (
    <>
      {/* Hero header */}
      <section className="bg-espresso py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-olive">
              Our Fleet
            </p>
            <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-sand sm:text-5xl">
              Choose Your Adventure Vehicle
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sand/70">
              Tough, reliable, and equipped for the African terrain. All our
              vehicles come with comprehensive insurance and unlimited mileage.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vehicles section */}
      <section className="bg-sand py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.value
                      ? "bg-olive text-white"
                      : "bg-espresso/5 text-espresso hover:bg-espresso/10"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Vehicle cards */}
          <AnimatedSection delay={200}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVehicles.map((vehicle, index) => (
                <article
                  key={vehicle.name}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Popular badge */}
                  {vehicle.popular && (
                    <div className="absolute left-4 top-4 z-10">
                      <span className="rounded-full bg-chocolate px-3 py-1 text-xs font-semibold text-white">
                        Popular
                      </span>
                    </div>
                  )}

                  {/* Vehicle image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium capitalize text-espresso">
                        {vehicle.category === "4x4"
                          ? "4x4 Truck"
                          : vehicle.category === "suv"
                            ? "SUV"
                            : "Camper"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    {/* Name and price */}
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <h3 className="text-lg font-semibold text-espresso">
                        {vehicle.name}
                      </h3>
                      <div className="shrink-0 text-right">
                        <span className="text-xl font-bold text-chocolate">
                          ${vehicle.pricePerDay}
                        </span>
                        <span className="text-sm text-espresso/60"> /day</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm text-espresso/60">
                      {vehicle.description}
                    </p>

                    {/* Specs grid */}
                    <div className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      {vehicle.specs.map((spec) => (
                        <div
                          key={spec.value}
                          className="flex items-center gap-2 text-espresso/70"
                        >
                          <svg
                            className="h-4 w-4 text-olive"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {spec.label}
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-5 flex flex-wrap gap-2">
                      {vehicle.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-olive/10 px-2 py-1 text-xs text-olive"
                        >
                          {feature}
                        </span>
                      ))}
                      {vehicle.features.length > 3 && (
                        <span className="rounded-full bg-espresso/5 px-2 py-1 text-xs text-espresso/60">
                          +{vehicle.features.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Inquire button */}
                    <button className="mt-auto w-full rounded-full bg-olive py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-olive-soft hover:shadow-lg active:translate-y-0 active:scale-[0.98]">
                      Inquire Now
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </AnimatedSection>

          {/* What's included */}
          <AnimatedSection delay={400} className="mt-20">
            <div className="rounded-3xl border border-espresso/10 bg-card p-8 sm:p-10">
              <h2 className="text-center font-heading text-2xl font-bold text-espresso">
                What&apos;s Included with Every Rental
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Comprehensive Insurance",
                    desc: "Full coverage for peace of mind",
                  },
                  {
                    title: "Unlimited Mileage",
                    desc: "No restrictions on distance",
                  },
                  {
                    title: "24/7 Roadside Assistance",
                    desc: "Help whenever you need it",
                  },
                  {
                    title: "Free Airport Pickup",
                    desc: "Convenient delivery service",
                  },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-olive/10">
                      <svg
                        className="h-6 w-6 text-olive"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-espresso">{item.title}</h3>
                    <p className="mt-1 text-sm text-espresso/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Equipment CTA */}
          <AnimatedSection delay={500} className="mt-16 text-center">
            <p className="mb-3 text-base text-espresso/60">
              Want a full camping setup with rooftop tents and fridge?
            </p>
            <Link
              href="/equipment"
              className="link-underline inline-block text-lg font-semibold text-espresso transition-colors hover:text-chocolate"
            >
              View Equipment Options &amp; Pricing
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
