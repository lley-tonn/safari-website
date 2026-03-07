import { ContactSection } from "@/features/home/components/contact";
import { FleetSection } from "@/features/home/components/fleet";
import { FaqSection } from "@/features/home/components/faq";
import { TestimonialsSection } from "@/features/home/components/testimonials";

export default function VehiclesPage() {
  return (
    <>
      <FleetSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

