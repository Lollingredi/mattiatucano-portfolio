import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import BackgroundsContent from "@/components/BackgroundsContent";

export const metadata: Metadata = {
  title: "Backgrounds",
  description: "Background paintings and studies by Mattia Tucano.",
};

export default function BackgroundsPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <PageHeading>Backgrounds</PageHeading>
      <BackgroundsContent />
    </div>
  );
}
