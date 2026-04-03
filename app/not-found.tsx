import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-24 sm:py-32 flex flex-col items-center text-center">
      {/* Illustrated 404 */}
      <div className="mb-8 opacity-15 select-none">
        <svg width="200" height="140" viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="100" y="90" textAnchor="middle" fontSize="100" fontWeight="800" fill="currentColor">
            404
          </text>
          {/* Pencil doodle */}
          <path d="M30 120 Q50 100 70 115 Q90 130 110 110 Q130 90 150 105 Q170 120 180 108" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <p className="text-[11px] font-[800] tracking-widest opacity-30 mb-4">
        PAGE NOT FOUND
      </p>
      <h1 className="font-[800] text-3xl sm:text-4xl text-[#333333] mb-4">
        Oops, nothing here!
      </h1>
      <p className="text-sm opacity-50 mb-10 max-w-md leading-relaxed">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        Let&rsquo;s get you back to the portfolio.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[11px] font-[800] tracking-widest border border-[#333333] px-5 py-3 hover:bg-[#333333] hover:text-white transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        BACK TO HOME
      </Link>
    </div>
  );
}
