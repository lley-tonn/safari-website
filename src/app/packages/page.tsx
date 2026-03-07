import { ContactSection } from "@/features/home/components/contact";
import { GallerySection } from "@/features/home/components/gallery";
import { PackagesSection } from "@/features/home/components/packages";
import { TestimonialsSection } from "@/features/home/components/testimonials";

export default function PackagesPage() {
  return (
    <>
      <PackagesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

