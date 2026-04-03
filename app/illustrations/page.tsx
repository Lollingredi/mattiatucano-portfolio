import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import IllustrationsGallery from "@/components/IllustrationsGallery";

export const metadata: Metadata = {
  title: "Illustrations",
  description: "Illustrations by Mattia Tucano.",
  openGraph: {
    images: [{ url: "/images/illustrations/img_2806.png" }],
  },
};

export default function IllustrationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <PageHeading>Illustrations</PageHeading>
      <IllustrationsGallery />
    </div>
  );
}
