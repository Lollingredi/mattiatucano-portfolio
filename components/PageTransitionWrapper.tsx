"use client";

import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Scroll to top on route change (not on initial load)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.3, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
