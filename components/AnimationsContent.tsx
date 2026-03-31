"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

interface VideoItem {
  title: string;
  description: string;
  youtubeId: string | null; // null = placeholder, string = real ID
}

const videos: VideoItem[] = [
  {
    title: "Animation trial for thesis film",
    description:
      "A 2D paperless animation trial created for The Next Stop, the thesis short film. Animated frame-by-frame in a paperless pipeline.",
    youtubeId: null, // TODO: replace with real YouTube video ID (e.g. "dQw4w9WgXcQ")
  },
];

export default function AnimationsContent() {
  return (
    <div className="space-y-20">
      {videos.map((video, i) => (
        <motion.section
          key={i}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.15 }}
        >
          <h2 className="font-[800] text-xl text-[#333333] mb-2">{video.title}</h2>
          <p className="text-sm opacity-60 max-w-2xl leading-relaxed mb-6">
            {video.description}
          </p>

          <div
            className="relative w-full max-w-3xl bg-neutral-100"
            style={{ aspectRatio: "16/9" }}
          >
            {video.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              /* Placeholder until real URL is added */
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
                <div className="w-12 h-12 rounded-full border-2 border-[#333]/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" className="opacity-30 translate-x-0.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="text-xs opacity-30 max-w-xs">
                  Video coming soon — add the YouTube ID to{" "}
                  <code className="font-mono">components/AnimationsContent.tsx</code>
                </p>
              </div>
            )}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
