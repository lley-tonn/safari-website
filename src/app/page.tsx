import { AboutSection } from "@/features/home/components/about";
import { ContactSection } from "@/features/home/components/contact";
import { FaqSection } from "@/features/home/components/faq";
import { FleetSection } from "@/features/home/components/fleet";
import { GallerySection } from "@/features/home/components/gallery";
import { HeroSection } from "@/features/home/components/hero";
import { PackagesSection } from "@/features/home/components/packages";
import { TestimonialsSection } from "@/features/home/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FleetSection />
      <PackagesSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

