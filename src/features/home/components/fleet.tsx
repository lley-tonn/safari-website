import { Button } from "@/components/ui/button";

type Vehicle = {
  name: string;
  pricePerDay: string;
  specs: { label: string; value: string }[];
};

const vehicles: Vehicle[] = [
  {
    name: "Toyota Hilux Double Cab",
    pricePerDay: "$85 /day",
    specs: [
      { label: "Transmission", value: "Auto" },
      { label: "Fuel", value: "Diesel" },
      { label: "Seats", value: "5" },
      { label: "4WD", value: "Yes" },
    ],
  },
  {
    name: "Toyota Hilux Double Cab",
    pricePerDay: "$85 /day",
    specs: [
      { label: "Transmission", value: "Auto" },
      { label: "Fuel", value: "Diesel" },
      { label: "Seats", value: "5" },
      { label: "4WD", value: "Yes" },
    ],
  },
  {
    name: "Toyota Hilux Double Cab",
    pricePerDay: "$85 /day",
    specs: [
      { label: "Transmission", value: "Auto" },
      { label: "Fuel", value: "Diesel" },
      { label: "Seats", value: "5" },
      { label: "4WD", value: "Yes" },
    ],
  },
  {
    name: "Toyota Hilux Double Cab",
    pricePerDay: "$85 /day",
    specs: [
      { label: "Transmission", value: "Auto" },
      { label: "Fuel", value: "Diesel" },
      { label: "Seats", value: "5" },
      { label: "4WD", value: "Yes" },
    ],
  },
];

export function FleetSection() {
  return (
    <section id="vehicles" className="bg-sand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-olive">
            Our Vehicles
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Choose Your Adventure Vehicle
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-6 text-foreground/70">
            Tough, reliable, and equipped for the African terrain. All our vehicles
            come with comprehensive insurance and unlimited mileage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle, index) => (
            <article
              key={index}
              className="flex flex-col overflow-hidden rounded-[16px] bg-card shadow-lg shadow-black/5 ring-1 ring-black/5"
            >
              {/* Vehicle image placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-sand-soft to-sand">
                <div className="absolute inset-0 flex items-center justify-center text-foreground/30 text-xs">
                  Vehicle image
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {vehicle.name}
                  </h3>
                  <span className="shrink-0 text-sm font-semibold text-olive">
                    {vehicle.pricePerDay}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                  {vehicle.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between">
                      <span className="text-foreground/60">{spec.label}</span>
                      <span className="text-foreground/80">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-2 border-t border-black/5">
                  <Button size="sm" variant="secondary" className="w-full text-xs">
                    Inquire Now
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-foreground/70 mb-4">
            Want a full camping setup with rooftop tents and fridge?
          </p>
          <Button variant="secondary" size="md">
            View Equipment Options & Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}

