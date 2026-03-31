import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Mariam (art name Mattia Tucano) is a storyboard artist, revisionist and 2D paperless animator. BA from NABA University.",
};

const CV_VIEW_URL = "https://drive.google.com/file/d/1Yf_iutiNi2lwzK3XL4ZZHZMi7bS4HMFE/view?usp=sharing";
const CV_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1Yf_iutiNi2lwzK3XL4ZZHZMi7bS4HMFE";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <PageHeading>About Me</PageHeading>
      <AboutContent cvViewUrl={CV_VIEW_URL} cvDownloadUrl={CV_DOWNLOAD_URL} />
    </div>
  );
}
