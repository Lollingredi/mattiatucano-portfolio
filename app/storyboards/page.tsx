import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import PageHeading from "@/components/PageHeading";
import { storyboardProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Storyboards",
  description:
    "Storyboard projects by Mattia Tucano, including The Next Stop and Ulysses and Polyphemus.",
  openGraph: {
    images: [{ url: "/images/storyboards/screenshot-2025-05-07-alle-13.57.06.png" }],
  },
};

export default function StoryboardsPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <PageHeading>Storyboards</PageHeading>
      <ProjectGallery projects={storyboardProjects} />
    </div>
  );
}
