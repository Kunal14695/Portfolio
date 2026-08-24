import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ExperienceSection } from "@/components/jack/ExperienceSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { SkillsSection } from "@/components/jack/SkillsSection";
import { FooterSection } from "@/components/jack/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Kunal Singh Tanwar | Machine Learning Developer",
      },
      {
        name: "description",
        content:
          "Kunal Singh Tanwar — AI/ML Engineer at Briskcovey Technologies, building predictive models, deep learning pipelines, and cloud-deployed AI applications.",
      },
      {
        property: "og:title",
        content:
          "Kunal Singh Tanwar | Machine Learning Developer",
      },
      {
        property: "og:description",
        content:
          "Kunal Singh Tanwar — AI/ML Engineer at Briskcovey Technologies, building predictive models, deep learning pipelines, and cloud-deployed AI applications.",
      },
    ],

    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
