import { FadeIn } from "./FadeIn";

const EXPERIENCE = [
  {
    n: "01",
    role: "AI/ML Engineer",
    org: "Briskcovey Technologies",
    period: "05/2026 – Current",
    points: [
      "Built RoadBuddy, an AI-powered road trip planner, integrating ML-driven recommendations with a full-stack architecture covering frontend, backend, and deployment.",
      "Gained hands-on experience across the full ML lifecycle — data preprocessing, model training, API development, and cloud deployment — while working independently on end-to-end production projects.",
      "Gained end-to-end experience across the ML lifecycle, from data preprocessing and feature engineering to model training, evaluation, and deployment.",
      "Strengthened skills in NLP and text-based machine learning, including building and fine-tuning models for real-world language-processing tasks.",
      "Developed practical expertise in deploying ML models as production-ready APIs and integrating them into full-stack applications.",
      "Improved problem-solving and debugging skills while working independently on production systems, including cloud deployment and performance optimization.",
    ],
  },
  {
    n: "02",
    role: "Machine Learning Developer Intern",
    org: "Cognetix Global Technology",
    period: "05/2026 – Current (Remote)",
    points: [
      "Utilized deep learning frameworks TensorFlow and Keras to build CNN and RNN applications, enabling advanced predictive analytics across multiple business domains.",
      "Implemented optimized algorithms for data processing and feature extraction, significantly streamlining model training workflows and reducing compute time.",
      "Developed end-to-end machine learning models to analyze large datasets and forecast outcomes, improving stakeholder decision-making processes.",
    ],
  },
  {
    n: "03",
    role: "Python Devloper Intern",
    org: "The Nine Hertz, Jaipur",
    period: "04/2025 – 07/2025",
    points: [
      "Collaborated with cross-functional teams to develop mobile applications for diverse client projects.",
      "Conducted market research, partnered with designers on UI/UX, and facilitated regular team alignment meetings.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.Tech – Computer Science Engineering (AI & Data Science)",
    school: "Poornima University, Jaipur",
    period: "05/2026",
    detail: "GPA: 7.23",
  },
  {
    degree: "XII Standard – Science (PCM)",
    school: "Central Academy Sr. Sec. School, Jaipur",
    period: "01/2023",
    detail: "80%",
  },
];

const CERTIFICATIONS = [
  "Google Cloud Generative AI",
  "Microsoft Data Analyst 101 – Simpli Learn",
  "Introduction to Data Science Using Python – Udemy",
  "Introduction to Generative AI and Studio – Simpli Learn",
  "Internship Certificate – The Nine Hertz (Python Devloper)",
  "Internship Certificate – Cognetix Global Technology (ML Developer)",
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 bg-[#0C0C0C]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <FadeIn y={40}>
          <h2
            className="
              hero-heading
              font-black
              uppercase
              leading-none
              tracking-tight
              text-center
              mb-16 sm:mb-20 md:mb-28
              text-white
            "
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
            }}
          >
            Experience
          </h2>
        </FadeIn>

        {/* Experience list */}
        <div className="max-w-5xl mx-auto">
          {EXPERIENCE.map((exp, i) => (
            <FadeIn key={exp.n} delay={i * 0.1} y={30}>
              <div
                className="
                  group
                  flex flex-col md:flex-row
                  gap-6 sm:gap-10 md:gap-14
                  py-8 sm:py-10 md:py-12
                  px-4 md:px-6
                  rounded-3xl
                  border border-transparent
                  transition-all duration-300
                  hover:bg-white/5
                  hover:border-white/10
                  hover:backdrop-blur-sm
                  hover:-translate-y-1
                "
                style={{
                  borderTop:
                    i === 0
                      ? "1px solid rgba(255,255,255,0.12)"
                      : undefined,
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {/* Number */}
                <div
                  className="
                    font-black
                    shrink-0
                    transition-all duration-300
                    group-hover:opacity-40
                  "
                  style={{
                    color: "#FFFFFF",
                    opacity: 0.15,
                    fontSize: "clamp(3rem, 10vw, 140px)",
                    lineHeight: 1,
                  }}
                >
                  {exp.n}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3 gap-1">
                    <span
                      className="
                        font-medium
                        uppercase
                        transition-all duration-300
                        group-hover:translate-x-2
                      "
                      style={{
                        color: "#FFFFFF",
                        fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                        lineHeight: 1.1,
                      }}
                    >
                      {exp.role}
                    </span>
                    <span className="text-white/40 uppercase tracking-[0.15em] text-xs sm:text-sm">
                      {exp.period}
                    </span>
                  </div>

                  <span className="text-white/60 uppercase tracking-[0.2em] text-xs sm:text-sm">
                    {exp.org}
                  </span>

                  <ul className="flex flex-col gap-2 mt-2">
                    {exp.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="font-light leading-relaxed max-w-2xl flex gap-3"
                        style={{
                          color: "#FFFFFF",
                          opacity: 0.65,
                          fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)",
                        }}
                      >
                        <span className="text-white/30">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education + Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-20 sm:mt-24 md:mt-28">
          {/* Education */}
          <FadeIn y={30} delay={0.1}>
            <div>
              <h3 className="text-white/50 uppercase tracking-[0.25em] text-sm mb-6">
                Education
              </h3>
              <div className="flex flex-col gap-6">
                {EDUCATION.map((ed) => (
                  <div
                    key={ed.degree}
                    className="border-l border-white/10 pl-5"
                  >
                    <p className="text-white font-medium leading-snug">
                      {ed.degree}
                    </p>
                    <p className="text-white/50 text-sm mt-1">
                      {ed.school}
                    </p>
                    <p className="text-white/30 text-xs mt-1 uppercase tracking-[0.15em]">
                      {ed.period} · {ed.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Certifications */}
          <FadeIn y={30} delay={0.2}>
            <div>
              <h3 className="text-white/50 uppercase tracking-[0.25em] text-sm mb-6">
                Certifications
              </h3>
              <ul className="flex flex-col gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <li
                    key={cert}
                    className="text-white/65 text-sm sm:text-base leading-relaxed flex gap-3"
                  >
                    <span className="text-white/30">—</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
