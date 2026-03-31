import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import PageHeading from "@/components/PageHeading";
import { storyboardProjects } from "@/lib/content";

// NOTE: Mad Scientist è incluso in storyboardProjects con la sua immagine —
// non serve una sezione separata hardcoded.

export const metadata: Metadata = {
  title: "Storyboards",
  description:
    "Storyboard projects by Mattia Tucano, including The Next Stop and Ulysses and Polyphemus.",
};

export default function StoryboardsPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <PageHeading>Storyboards</PageHeading>
      <ProjectGallery projects={storyboardProjects} />
    </div>
  );
}
