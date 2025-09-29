import { Card } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      period: "Februari 2025 — Mei 2025",
      title: "Frontend Developer (Full Time)",
      company: "Reddy",
      description:
        "Build and maintain critical components used to construct TechCorp's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      technologies: ["Javascript", "Nextjs", "HTML", "CSS", "TailwindCSS"],
    },
    {
      period: "September 2025 — Januari 2025",
      title: "Frontend Developer (Internship)",
      company: "PT Rapier Technology International",
      description:
        "Developed and maintained the company's main web application using React and Node.js. Collaborated with the design team to implement pixel-perfect UI components and improved application performance by 40%.",
      technologies: ["Javascript", "Nextjs", "HTML", "CSS", "TailwindCSS"],
    },
    // {
    //   period: "2020 — 2022",
    //   title: "Junior Web Developer",
    //   company: "Digital Agency",
    //   description:
    //     "Built responsive websites and web applications for various clients. Gained experience in multiple frameworks and content management systems while working in an agile development environment.",
    //   technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"],
    // },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-teal-500"></div>
              <h2 className="text-sm uppercase tracking-wider text-teal-500 font-medium">
                Experience
              </h2>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Pengalaman Saya
            </h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-teal-500/50 transition-colors"
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <p className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </p>
                  </div>

                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h4>
                      <p className="text-teal-500 font-medium">{exp.company}</p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-teal-500/10 text-teal-500 rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
