import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";
import PageHeading from "@/components/PageHeading";
import { characterDesignProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Character Design",
  description: "Character design and visual development work by Mattia Tucano.",
  openGraph: {
    images: [{ url: "/images/character-design/img_1956.png" }],
  },
};

export default function CharacterDesignPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <PageHeading>Character Design</PageHeading>
      <ProjectGallery projects={characterDesignProjects} />
    </div>
  );
}
