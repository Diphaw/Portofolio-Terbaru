import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Projects() {
  const projects = [
    {
      title: "Sistem Informasi Manajemen Masjid Untuk Optimalisasi Administrasi dan Transparansi Keuangan",
      description:
        "A full-stack e-commerce solution built with Next.js and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["HTML", "CSS", "Javascript", "TailwindCSS", "Nextjs"],
      liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    },
    {
      title: "Sosial Media berbasis Kampus",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Socket.io.",
      image: "/task-management-dashboard.png",
      technologies: ["HTML", "CSS", "Javascript", "TailwindCSS", "Nextjs"],
      liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    },
    {
      title: "Content Management System dan Landing Page Rapier Technology International",
      description:
        "A responsive weather application that provides current weather conditions and forecasts. Features location-based weather data and interactive charts.",
      image: "/preview/project4.png",
      technologies: ["HTML", "CSS", "Javascript", "TailwindCSS", "Nextjs"],
      liveUrl: "https://example.com",
    //   githubUrl: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-teal-500"></div>
              <h2 className="text-sm uppercase tracking-wider text-teal-500 font-medium">
                Projects
              </h2>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Semua project saya
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-teal-500/50 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-teal-500/10 text-teal-500 rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    {/* <Button
                      size="sm"
                      variant="outline"
                      className="border-border text-foreground hover:bg-secondary bg-transparent"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button> */}
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
