"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "@/components/Lightbox";

const EASE = [0.25, 0.1, 0.25, 1] as const;

// All background images in order, for lightbox navigation
const allImages = [
  { src: "/images/backgrounds/img_3476-1.jpg", alt: "Tent study" },
  { src: "/images/backgrounds/img_0206.jpg", alt: "Background study 1" },
  { src: "/images/backgrounds/img_0207-1.jpg", alt: "Background study 2" },
  { src: "/images/backgrounds/img_0208.jpg", alt: "Background study 3" },
  { src: "/images/backgrounds/img_3465.jpg", alt: "Background study 4" },
  { src: "/images/backgrounds/img_3466-1.jpg", alt: "Background study 5" },
  { src: "/images/backgrounds/img_1568.jpg", alt: "Background study 6" },
  { src: "/images/backgrounds/img_2402.png", alt: "Background study 7" },
];

export default function BackgroundsContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const close = useCallback(() => setLightboxIndex(null), []);
  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIndex === null) return;
      setLightboxIndex((lightboxIndex + dir + allImages.length) % allImages.length);
    },
    [lightboxIndex]
  );
  const goTo = useCallback((i: number) => setLightboxIndex(i), []);

  const ImageButton = ({ globalIndex, className = "" }: { globalIndex: number; className?: string }) => (
    <motion.button
      onClick={() => setLightboxIndex(globalIndex)}
      className={`group relative overflow-hidden bg-neutral-100 block w-full ${className}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={allImages[globalIndex].src}
        alt={allImages[globalIndex].alt}
        width={1200}
        height={800}
        sizes="(max-width: 768px) 100vw, 80vw"
        className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
        loading={globalIndex < 2 ? "eager" : "lazy"}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>
      </div>
    </motion.button>
  );

  return (
    <>
      <div className="space-y-6">
        {/* Tent Study — standalone hero image */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <h2 className="font-[800] text-xl text-[#333333] mb-4">Tent Study</h2>
          <ImageButton globalIndex={0} />
        </motion.section>

        {/* Group 1: 3 images side by side */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
        >
          <ImageButton globalIndex={1} />
          <ImageButton globalIndex={2} />
          <ImageButton globalIndex={3} />
        </motion.div>

        {/* Group 2: 2 images side by side */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
        >
          <ImageButton globalIndex={4} />
          <ImageButton globalIndex={5} />
        </motion.div>

        {/* Solo images */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
        >
          <ImageButton globalIndex={6} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
        >
          <ImageButton globalIndex={7} />
        </motion.div>
      </div>

      <Lightbox
        images={allImages}
        index={lightboxIndex}
        onClose={close}
        onNavigate={navigate}
        goTo={goTo}
      />
    </>
  );
}
