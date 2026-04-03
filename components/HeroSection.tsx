"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 pt-24 pb-16">
      {/* Name */}
      <div className="overflow-hidden">
        <motion.h1
          initial="hidden"
          animate="show"
          custom={0}
          variants={fade}
          className="font-[800] text-[clamp(3rem,10vw,8rem)] leading-[0.9] tracking-tight text-[#333333]"
        >
          Mattia{" "}
          <br />
          Tucano
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.p
        initial="hidden"
        animate="show"
        custom={0.25}
        variants={fade}
        className="mt-8 text-sm font-[400] opacity-50 tracking-widest uppercase"
      >
        Storyboards — Vis Developer — Animator
      </motion.p>

      {/* CTA */}
      <motion.div
        initial="hidden"
        animate="show"
        custom={0.45}
        variants={fade}
        className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
      >
        <p className="text-sm font-[800] text-[#333333]">
          Currently available for freelancing positions or internships.
        </p>
        <a
          href="mailto:mattiatucano@gmail.com"
          className="text-sm font-[400] opacity-60 hover:opacity-100 transition-opacity underline underline-offset-4"
        >
          mattiatucano@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
