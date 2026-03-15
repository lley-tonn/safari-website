import { Metadata } from "next";
import { AboutPageContent } from "@/features/about/components/about-page";

export const metadata: Metadata = {
  title: "About Us | Game Drive East Africa",
  description:
    "Learn about Game Drive East Africa - your trusted partner for self-drive safaris across Uganda, Kenya, Tanzania, and Rwanda since 2014.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
