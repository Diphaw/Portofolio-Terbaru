"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      firstMobileLinkRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const root = document.documentElement;
    const prev = root.style.overflow;
    if (isMenuOpen) {
      root.style.overflow = "hidden";
    }
    return () => {
      root.style.overflow = prev;
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-foreground">Portfolio</div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              type="button"
              onClick={() => scrollToSection("skills")}
              className="text-muted-foreground hover:text-teal-500 transition-colors"
            >
              Skills
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("experience")}
              className="text-muted-foreground hover:text-teal-500 transition-colors"
            >
              Experience
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="text-muted-foreground hover:text-teal-500 transition-colors"
            >
              Projects
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-teal-500 text-black hover:bg-teal-500/90"
            >
              Contact
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-haspopup="menu"
            onClick={() => setIsMenuOpen((v) => !v)}
            ref={menuButtonRef}
          >
            {!isMenuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
          </button>
        </div>

        {isMenuOpen && (
          <div
            className="fixed inset-0 z-[60] md:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-background/70 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            <div
              id="mobile-menu"
              className={`relative bg-background border-b border-border shadow-lg transform transition-all duration-200 ease-out motion-reduce:transition-none`}
            >
              <div className="px-6 py-4 flex items-center justify-between">
                <h2
                  id="mobile-menu-title"
                  className="text-xl font-bold text-foreground"
                >
                  Portfolio
                </h2>
                <button
                  className="inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 6l12 12M18 6l-12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <nav className="px-6 pb-6 flex flex-col space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    scrollToSection("skills");
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-base font-medium text-foreground hover:text-teal-500 hover:bg-muted/50 rounded-md px-3 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Skills
                </button>
                <button
                  type="button"
                  onClick={() => {
                    scrollToSection("experience");
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-base font-medium text-foreground hover:text-teal-500 hover:bg-muted/50 rounded-md px-3 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Experience
                </button>
                <button
                  type="button"
                  onClick={() => {
                    scrollToSection("projects");
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-base font-medium text-foreground hover:text-teal-500 hover:bg-muted/50 rounded-md px-3 py-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Projects
                </button>
                <Button
                  onClick={() => {
                    scrollToSection("contact");
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-teal-500 text-black hover:bg-teal-500/90 mt-2"
                >
                  Contact
                </Button>
              </nav>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
