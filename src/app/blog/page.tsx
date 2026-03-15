import { Metadata } from "next";
import { BlogListing } from "@/features/blog/components/blog-listing";
import { ContactSection } from "@/features/home/components/contact";

export const metadata: Metadata = {
  title: "Blog | Game Drive East Africa",
  description:
    "Expert safari advice, destination guides, and inspiring stories from the African wilderness. Plan your East Africa adventure with our travel tips.",
};

export default function BlogPage() {
  return (
    <>
      <BlogListing />
      <ContactSection />
    </>
  );
}
