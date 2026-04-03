import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import AnimationsContent from "@/components/AnimationsContent";

export const metadata: Metadata = {
  title: "2D Animations",
  description:
    "2D animation work by Mattia Tucano, including the animation trial for her thesis film The Next Stop.",
  openGraph: {
    images: [{ url: "/images/home/opera_senza_titolo-98-1.png" }],
  },
};

export default function AnimationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <PageHeading>2D Animations</PageHeading>
      <AnimationsContent />
    </div>
  );
}
