import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

import {
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiHuggingface,
  SiDocker,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiSqlalchemy,
  SiJsonwebtokens,
  SiBootstrap,
  SiGithubactions,
  SiGooglecloud,
  SiC,
  SiGooglegemini,
  SiRender,
} from "react-icons/si";

const row1 = [
  { Icon: FaPython, name: "Python", color: "#3776AB" },
  { Icon: SiC, name: "C", color: "#A8B9CC" },
  { Icon: FaDatabase, name: "DSA", color: "#FFFFFF" },
  { Icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { Icon: SiKeras, name: "Keras", color: "#D00000" },
  { Icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
  { Icon: SiHuggingface, name: "Hugging Face", color: "#FFD21E" },
  { Icon: SiGooglegemini, name: "Gemini API", color: "#8E75B2" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiGithubactions, name: "CI/CD", color: "#2088FF" },
];

const row2 = [
  { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { Icon: SiSqlalchemy, name: "SQLAlchemy", color: "#D71F00" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiJsonwebtokens, name: "JWT Auth", color: "#FB015B" },
  { Icon: SiRender, name: "Render", color: "#FFFFFF" },
  { Icon: SiGooglecloud, name: "GCP", color: "#4285F4" },
  { Icon: FaAws, name: "AWS", color: "#FF9900" },
  { Icon: FaGitAlt, name: "Git", color: "#F05032" },
  { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" },
];

const row3 = [
  { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
];

function SkillRow({
  skills,
  reverse = false,
}: {
  skills: typeof row1;
  reverse?: boolean;
}) {
  return (
    <motion.div
      animate={{
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      }}
      className="flex gap-6 whitespace-nowrap"
    >
      {[...skills, ...skills].map((skill, index) => {
        const Icon = skill.Icon;

        return (
          <div
            key={index}
            className="
              flex items-center gap-4
              px-7 py-4
              rounded-full
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-md
              hover:bg-white/[0.06]
              transition-all duration-300
              shrink-0
            "
          >
            <Icon size={36} color={skill.color} />

            <span className="text-white font-medium text-lg">
              {skill.name}
            </span>
          </div>
        );
      })}
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills"
      className="py-24 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn y={40}>
        <h2
          className="
            hero-heading
            font-black
            uppercase
            leading-none
            tracking-tight
            text-center
            text-white
            mb-20
          "
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
          }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-8">
        <SkillRow skills={row1} />

        <SkillRow skills={row2} reverse />

        <SkillRow skills={row3} />
      </div>
    </section>
  );
}