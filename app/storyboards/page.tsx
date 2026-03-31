import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import PageHeading from "@/components/PageHeading";
import { storyboardProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Storyboards — Mattia Tucano",
  description:
    "Storyboard projects by Mattia Tucano, including The Next Stop and Ulysses and Polyphemus.",
};

export default function StoryboardsPage() {
  const projects = storyboardProjects.filter((p) => p.images.length > 0);

  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <PageHeading>Storyboards</PageHeading>
      <ProjectGallery projects={projects} />

      {/* Mad Scientist — text only (no images available) */}
      <section className="mt-20">
        <h2 className="font-[800] text-xl text-[#333333]">Mad Scientist (Comedy)</h2>
        <p className="mt-2 text-sm opacity-60 max-w-2xl leading-relaxed">
          A short gag including a small but smart kitty and a dangerous invention.
        </p>
      </section>
    </div>
  );
}
