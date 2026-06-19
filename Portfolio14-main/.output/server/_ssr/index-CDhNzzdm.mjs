import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { F as FaPython, S as SiC, a as FaDatabase, b as SiTensorflow, c as SiKeras, d as SiPytorch, e as SiHuggingface, f as SiGooglegemini, g as SiDocker, h as SiGithubactions, i as SiFastapi, j as SiSqlalchemy, k as SiPostgresql, l as SiMongodb, m as SiJsonwebtokens, n as SiRender, o as SiGooglecloud, p as FaAws, q as FaGitAlt, r as FaGithub, s as FaHtml5, t as FaCss3Alt, u as SiBootstrap, v as FaEnvelope, w as FaLinkedin, x as FaInstagram } from "../_libs/react-icons.mjs";
import { u as useScroll, m as motion, a as useTransform } from "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function FadeIn({
  children,
  as = "div",
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style
}) {
  const Comp = motion.create(as);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      initial: { opacity: 0, x, y },
      whileInView: { opacity: 1, x: 0, y: 0 },
      viewport: { once: true, margin: "50px", amount: 0 },
      transition: { delay, duration, ease: [0.25, 0.1, 0.25, 1] },
      className,
      style,
      children
    }
  );
}
function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className
}) {
  const ref = reactExports.useRef(null);
  const [pos, setPos] = reactExports.useState({ x: 0, y: 0 });
  const [active, setActive] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handle = (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const within = Math.abs(dx) < rect.width / 2 + padding && Math.abs(dy) < rect.height / 2 + padding;
      if (within) {
        setActive(true);
        setPos({ x: dx / strength, y: dy / strength });
      } else {
        setActive(false);
        setPos({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [padding, strength]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className,
      style: {
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: "transform"
      },
      children
    }
  );
}
function ContactButton({
  href = "#contact"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href,
      className: "\n        inline-flex items-center justify-center\n        rounded-full\n        px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4\n        text-xs sm:text-sm md:text-base\n        font-semibold uppercase tracking-[0.25em]\n        text-white\n        transition-all duration-300\n        hover:scale-105 hover:-translate-y-1\n        active:scale-95\n      ",
      style: {
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: `
          0 0 20px rgba(168, 85, 247, 0.35),
          0 0 40px rgba(236, 72, 153, 0.20),
          inset 0 1px 1px rgba(255,255,255,0.12)
        `
      },
      children: "Contact Me"
    }
  );
}
const aminePortrait = "/assets/amine-CiwTsmF2.png";
const NAV_LINKS = [
  "About",
  "Skills",
  "Experience",
  "Services",
  "Projects",
  "Contact"
];
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "h-screen flex flex-col relative",
      style: { overflowX: "clip" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FadeIn,
          {
            as: "nav",
            delay: 0,
            y: -20,
            className: "flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20",
            children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: `#${link.toLowerCase()}`,
                className: "\n              text-[#D7E2EA]\n              font-medium\n              uppercase\n              tracking-wider\n              text-sm\n              md:text-lg\n              lg:text-[1.4rem]\n              hover:opacity-70\n              transition-opacity duration-200\n            ",
                children: link
              },
              link
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden mt-6 sm:mt-4 md:-mt-5 px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.15, y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "\n              hero-heading\n              font-black\n              uppercase\n              tracking-tight\n              leading-none\n              whitespace-nowrap\n              w-full\n              text-[12.5vw]\n              sm:text-[13.5vw]\n              md:text-[14.5vw]\n              lg:text-[15.5vw]\n            ",
            children: "Hi, i'm kunal"
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "\n          mt-auto\n          flex\n          justify-between\n          items-end\n          pb-7\n          sm:pb-8\n          md:pb-10\n          px-6\n          md:px-10\n          relative\n          z-20\n        ",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.35, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "\n              text-[#D7E2EA]\n              font-light\n              uppercase\n              tracking-wide\n              leading-snug\n              max-w-[160px]\n              sm:max-w-[220px]\n              md:max-w-[260px]\n            ",
                  style: {
                    fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)"
                  },
                  children: "machine learning developer & full-stack engineer building AI-powered applications"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.5, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ContactButton, {}) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FadeIn,
          {
            delay: 0.6,
            y: 30,
            className: "\n          absolute\n          left-1/2\n          -translate-x-1/2\n          z-10\n          top-1/2\n          -translate-y-1/2\n          sm:top-auto\n          sm:translate-y-0\n          sm:bottom-0\n          w-[280px]\n          sm:w-[360px]\n          md:w-[440px]\n          lg:w-[520px]\n        ",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Magnet,
              {
                padding: 150,
                strength: 3,
                activeTransition: "transform 0.3s ease-out",
                inactiveTransition: "transform 0.6s ease-in-out",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: aminePortrait,
                    alt: "Kunal Singh Tanwar portrait",
                    className: "w-full h-auto select-none pointer-events-none",
                    draggable: false
                  }
                )
              }
            )
          }
        )
      ]
    }
  );
}
const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];
const ROW1 = IMAGES.slice(0, 11);
const ROW2 = IMAGES.slice(11);
function Row({ images, direction }) {
  const tripled = [...images, ...images, ...images];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", style: { willChange: "transform" }, children: tripled.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src,
      alt: "",
      loading: "lazy",
      className: "rounded-2xl object-cover shrink-0",
      style: { width: 420, height: 270 }
    },
    i
  )) });
}
function MarqueeSection() {
  const sectionRef = reactExports.useRef(null);
  const [offset, setOffset] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(value);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const x1 = offset - 200;
  const x2 = -(offset - 200);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref: sectionRef,
      className: "pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3",
      style: { background: "#0C0C0C", overflowX: "clip" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: `translateX(${x1}px)`, willChange: "transform" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { images: ROW1, direction: "right" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { transform: `translateX(${x2}px)`, willChange: "transform" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { images: ROW2, direction: "left" }) })
      ]
    }
  );
}
function Char({
  char,
  progress,
  range
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0", children: char === " " ? " " : char }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { style: { opacity }, className: "absolute left-0 top-0", children: char === " " ? " " : char })
  ] });
}
function AnimatedText({ text, className, style }) {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });
  const chars = text.split("");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { ref, className, style, children: chars.map((c, i) => {
    const start = i / chars.length;
    const end = start + 1 / chars.length;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Char, { char: c, progress: scrollYProgress, range: [start, end] }, i);
  }) });
}
function AboutSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "about",
      className: "relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 gap-10 sm:gap-14 md:gap-16",
      style: { background: "#0C0C0C", overflowX: "clip" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FadeIn,
          {
            delay: 0.1,
            x: -80,
            y: 0,
            duration: 0.9,
            className: "absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png", alt: "", className: "w-full h-auto" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FadeIn,
          {
            delay: 0.25,
            x: -80,
            y: 0,
            duration: 0.9,
            className: "absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png", alt: "", className: "w-full h-auto" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FadeIn,
          {
            delay: 0.15,
            x: 80,
            y: 0,
            duration: 0.9,
            className: "absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png", alt: "", className: "w-full h-auto" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FadeIn,
          {
            delay: 0.3,
            x: 80,
            y: 0,
            duration: 0.9,
            className: "absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png", alt: "", className: "w-full h-auto" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0, y: 40, className: "text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "hero-heading font-black uppercase leading-none tracking-tight",
            style: { fontSize: "clamp(3rem, 12vw, 160px)" },
            children: "About me"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimatedText,
            {
              text: "I am an AI/ML Engineer at Briskcovey Technologies and a B.Tech Computer Science Engineering graduate (AI & Data Science) from Poornima University, Jaipur. I build predictive models, deep learning pipelines, and cloud-deployed AI APIs, with hands-on experience across full-stack development, NLP, and production-grade ML systems.",
              className: "text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]",
              style: { fontSize: "clamp(1rem, 2vw, 1.35rem)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactButton, {})
        ] })
      ]
    }
  );
}
const SERVICES = [
  {
    n: "01",
    name: "Machine Learning & Deep Learning",
    desc: "Building predictive models, CNN/RNN architectures, and end-to-end ML pipelines with TensorFlow, Keras, and PyTorch for real-world forecasting and analytics."
  },
  {
    n: "02",
    name: "AI Integration & Prompt Engineering",
    desc: "Integrating LLMs like Llama 3 and Gemini via Groq API and Hugging Face Transformers to power intelligent features such as chatbots, summarizers, and smart search."
  },
  {
    n: "03",
    name: "Full-Stack Web Development",
    desc: "Designing and shipping complete web applications with FastAPI, PostgreSQL, JWT authentication, and modern REST APIs from database to deployment."
  },
  {
    n: "04",
    name: "Cloud Deployment & CI/CD",
    desc: "Containerizing applications with Docker and deploying on Render, AWS, Azure, and GCP with automated GitHub Actions pipelines for reliable, zero-downtime releases."
  },
  {
    n: "05",
    name: "Data Analysis & Visualization",
    desc: "Processing and analyzing large datasets, engineering features, and presenting insights through Power BI dashboards and data-driven decision support."
  }
];
function ServicesSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 bg-[#0C0C0C]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "\n          max-w-7xl mx-auto\n          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]\n          border border-white/10\n          bg-[#0C0C0C]\n          px-6 sm:px-8 md:px-12\n          py-12 sm:py-16 md:py-20\n          shadow-[0_0_60px_rgba(255,255,255,0.03)]\n        ",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "\n              hero-heading\n              font-black\n              uppercase\n              leading-none\n              tracking-tight\n              text-center\n              mb-16 sm:mb-20 md:mb-28\n              text-white\n            ",
            style: {
              fontSize: "clamp(3rem, 12vw, 160px)"
            },
            children: "Services"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, y: 30, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "\n                  group\n                  flex flex-col md:flex-row\n                  md:items-center\n                  gap-6 sm:gap-10 md:gap-14\n                  py-8 sm:py-10 md:py-12\n                  px-4 md:px-6\n                  rounded-3xl\n                  border border-transparent\n                  transition-all duration-300\n                  hover:bg-white/5\n                  hover:border-white/10\n                  hover:backdrop-blur-sm\n                  hover:-translate-y-1\n                ",
            style: {
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.12)" : void 0,
              borderBottom: "1px solid rgba(255,255,255,0.12)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "\n                    font-black\n                    shrink-0\n                    transition-all duration-300\n                    group-hover:opacity-40\n                  ",
                  style: {
                    color: "#FFFFFF",
                    opacity: 0.15,
                    fontSize: "clamp(3rem, 10vw, 140px)",
                    lineHeight: 1
                  },
                  children: s.n
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "\n                      font-medium\n                      uppercase\n                      transition-all duration-300\n                      group-hover:translate-x-2\n                    ",
                    style: {
                      color: "#FFFFFF",
                      fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                      lineHeight: 1.1
                    },
                    children: s.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-light leading-relaxed max-w-2xl",
                    style: {
                      color: "#FFFFFF",
                      opacity: 0.65,
                      fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)"
                    },
                    children: s.desc
                  }
                )
              ] })
            ]
          }
        ) }, s.n)) })
      ]
    }
  ) });
}
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
      "Improved problem-solving and debugging skills while working independently on production systems, including cloud deployment and performance optimization."
    ]
  },
  {
    n: "02",
    role: "Machine Learning Developer Intern",
    org: "Cognetix Global Technology",
    period: "05/2026 – Current (Remote)",
    points: [
      "Utilized deep learning frameworks TensorFlow and Keras to build CNN and RNN applications, enabling advanced predictive analytics across multiple business domains.",
      "Implemented optimized algorithms for data processing and feature extraction, significantly streamlining model training workflows and reducing compute time.",
      "Developed end-to-end machine learning models to analyze large datasets and forecast outcomes, improving stakeholder decision-making processes."
    ]
  },
  {
    n: "03",
    role: "Python Devloper Intern",
    org: "The Nine Hertz, Jaipur",
    period: "04/2025 – 07/2025",
    points: [
      "Collaborated with cross-functional teams to develop mobile applications for diverse client projects.",
      "Conducted market research, partnered with designers on UI/UX, and facilitated regular team alignment meetings."
    ]
  }
];
const EDUCATION = [
  {
    degree: "B.Tech – Computer Science Engineering (AI & Data Science)",
    school: "Poornima University, Jaipur",
    period: "05/2026",
    detail: "GPA: 7.23"
  },
  {
    degree: "XII Standard – Science (PCM)",
    school: "Central Academy Sr. Sec. School, Jaipur",
    period: "01/2023",
    detail: "80%"
  }
];
const CERTIFICATIONS = [
  "Google Cloud Generative AI",
  "Microsoft Data Analyst 101 – Simpli Learn",
  "Introduction to Data Science Using Python – Udemy",
  "Introduction to Generative AI and Studio – Simpli Learn",
  "Internship Certificate – The Nine Hertz (Python Devloper)",
  "Internship Certificate – Cognetix Global Technology (ML Developer)"
];
function ExperienceSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "experience",
      className: "px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 bg-[#0C0C0C]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "\n              hero-heading\n              font-black\n              uppercase\n              leading-none\n              tracking-tight\n              text-center\n              mb-16 sm:mb-20 md:mb-28\n              text-white\n            ",
            style: {
              fontSize: "clamp(3rem, 12vw, 160px)"
            },
            children: "Experience"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: EXPERIENCE.map((exp, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, y: 30, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "\n                  group\n                  flex flex-col md:flex-row\n                  gap-6 sm:gap-10 md:gap-14\n                  py-8 sm:py-10 md:py-12\n                  px-4 md:px-6\n                  rounded-3xl\n                  border border-transparent\n                  transition-all duration-300\n                  hover:bg-white/5\n                  hover:border-white/10\n                  hover:backdrop-blur-sm\n                  hover:-translate-y-1\n                ",
            style: {
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.12)" : void 0,
              borderBottom: "1px solid rgba(255,255,255,0.12)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "\n                    font-black\n                    shrink-0\n                    transition-all duration-300\n                    group-hover:opacity-40\n                  ",
                  style: {
                    color: "#FFFFFF",
                    opacity: 0.15,
                    fontSize: "clamp(3rem, 10vw, 140px)",
                    lineHeight: 1
                  },
                  children: exp.n
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-baseline sm:gap-3 gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "\n                        font-medium\n                        uppercase\n                        transition-all duration-300\n                        group-hover:translate-x-2\n                      ",
                      style: {
                        color: "#FFFFFF",
                        fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                        lineHeight: 1.1
                      },
                      children: exp.role
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 uppercase tracking-[0.15em] text-xs sm:text-sm", children: exp.period })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 uppercase tracking-[0.2em] text-xs sm:text-sm", children: exp.org }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2 mt-2", children: exp.points.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "font-light leading-relaxed max-w-2xl flex gap-3",
                    style: {
                      color: "#FFFFFF",
                      opacity: 0.65,
                      fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30", children: "—" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
                    ]
                  },
                  idx
                )) })
              ] })
            ]
          }
        ) }, exp.n)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-20 sm:mt-24 md:mt-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 30, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white/50 uppercase tracking-[0.25em] text-sm mb-6", children: "Education" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-6", children: EDUCATION.map((ed) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "border-l border-white/10 pl-5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium leading-snug", children: ed.degree }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-sm mt-1", children: ed.school }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/30 text-xs mt-1 uppercase tracking-[0.15em]", children: [
                    ed.period,
                    " · ",
                    ed.detail
                  ] })
                ]
              },
              ed.degree
            )) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 30, delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white/50 uppercase tracking-[0.25em] text-sm mb-6", children: "Certifications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-3", children: CERTIFICATIONS.map((cert) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "text-white/65 text-sm sm:text-base leading-relaxed flex gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30", children: "—" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: cert })
                ]
              },
              cert
            )) })
          ] }) })
        ] })
      ] })
    }
  );
}
function LiveProjectButton({ href = "#" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors",
      children: "Live Project"
    }
  );
}
const projectRoadTrip = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&q=80&auto=format&fit=crop";
const projectTextSummary = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&q=80&auto=format&fit=crop";
const projectFakeNews = "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=900&q=80&auto=format&fit=crop";
const PROJECTS = [
  {
    n: "01",
    category: "AI / Full-Stack",
    name: "RoadBuddy — AI Road Trip Planner",
    image: projectRoadTrip,
    link: "https://roadbuddy-backend-shp4.onrender.com/login"
  },
  {
    n: "02",
    category: "Machine Learning",
    name: "Text Summarization API",
    image: projectTextSummary,
    link: "https://github.com/Kunal14695/Text-Summerizer-project"
  },
  {
    n: "03",
    category: "Machine Learning",
    name: "Fake News Detection",
    image: projectFakeNews,
    link: "https://github.com/Kunal14695/Fake-News-Detection"
  }
];
function ProjectCard({
  project,
  index,
  total,
  progress
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "sticky top-24 md:top-32",
      style: { top: `${index * 28 + 96}px` },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          style: { scale },
          className: "\n          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]\n          border border-white/10\n          bg-[#0C0C0C]/95\n          backdrop-blur-xl\n          p-4 sm:p-6 md:p-8\n          shadow-[0_0_60px_rgba(255,255,255,0.03)]\n          transition-all duration-300\n          hover:border-white/20\n        ",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 md:mb-8 px-2 sm:px-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "hero-heading font-black text-white/15",
                    style: {
                      fontSize: "clamp(3rem, 10vw, 140px)",
                      lineHeight: 1
                    },
                    children: project.n
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/50 uppercase tracking-[0.25em] text-xs sm:text-sm", children: project.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-white font-medium uppercase",
                      style: {
                        fontSize: "clamp(1rem, 2vw, 1.75rem)"
                      },
                      children: project.name
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(LiveProjectButton, { href: project.link })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: project.image,
                    alt: project.name,
                    loading: "lazy",
                    className: "\n                w-full object-cover\n                rounded-[30px]\n                border border-white/10\n                hover:scale-[1.02]\n                transition-all duration-300\n              ",
                    style: {
                      height: "clamp(140px,18vw,240px)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: project.image,
                    alt: project.name,
                    loading: "lazy",
                    className: "\n                w-full object-cover\n                rounded-[30px]\n                border border-white/10\n                hover:scale-[1.02]\n                transition-all duration-300\n              ",
                    style: {
                      height: "clamp(180px,24vw,320px)"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: project.image,
                  alt: project.name,
                  loading: "lazy",
                  className: "\n                w-full h-full object-cover\n                rounded-[35px] md:rounded-[45px]\n                border border-white/10\n                hover:scale-[1.01]\n                transition-all duration-300\n              ",
                  style: {
                    minHeight: "100%"
                  }
                }
              ) })
            ] })
          ]
        }
      )
    }
  );
}
function ProjectsSection() {
  const containerRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "projects",
      ref: containerRef,
      className: "\n        px-5 sm:px-8 md:px-10\n        py-20 sm:py-24 md:py-32\n        bg-[#0C0C0C]\n      ",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FadeIn,
          {
            y: 40,
            className: "text-center mb-16 sm:mb-20 md:mb-28",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "\n            hero-heading\n            font-black\n            uppercase\n            leading-none\n            tracking-tight\n            text-white\n          ",
                style: {
                  fontSize: "clamp(3rem, 12vw, 160px)"
                },
                children: "Projects"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: PROJECTS.map((project, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-[85vh]",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ProjectCard,
              {
                project,
                index,
                total: PROJECTS.length,
                progress: scrollYProgress
              }
            )
          },
          project.n
        )) })
      ]
    }
  );
}
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
  { Icon: SiGithubactions, name: "CI/CD", color: "#2088FF" }
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
  { Icon: FaGithub, name: "GitHub", color: "#FFFFFF" }
];
const row3 = [
  { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
  { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" }
];
function SkillRow({
  skills,
  reverse = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      animate: {
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
      },
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear"
      },
      className: "flex gap-6 whitespace-nowrap",
      children: [...skills, ...skills].map((skill, index) => {
        const Icon = skill.Icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "\n              flex items-center gap-4\n              px-7 py-4\n              rounded-full\n              border border-white/10\n              bg-white/[0.03]\n              backdrop-blur-md\n              hover:bg-white/[0.06]\n              transition-all duration-300\n              shrink-0\n            ",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 36, color: skill.color }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium text-lg", children: skill.name })
            ]
          },
          index
        );
      })
    }
  );
}
function SkillsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "skills",
      className: "py-24 overflow-hidden",
      style: { background: "#0C0C0C" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "\n            hero-heading\n            font-black\n            uppercase\n            leading-none\n            tracking-tight\n            text-center\n            text-white\n            mb-20\n          ",
            style: {
              fontSize: "clamp(3rem, 12vw, 160px)"
            },
            children: "Skills"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SkillRow, { skills: row1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SkillRow, { skills: row2, reverse: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SkillRow, { skills: row3 })
        ] })
      ]
    }
  );
}
function FooterSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 pb-10", id: "contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "h2",
      {
        className: "\n              hero-heading\n              font-black\n              uppercase\n              leading-none\n              tracking-tight\n              text-white\n              text-center\n            ",
        style: {
          fontSize: "clamp(3rem, 10vw, 8rem)"
        },
        children: [
          "Let's Build",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Something Amazing"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.2, y: 30, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "mailto:kunalsingtanwar355@gmail.com",
        className: "\n                px-10 py-5\n                rounded-full\n                border border-white/10\n                bg-white/[0.03]\n                backdrop-blur-md\n                text-white\n                uppercase\n                tracking-[0.25em]\n                font-medium\n                transition-all duration-300\n                hover:bg-white/[0.08]\n                hover:border-white/20\n                hover:-translate-y-1\n              ",
        children: "Get In Touch"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.3, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "mailto:kunalsingtanwar355@gmail.com",
        className: "\n                flex items-center gap-3\n                text-white/70\n                hover:text-white\n                transition-all\n              ",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaEnvelope, { size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: "kunalsingtanwar355@gmail.com" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.4, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-8 mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/Kunal14695",
          target: "_blank",
          rel: "noreferrer",
          className: "\n                text-white/60\n                hover:text-white\n                hover:scale-110\n                transition-all duration-300\n              ",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaGithub, { size: 30 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://www.linkedin.com/in/kunal-singh-tanwar-321031291",
          target: "_blank",
          rel: "noreferrer",
          className: "\n                text-white/60\n                hover:text-[#0A66C2]\n                hover:scale-110\n                transition-all duration-300\n              ",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaLinkedin, { size: 30 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://www.instagram.com/kya_yrr_kunal",
          target: "_blank",
          rel: "noreferrer",
          className: "\n                text-white/60\n                hover:text-[#E4405F]\n                hover:scale-110\n                transition-all duration-300\n              ",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaInstagram, { size: 30 })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-white/10 mt-16 mb-8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 text-sm", children: "© 2026 Kunal Singh Tanwar. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 text-sm uppercase tracking-[0.2em]", children: "Designed & Developed by Kunal" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { style: {
    background: "#0C0C0C",
    overflowX: "clip"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AboutSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SkillsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ExperienceSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServicesSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FooterSection, {})
  ] });
}
export {
  Index as component
};
