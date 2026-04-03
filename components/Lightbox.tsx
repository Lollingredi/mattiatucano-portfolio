"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxImage {
  src: string;
  alt: string;
}

interface Props {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onNavigate: (dir: 1 | -1) => void;
  goTo: (i: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate, goTo }: Props) {
  const isOpen = index !== null;
  const total = images.length;
  const current = index ?? 0;
  const image = isOpen ? images[current] : null;
  const containerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate(-1);
      if (e.key === "ArrowRight") onNavigate(1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose, onNavigate]);

  // Lock scroll when open (both body and documentElement for iOS)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;
    const container = containerRef.current;
    const focusableSelector = 'button, [href], [tabindex]:not([tabindex="-1"])';

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = container.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    container.addEventListener("keydown", handleTab);
    return () => container.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  const stopProp = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

  return (
    <AnimatePresence>
      {isOpen && image && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/92 flex flex-col items-center justify-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-4 z-10">
            <span className="text-white/40 text-xs tabular-nums">
              {current + 1} / {total}
            </span>
            <button
              onClick={onClose}
              autoFocus
              className="text-white/60 hover:text-white transition-colors p-2 -mr-1"
              aria-label="Close (Esc)"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Image — responsive horizontal padding to clear the arrows */}
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-5xl px-12 sm:px-16"
            style={{ maxHeight: "78vh", height: "78vh" }}
            onClick={stopProp}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 90vw"
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Dot indicators (≤ 16 images) */}
          {total > 1 && total <= 16 && (
            <div
              className="absolute bottom-5 flex items-center gap-[7px]"
              onClick={stopProp}
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`rounded-full transition-all duration-200 p-2 ${
                    i === current
                      ? "bg-transparent"
                      : "bg-transparent"
                  }`}
                >
                  <span className={`block rounded-full transition-all duration-200 ${
                    i === current
                      ? "w-4 h-[3px] bg-white"
                      : "w-[3px] h-[3px] bg-white/35 hover:bg-white/70"
                  }`} />
                </button>
              ))}
            </div>
          )}

          {/* Prev / Next — larger touch area on mobile */}
          {total > 1 && (
            <>
              <button
                onClick={(e) => { stopProp(e); onNavigate(-1); }}
                className="absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 sm:p-3"
                aria-label="Previous image (←)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={(e) => { stopProp(e); onNavigate(1); }}
                className="absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-4 sm:p-3"
                aria-label="Next image (→)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          {/* Keyboard hint — desktop only */}
          <p className="absolute bottom-5 right-4 text-white/20 text-[10px] hidden md:block">
            ← → navigate · Esc close
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
