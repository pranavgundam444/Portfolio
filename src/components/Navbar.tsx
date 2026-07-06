import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";
import { useActiveSection } from "../hooks/useActiveSection";
import { NAV_LINKS, PERSONAL_INFO } from "../data/constants";
import { Button } from "./ui/Button";

const SECTION_IDS = ["home", "about", "experience", "projects", "contact"];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(20);
  const activeSection = useActiveSection(SECTION_IDS);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-2.5 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.15 }}
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <span className="text-white font-bold text-sm tracking-tight">
                  {PERSONAL_INFO.initials}
                </span>
              </div>
              <span className="text-text font-semibold text-sm hidden sm:block">
                Pranav Gundam
              </span>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-3.5 py-2 text-sm rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted hover:text-text hover:bg-card"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                href={PERSONAL_INFO.resumeUrl}
                external
                icon={<Download size={14} />}
                className="hidden sm:inline-flex"
              >
                Resume
              </Button>

              <button
                id="mobile-menu-toggle"
                className="md:hidden p-2 text-muted hover:text-text rounded-lg hover:bg-card transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border shadow-2xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                        isActive
                          ? "text-primary bg-primary/10 font-medium"
                          : "text-muted hover:text-text hover:bg-border"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <div className="pt-2 pb-1">
                  <Button
                    variant="primary"
                    size="sm"
                    href={PERSONAL_INFO.resumeUrl}
                    external
                    icon={<Download size={14} />}
                    className="w-full justify-center"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
