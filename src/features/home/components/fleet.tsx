import Image from "next/image";
import Link from "next/link";

type Vehicle = {
  name: string;
  pricePerDay: number;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
};

const vehicles: Vehicle[] = [
  {
    name: "Toyota Hilux Double Cab",
    pricePerDay: 85,
    description: "The ultimate workhorse. Perfect for rough terrains and national parks.",
    image: "/vehicle1.jpg",
    specs: [
      { label: "4-5 Seats", value: "seats" },
      { label: "Manual", value: "transmission" },
      { label: "4 Bags", value: "luggage" },
      { label: "A/C", value: "ac" },
    ],
  },
  {
    name: "Toyota Land Cruiser",
    pricePerDay: 120,
    description: "Premium comfort meets rugged capability. Ideal for long safari adventures.",
    image: "/vehicle2.jpg",
    specs: [
      { label: "5-7 Seats", value: "seats" },
      { label: "Automatic", value: "transmission" },
      { label: "6 Bags", value: "luggage" },
      { label: "A/C", value: "ac" },
    ],
  },
  {
    name: "Toyota Hilux Single Cab",
    pricePerDay: 65,
    description: "Compact and efficient. Great for solo travelers or couples.",
    image: "/vehicle1.jpg",
    specs: [
      { label: "2-3 Seats", value: "seats" },
      { label: "Manual", value: "transmission" },
      { label: "2 Bags", value: "luggage" },
      { label: "A/C", value: "ac" },
    ],
  },
];

export function FleetSection() {
  return (
    <section id="fleet" className="bg-sand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-olive">
            Our Vehicles
          </p>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
            Choose Your Adventure Vehicle
          </h2>
          <p className="mx-auto max-w-2xl text-base text-espresso/60">
            Tough, reliable, and equipped for the African terrain. All our vehicles
            come with comprehensive insurance and unlimited mileage.
          </p>
        </div>

        {/* Vehicle cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle, index) => (
            <article
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-lg shadow-black/5"
            >
              {/* Vehicle image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                {/* Name and price */}
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-espresso">
                    {vehicle.name}
                  </h3>
                  <div className="shrink-0 text-right">
                    <span className="text-lg font-bold text-chocolate">
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
                <div className="mb-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  {vehicle.specs.map((spec) => (
                    <div key={spec.value} className="text-espresso/70">
                      {spec.label}
                    </div>
                  ))}
                </div>

                {/* Inquire button */}
                <button className="mt-auto w-full rounded-full bg-olive py-3 text-sm font-medium text-white transition-colors hover:bg-olive-soft">
                  Inquire Now
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Equipment CTA */}
        <div className="mt-14 text-center">
          <p className="mb-3 text-base text-espresso/60">
            Want a full camping setup with rooftop tents and fridge?
          </p>
          <Link
            href="/equipment"
            className="inline-block text-lg font-semibold text-espresso underline decoration-espresso/30 underline-offset-4 transition-colors hover:decoration-espresso"
          >
            View Equipment Options &amp; Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
