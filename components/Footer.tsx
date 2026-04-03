import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <p className="text-[11px] opacity-40 font-[400]">
            © {new Date().getFullYear()} Mattia Tucano. All rights reserved.
          </p>
          <span className="text-[11px] opacity-30 font-[400]">
            Sito realizzato da{" "}
            <a
              href="https://rediverse.cc/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity underline underline-offset-2"
            >
              Redi Bako
            </a>
          </span>
        </div>
        <div className="flex items-center gap-6 pt-4 sm:pt-0 border-t sm:border-t-0 border-neutral-100 w-full sm:w-auto justify-center sm:justify-start">
          <a
            href="https://www.instagram.com/mattia_tucan0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-[800] tracking-widest opacity-40 hover:opacity-100 transition-opacity"
          >
            INSTAGRAM
          </a>
          <a
            href="https://www.linkedin.com/in/mariam-ugolini-b69878253"
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
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
