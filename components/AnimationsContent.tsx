"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function AnimationsContent() {
  return (
    <div className="space-y-12">
      {/* First video — no title, directly under page heading */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
      >
        <div
          className="relative w-full max-w-4xl bg-neutral-100"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            src="https://www.youtube.com/embed/IiWrKUBsQCM"
            title="2D Animation reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </motion.div>

      {/* Second video — with subtitle */}
      <motion.section
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
      >
        <h2 className="font-[800] text-xl text-[#333333] dark:text-[#e5e5e5] mb-2">
          Animation trial for thesis film.
        </h2>
        <div
          className="relative w-full max-w-4xl bg-neutral-100 mt-4"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            src="https://www.youtube.com/embed/ue4K5ytAxco"
            title="Animation trial for thesis film"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </motion.section>
    </div>
  );
}
