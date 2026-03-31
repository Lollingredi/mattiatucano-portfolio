"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { homeShowcase } from "@/lib/content";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE,
      delay: 0.55 + i * 0.08,
    },
  }),
};

export default function ShowcaseGrid() {
  return (
    <section className="max-w-7xl mx-auto px-5 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {homeShowcase.map((item, i) => (
          <motion.div
            key={item.href}
            initial="hidden"
            animate="show"
            custom={i}
            variants={cardVariants}
          >
            <Link
              href={item.href}
              prefetch={true}
              className="group relative overflow-hidden bg-neutral-50 block"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={i < 2}
                loading={i < 2 ? "eager" : "lazy"}
              />
              {/* Label overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <span className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full px-4 py-3 text-white text-[11px] font-[800] tracking-widest bg-black/50">
                  {item.label}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
