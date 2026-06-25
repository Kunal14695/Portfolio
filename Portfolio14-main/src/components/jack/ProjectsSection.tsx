import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";

const projectRoadTrip =
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80&auto=format&fit=crop";
const projectTextSummary =
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&q=80&auto=format&fit=crop";
const projectFakeNews =
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=900&q=80&auto=format&fit=crop";

interface Project {
  n: string;
  category: string;
  name: string;
  image: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    category: "AI / Full-Stack",
    name: "RoadBuddy — AI Road Trip Planner",
    image: projectRoadTrip,
    link: "https://roadbuddy-backend-shp4.onrender.com/login",
  },
  {
    n: "02",
    category: "Machine Learning",
    name: "Text Summarization API",
    image: projectTextSummary,
    link: "https://github.com/Kunal14695/Text-Summerizer-project",
  },
  {
    n: "03",
    category: "Machine Learning",
    name: "Fake News Detection",
    image: projectFakeNews,
    link: "https://github.com/Kunal14695/Fake-News-Detection",
  },
];

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;

  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale]
  );

  return (
    <div
      className="sticky"
      style={{ top: `calc(var(--card-top-offset) + ${index} * var(--card-gap))` }}
    >
      <motion.div
        style={{ scale }}
        className="
          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
          border border-white/10
          bg-[#0C0C0C]/95
          backdrop-blur-xl
          p-4 sm:p-6 md:p-8
          shadow-[0_0_60px_rgba(255,255,255,0.03)]
          transition-all duration-300
          hover:border-white/20
        "
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 md:mb-8 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <div
              className="hero-heading font-black text-white/15"
              style={{
                fontSize: "clamp(3rem, 10vw, 140px)",
                lineHeight: 1,
              }}
            >
              {project.n}
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-white/50 uppercase tracking-[0.25em] text-xs sm:text-sm">
                {project.category}
              </span>

              <span
                className="text-white font-medium uppercase"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.75rem)",
                }}
              >
                {project.name}
              </span>
            </div>
          </div>

          <LiveProjectButton href={project.link} />
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Left */}
          <div className="hidden md:flex md:col-span-2 flex-col gap-4">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="
                w-full object-cover
                rounded-[30px]
                border border-white/10
                hover:scale-[1.02]
                transition-all duration-300
              "
              style={{
                height: "clamp(140px,18vw,240px)",
              }}
            />

            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="
                w-full object-cover
                rounded-[30px]
                border border-white/10
                hover:scale-[1.02]
                transition-all duration-300
              "
              style={{
                height: "clamp(180px,24vw,320px)",
              }}
            />
          </div>

          {/* Main Image */}
          <div className="md:col-span-3 h-48 sm:h-64 md:h-auto">
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="
                w-full h-full object-cover
                rounded-[25px] sm:rounded-[35px] md:rounded-[45px]
                border border-white/10
                hover:scale-[1.01]
                transition-all duration-300
              "
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="projects"
      ref={containerRef}
      className="
        px-5 sm:px-8 md:px-10
        py-20 sm:py-24 md:py-32
        bg-[#0C0C0C]
      "
    >
      <FadeIn
        y={40}
        className="text-center mb-16 sm:mb-20 md:mb-28"
      >
        <h2
          className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight
            text-white
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div
            key={project.n}
            className="h-[60vh] sm:h-[85vh]"
          >
            <ProjectCard
              project={project}
              index={index}
              total={PROJECTS.length}
              progress={scrollYProgress}
            />
          </div>
        ))}
      </div>
    </section>
  );
}