import { Metadata } from "next";
import { GalleryPageContent } from "@/features/gallery/components/gallery-page";

export const metadata: Metadata = {
  title: "Gallery | Game Drive East Africa",
  description:
    "Explore stunning moments captured during our safaris across East Africa. From majestic wildlife to breathtaking landscapes.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}
