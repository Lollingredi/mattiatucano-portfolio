import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Me — Mattia Tucano",
  description:
    "Mariam (art name Mattia Tucano) is a storyboard artist, revisionist and 2D paperless animator. BA from NABA University.",
};

// TODO: replace these with the real Google Drive links
const CV_VIEW_URL = "https://drive.google.com/drive/folders/your-cv-link";
const CV_DOWNLOAD_URL = "https://drive.google.com/your-cv-pdf";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-16">
      <PageHeading>About Me</PageHeading>
      <AboutContent cvViewUrl={CV_VIEW_URL} cvDownloadUrl={CV_DOWNLOAD_URL} />
    </div>
  );
}
