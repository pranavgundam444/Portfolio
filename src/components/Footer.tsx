import { Heart } from "lucide-react";
import { PERSONAL_INFO } from "../data/constants";
import { GithubIcon, LinkedinIcon } from "./ui/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <div className="flex items-center gap-1.5 text-muted text-sm">
            <span>© {year} {PERSONAL_INFO.name}.</span>
            <span className="hidden sm:inline">Built with</span>
            <Heart size={13} className="text-primary hidden sm:inline" />
            <span className="hidden sm:inline">React · TypeScript · Tailwind</span>
          </div>

          {/* Mobile: Built with */}
          <div className="flex items-center gap-1.5 text-muted text-xs sm:hidden">
            <span>Built with</span>
            <Heart size={12} className="text-primary" />
            <span>React · TypeScript · Tailwind</span>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-text transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
