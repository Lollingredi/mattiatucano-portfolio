import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import PageHeading from "@/components/PageHeading";
import { backgroundProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Backgrounds",
  description: "Background paintings and studies by Mattia Tucano.",
};

export default function BackgroundsPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <PageHeading>Backgrounds</PageHeading>
      <ProjectGallery projects={backgroundProjects} />
    </div>
  );
}
