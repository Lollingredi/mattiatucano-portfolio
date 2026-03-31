import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-32 flex flex-col items-start">
      <p className="text-[11px] font-[800] tracking-widest opacity-30 mb-6">404</p>
      <h1 className="font-[800] text-4xl text-[#333333] mb-4">Page not found</h1>
      <p className="text-sm opacity-50 mb-10 max-w-sm leading-relaxed">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[11px] font-[800] tracking-widest border border-[#333333] px-5 py-3 hover:bg-[#333333] hover:text-white transition-colors"
      >
        ← BACK TO HOME
      </Link>
    </div>
  );
}
