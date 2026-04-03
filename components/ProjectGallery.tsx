"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "@/components/Lightbox";

interface GalleryImage {
  src: string;
  alt: string;
}

interface Project {
  id: string;
  title: string;
  description?: string;
  images: GalleryImage[];
  speakerDeckId?: string;
}

interface Props {
  projects: Project[];
}

const EASE = [0.25, 0.1, 0.25, 1] as const;

function ScrollableCarousel({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateFades = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const tolerance = 2;
    setShowLeft(el.scrollLeft > tolerance);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let snapTimeout: ReturnType<typeof setTimeout>;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      const tolerance = 2;
      const atStart = el.scrollLeft <= tolerance;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - tolerance;

      // Let the page scroll normally when carousel is at its limits
      if (atStart && e.deltaY < 0) return;
      if (atEnd && e.deltaY > 0) return;

      e.preventDefault();

      // Disable snap during wheel scroll so it doesn't fight
      el.style.scrollSnapType = "none";
      el.scrollLeft += e.deltaY;

      // Re-enable snap after scrolling stops (200ms debounce)
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(() => {
        el.style.scrollSnapType = "";
      }, 200);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", updateFades, { passive: true });
    updateFades();

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", updateFades);
      clearTimeout(snapTimeout);
    };
  }, [updateFades]);

  return (
    <div className="relative">
      {/* Left fade hint */}
      <div
        className={`pointer-events-none absolute left-0 top-0 bottom-2 w-16 z-10 bg-gradient-to-r from-white to-transparent transition-opacity duration-300 ${
          showLeft ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Right fade hint */}
      <div
        className={`pointer-events-none absolute right-0 top-0 bottom-2 w-16 z-10 bg-gradient-to-l from-white to-transparent transition-opacity duration-300 ${
          showRight ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
    </div>
  );
}

export default function ProjectGallery({ projects }: Props) {
  const [lightbox, setLightbox] = useState<{
    projectId: string;
    index: number;
  } | null>(null);

  const openLightbox = (projectId: string, index: number) => {
    setLightbox({ projectId, index });
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (!lightbox) return;
      const project = projects.find((p) => p.id === lightbox.projectId);
      if (!project) return;
      const next = (lightbox.index + dir + project.images.length) % project.images.length;
      setLightbox({ ...lightbox, index: next });
    },
    [lightbox, projects]
  );

  const goTo = useCallback(
    (i: number) => {
      if (!lightbox) return;
      setLightbox({ ...lightbox, index: i });
    },
    [lightbox]
  );

  const activeLightboxProject = lightbox
    ? projects.find((p) => p.id === lightbox.projectId)
    : null;

  return (
    <>
      <div className="space-y-20">
        {projects.map((project, sectionIdx) => (
          <motion.section
            key={project.id}
            className={project.title ? "" : "-mt-14"}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE, delay: sectionIdx === 0 ? 0 : 0.05 }}
          >
            {/* Project header */}
            {project.title && (
              <div className="mb-6">
                <h2 className="font-[800] text-xl text-[#333333]">{project.title}</h2>
                {project.description && (
                  <p className="mt-2 text-sm opacity-60 max-w-2xl leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>
            )}

            {/* Carousel */}
            <div>
              <ScrollableCarousel>
                {project.images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => openLightbox(project.id, idx)}
                    className="snap-start shrink-0 group relative overflow-hidden bg-neutral-100 flex items-center justify-center"
                    style={{ width: "clamp(220px, 28vw, 360px)", height: "clamp(165px, 21vw, 270px)" }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 70vw, 30vw"
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      loading={idx === 0 ? "eager" : "lazy"}
                      priority={idx === 0}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </ScrollableCarousel>

              {/* Image count */}
              {project.images.length > 1 && (
                <p className="mt-2 text-[10px] opacity-30 font-[400]">
                  {project.images.length} images · swipe or scroll to see more
                </p>
              )}
            </div>

            {/* SpeakerDeck embed */}
            {project.speakerDeckId && (
              <div className="mt-6 w-full max-w-3xl" style={{ aspectRatio: "16/10" }}>
                <iframe
                  src={`https://speakerdeck.com/player/${project.speakerDeckId}`}
                  title={`${project.title} — Full deck`}
                  allowFullScreen
                  className="w-full h-full border-0 rounded"
                  loading="lazy"
                />
              </div>
            )}
          </motion.section>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={activeLightboxProject?.images ?? []}
        index={lightbox ? lightbox.index : null}
        onClose={closeLightbox}
        onNavigate={navigate}
        goTo={goTo}
      />
    </>
  );
}
