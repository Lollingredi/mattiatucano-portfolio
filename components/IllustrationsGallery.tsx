"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "@/components/Lightbox";
import { illustrationImages } from "@/lib/content";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function IllustrationsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = useCallback(() => setLightboxIndex(null), []);
  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIndex === null) return;
      setLightboxIndex(
        (lightboxIndex + dir + illustrationImages.length) % illustrationImages.length
      );
    },
    [lightboxIndex]
  );

  const goTo = useCallback((i: number) => setLightboxIndex(i), []);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {illustrationImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="break-inside-avoid mb-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: EASE, delay: (idx % 3) * 0.07 }}
          >
            <button
              onClick={() => open(idx)}
              className="group relative w-full overflow-hidden bg-neutral-100 block"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                loading={idx < 3 ? "eager" : "lazy"}
                priority={idx < 2}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      <Lightbox
        images={illustrationImages}
        index={lightboxIndex}
        onClose={close}
        onNavigate={navigate}
        goTo={goTo}
      />
    </>
  );
}
