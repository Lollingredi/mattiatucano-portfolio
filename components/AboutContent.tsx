"use client";

// NOTE: testo bio leggermente editato rispetto all'originale WordPress.
// Verificare con Mattia/Mariam se preferisce le formulazioni originali.
import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

const infoItem = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: EASE },
};

interface Props {
  cvViewUrl: string;
  cvDownloadUrl: string;
}

export default function AboutContent({ cvViewUrl, cvDownloadUrl }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Bio column */}
      <div className="space-y-6">
        <motion.div {...fadeUp(0)} className="mb-2">
          <Image
            src="/images/home/opera_senza_titolo-98-1.png"
            alt="Mattia Tucano — self portrait"
            width={120}
            height={120}
            className="rounded-full object-cover w-[120px] h-[120px]"
            priority
          />
        </motion.div>
        {[
          <>
            Hellos, and welcome to my about page. My wonderful name is{" "}
            <strong className="font-[800]">Mariam</strong>, but I&rsquo;m
            currently working under the art name{" "}
            <strong className="font-[800]">Mattia Tucano</strong>: you can
            address me comfortably with both.
          </>,
          <>
            I&rsquo;m a{" "}
            <strong className="font-[800]">storyboard artist</strong>,{" "}
            <strong className="font-[800]">revisionist</strong> and a{" "}
            <strong className="font-[800]">2D paperless animator</strong>. I was
            previously working at{" "}
            <strong className="font-[800]">Good Karma Entertainment</strong> and
            now I&rsquo;m an extremely fresh graduate from{" "}
            <strong className="font-[800]">NABA University</strong>, completing
            my BA in Animation and Cinematography.
          </>,
          <>
            When I&rsquo;m not drawing, I&rsquo;m usually either singing my
            heart out in my choir or trying my best to keep up with my scouting
            activities with the kids.
          </>,
          <>
            To contact me, shoot a message at{" "}
            <a
              href="mailto:mattiatucano@gmail.com"
              className="font-[800] underline underline-offset-4 hover:opacity-60 transition-opacity"
            >
              mattiatucano@gmail.com
            </a>
          </>,
        ].map((content, i) => (
          <motion.p
            key={i}
            {...fadeUp(i * 0.1)}
            className="text-base leading-relaxed about-bio"
          >
            {content}
          </motion.p>
        ))}

        {/* CV buttons */}
        <motion.div {...fadeUp(0.45)} className="pt-4 flex flex-wrap gap-4">
          <a
            href={cvViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#333333] text-white text-[11px] font-[800] tracking-widest hover:bg-black transition-colors"
          >
            VIEW CV
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <a
            href={cvDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#333333] text-[#333333] text-[11px] font-[800] tracking-widest hover:bg-[#333333] hover:text-white transition-colors"
          >
            DOWNLOAD PDF
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Info sidebar */}
      <div className="space-y-8 lg:border-l lg:pl-16 about-sidebar">
        {[
          {
            label: "Roles",
            content: (
              <ul className="space-y-1 text-sm">
                {["Storyboard Artist", "Revisionist", "2D Paperless Animator", "Visual Developer"].map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            ),
          },
          {
            label: "Education",
            content: (
              <p className="text-sm">
                BA in Animation and Cinematography
                <br />
                <span className="font-[800]">NABA University</span>
              </p>
            ),
          },
          {
            label: "Experience",
            content: <p className="text-sm font-[800]">Good Karma Entertainment</p>,
          },
          {
            label: "Contact",
            content: (
              <a
                href="mailto:mattiatucano@gmail.com"
                className="text-sm hover:opacity-60 transition-opacity"
              >
                mattiatucano@gmail.com
              </a>
            ),
          },
          {
            label: "Social",
            content: (
              <div className="flex flex-col gap-2 text-sm">
                <a href="https://www.instagram.com/mattia_tucan0" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                  Instagram (@mattia_tucan0)
                </a>
                <a href="https://www.linkedin.com/in/mariam-ugolini-b69878253" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                  LinkedIn (Mariam Ugolini)
                </a>
                <a href="https://www.youtube.com/@MattiaTucano" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                  YouTube (@MattiaTucano)
                </a>
              </div>
            ),
          },
        ].map(({ label, content }) => (
          <motion.div key={label} {...infoItem}>
            <h2 className="font-[800] text-[10px] tracking-widest uppercase mb-3 about-label">
              {label}
            </h2>
            {content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
