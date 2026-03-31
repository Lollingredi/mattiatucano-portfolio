export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] opacity-40 font-[400]">
          © {new Date().getFullYear()} Mattia Tucano. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/mattiatucano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-[800] tracking-widest opacity-40 hover:opacity-100 transition-opacity"
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.linkedin.com/in/mariam-ugolini"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-[800] tracking-widest opacity-40 hover:opacity-100 transition-opacity"
          >
            LINKEDIN
          </a>
          <a
            href="https://www.youtube.com/@MattiaTucano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-[800] tracking-widest opacity-40 hover:opacity-100 transition-opacity"
          >
            YOUTUBE
          </a>
        </div>
      </div>
    </footer>
  );
}
