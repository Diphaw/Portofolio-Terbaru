"use client";

import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground text-balance">
                Dipha Wiguna
              </h1>
              <h2 className="text-xl lg:text-2xl font-medium text-teal-500">
                Frontend Web Developer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Fresh Graduate D3-Teknik Informatika Politeknik Negeri Semarang yang 
                memiliki passion Frontend Web Developer dan memiliki semangat belajar yang tinggi
              </p>
            </div>

            {/* <div className="flex items-center gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-border text-foreground hover:bg-secondary"
              >
                Get In Touch
              </Button>
            </div> */}

            <div className="flex items-center gap-6 pt-4 ">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl absolute -top-10 -left-10"></div>
              <div className="relative bg-card border border-border rounded-lg p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="font-mono text-sm text-muted-foreground">
                    <div>{"const developer = {"}</div>
                    <div className="ml-4">{'name: "Dipha Wiguna",'}</div>
                    <div className="ml-4">
                      {'skills: ["HTML", "CSS", "Javascript", "TailwindCSS", "Nextjs"],'}
                    </div>
                    <div className="ml-4">{'passion: "Frontend Web Developer"'}</div>
                    <div>{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
