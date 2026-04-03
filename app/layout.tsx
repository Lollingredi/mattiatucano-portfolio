import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "800"],
  display: "swap",
  preload: true,
});

const BASE_URL = "https://mattiatucano.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mattia Tucano — Storyboard Artist & Animator",
    template: "%s — Mattia Tucano",
  },
  description:
    "Portfolio of Mattia Tucano (Mariam Ugolini) — Storyboard artist, revisionist and 2D paperless animator. BA in Animation and Cinematography from NABA University.",
  keywords: [
    "storyboard artist",
    "2D animator",
    "character design",
    "visual development",
    "animation portfolio",
    "Mattia Tucano",
    "Mariam Ugolini",
    "NABA",
  ],
  authors: [{ name: "Mattia Tucano", url: BASE_URL }],
  creator: "Mattia Tucano",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Mattia Tucano",
    title: "Mattia Tucano — Storyboard Artist & Animator",
    description:
      "Portfolio of Mattia Tucano — Storyboard artist, revisionist and 2D paperless animator.",
    images: [
      {
        url: "/images/home/opera_senza_titolo-98-1.png",
        width: 1200,
        height: 630,
        alt: "Mattia Tucano — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mattia Tucano — Storyboard Artist & Animator",
    description:
      "Portfolio of Mattia Tucano — Storyboard artist, revisionist and 2D paperless animator.",
    images: ["/images/home/opera_senza_titolo-98-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} h-full`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col text-[#333333] bg-white">
        <Header />
        <main className="flex-1">
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
