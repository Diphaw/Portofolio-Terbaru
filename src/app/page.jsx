import { Header } from "@/components/header";
import { Hero } from "@/components/hero"
// import { About } from "@/components/about"
  import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Skills />
      {/* <About /> */}
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
