import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { F as FaPython, S as SiC, a as FaDatabase, b as SiTensorflow, c as SiKeras, d as SiPytorch, e as SiHuggingface, f as SiGooglegemini, g as SiDocker, h as SiGithubactions, i as SiFastapi, j as SiSqlalchemy, k as SiPostgresql, l as SiMongodb, m as SiJsonwebtokens, n as SiRender, o as SiGooglecloud, p as FaAws, q as FaGitAlt, r as FaGithub, s as FaHtml5, t as FaCss3Alt, u as SiBootstrap, v as FaEnvelope, w as FaLinkedin, x as FaInstagram } from "../_libs/react-icons.mjs";
import { M as Menu, X } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion, u as useScroll, a as useTransform } from "../_libs/framer-motion.mjs";
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
      className: "\r\n        inline-flex items-center justify-center\r\n        rounded-full\r\n        px-8 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4\r\n        text-xs sm:text-sm md:text-base\r\n        font-semibold uppercase tracking-[0.25em]\r\n        text-white\r\n        transition-all duration-300\r\n        hover:scale-105 hover:-translate-y-1\r\n        active:scale-95\r\n      ",
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
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "min-h-[100dvh] sm:h-screen flex flex-col relative",
      style: { overflowX: "clip" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          FadeIn,
          {
            as: "nav",
            delay: 0,
            y: -20,
            className: "flex items-center justify-between md:justify-start px-4 sm:px-6 md:px-10 pt-5 sm:pt-6 md:pt-8 relative z-20 w-full",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-6 md:gap-8 lg:gap-12", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `#${link.toLowerCase()}`,
                  className: "\r\n                text-[#D7E2EA]\r\n                font-medium\r\n                uppercase\r\n                tracking-wider\r\n                text-sm\r\n                md:text-lg\r\n                lg:text-[1.4rem]\r\n                hover:opacity-70\r\n                transition-opacity duration-200\r\n              ",
                  children: link
                },
                link
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setMenuOpen(true),
                  className: "md:hidden ml-auto text-[#D7E2EA] hover:opacity-70 transition-opacity p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none cursor-pointer",
                  "aria-label": "Open Menu",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: menuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: () => setMenuOpen(false),
              className: "fixed inset-0 bg-black/75 backdrop-blur-md z-40 md:hidden"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { x: "100%" },
              animate: { x: 0 },
              exit: { x: "100%" },
              transition: { type: "spring", damping: 25, stiffness: 200 },
              className: "fixed right-0 top-0 bottom-0 w-4/5 max-w-[300px] bg-[#0C0C0C]/98 border-l border-white/10 backdrop-blur-xl p-6 sm:p-8 z-50 md:hidden flex flex-col justify-between",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => setMenuOpen(false),
                      className: "text-[#D7E2EA] hover:opacity-70 transition-opacity p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none cursor-pointer",
                      "aria-label": "Close Menu",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" })
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5 mt-4", children: NAV_LINKS.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.a,
                    {
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: i * 0.04 },
                      href: `#${link.toLowerCase()}`,
                      onClick: () => setMenuOpen(false),
                      className: "\r\n                        text-[#D7E2EA]\r\n                        font-semibold\r\n                        uppercase\r\n                        tracking-widest\r\n                        text-base sm:text-lg\r\n                        hover:text-white\r\n                        transition-colors duration-200\r\n                        py-2\r\n                        border-b border-white/5\r\n                      ",
                      children: link
                    },
                    link
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6 border-t border-white/10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#contact",
                    onClick: () => setMenuOpen(false),
                    className: "w-full text-center py-3 rounded-full bg-white/10 text-white font-medium uppercase tracking-wider text-xs border border-white/15",
                    children: "Get in touch"
                  }
                ) })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden mt-4 sm:mt-4 md:-mt-5 px-3 sm:px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.15, y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h1",
          {
            className: "\r\n              hero-heading\r\n              font-black\r\n              uppercase\r\n              tracking-tight\r\n              leading-[0.92]\r\n              w-full\r\n              text-[13.5vw]\r\n              xs:text-[13vw]\r\n              sm:text-[13vw]\r\n              md:text-[14.5vw]\r\n              lg:text-[15.5vw]\r\n              break-words\r\n              sm:whitespace-nowrap\r\n            ",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block sm:inline", children: "Hi, i'm" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block sm:inline", children: "kunal" })
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "\r\n          mt-auto\r\n          flex\r\n          flex-col sm:flex-row\r\n          justify-between\r\n          items-start sm:items-end\r\n          gap-5 sm:gap-0\r\n          pb-6\r\n          sm:pb-8\r\n          md:pb-10\r\n          px-4\r\n          sm:px-6\r\n          md:px-10\r\n          relative\r\n          z-20\r\n        ",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.35, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "\r\n              text-[#D7E2EA]\r\n              font-light\r\n              uppercase\r\n              tracking-wide\r\n              leading-snug\r\n              max-w-[170px]\r\n              xs:max-w-[200px]\r\n              sm:max-w-[220px]\r\n              md:max-w-[260px]\r\n            ",
                  style: {
                    fontSize: "clamp(0.7rem, 1.4vw, 1.5rem)"
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
            className: "\r\n          absolute\r\n          left-1/2\r\n          -translate-x-1/2\r\n          z-10\r\n          bottom-4\r\n          sm:bottom-0\r\n          w-[190px]\r\n          xs:w-[230px]\r\n          sm:w-[360px]\r\n          md:w-[440px]\r\n          lg:w-[520px]\r\n          pointer-events-none\r\n        ",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2.5 sm:gap-3", style: { willChange: "transform" }, children: tripled.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src,
      alt: "",
      loading: "lazy",
      className: "rounded-xl sm:rounded-2xl object-cover shrink-0 w-[210px] h-[130px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px]"
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
      className: "pt-16 sm:pt-28 md:pt-40 pb-8 sm:pb-10 flex flex-col gap-2.5 sm:gap-3",
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
      className: "relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-28 gap-8 sm:gap-14 md:gap-16",
      style: { background: "#0C0C0C", overflowX: "clip" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FadeIn,
          {
            delay: 0.1,
            x: -80,
            y: 0,
            duration: 0.9,
            className: "absolute top-[4%] left-[2%] sm:left-[2%] md:left-[4%] w-[38px] xs:w-[48px] sm:w-[120px] md:w-[210px] opacity-40 sm:opacity-100 pointer-events-none select-none",
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
            className: "absolute bottom-[6%] left-[2%] sm:left-[6%] md:left-[10%] w-[32px] xs:w-[42px] sm:w-[100px] md:w-[180px] opacity-40 sm:opacity-100 pointer-events-none select-none",
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
            className: "absolute top-[4%] right-[2%] sm:right-[2%] md:right-[4%] w-[40px] xs:w-[50px] sm:w-[120px] md:w-[210px] opacity-40 sm:opacity-100 pointer-events-none select-none",
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
            className: "absolute bottom-[6%] right-[2%] sm:right-[6%] md:right-[10%] w-[40px] xs:w-[50px] sm:w-[130px] md:w-[220px] opacity-40 sm:opacity-100 pointer-events-none select-none",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png", alt: "", className: "w-full h-auto" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0, y: 40, className: "text-center relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "hero-heading font-black uppercase leading-none tracking-tight",
            style: { fontSize: "clamp(2.6rem, 11vw, 160px)" },
            children: "About me"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center gap-12 sm:gap-20 md:gap-24 px-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            AnimatedText,
            {
              text: "I am an AI/ML Engineer Pursuing B.Tech In Computer Science Engineering (AI & Data Science) from Poornima University, Jaipur. I build predictive models, deep learning pipelines, and cloud-deployed AI APIs, with hands-on experience across full-stack development, NLP, and production-grade ML systems.",
              className: "text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[580px]",
              style: { fontSize: "clamp(0.95rem, 2vw, 1.35rem)" }
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "px-3 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 bg-[#0C0C0C]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "\r\n          max-w-7xl mx-auto\r\n          rounded-[24px] sm:rounded-[45px] md:rounded-[60px]\r\n          border border-white/10\r\n          bg-[#0C0C0C]\r\n          px-3.5 sm:px-8 md:px-12\r\n          py-7 sm:py-16 md:py-20\r\n          shadow-[0_0_60px_rgba(255,255,255,0.03)]\r\n        ",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "\r\n              hero-heading\r\n              font-black\r\n              uppercase\r\n              leading-none\r\n              tracking-tight\r\n              text-center\r\n              mb-12 sm:mb-20 md:mb-28\r\n              text-white\r\n            ",
            style: {
              fontSize: "clamp(2.6rem, 11vw, 160px)"
            },
            children: "Services"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, y: 30, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "\r\n                  group\r\n                  flex flex-col md:flex-row\r\n                  md:items-center\r\n                  gap-4 sm:gap-8 md:gap-14\r\n                  py-6 sm:py-10 md:py-12\r\n                  px-3 sm:px-4 md:px-6\r\n                  rounded-2xl sm:rounded-3xl\r\n                  border border-transparent\r\n                  transition-all duration-300\r\n                  hover:bg-white/5\r\n                  hover:border-white/10\r\n                  hover:backdrop-blur-sm\r\n                  hover:-translate-y-1\r\n                ",
            style: {
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.12)" : void 0,
              borderBottom: "1px solid rgba(255,255,255,0.12)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "\r\n                    font-black\r\n                    shrink-0\r\n                    transition-all duration-300\r\n                    group-hover:opacity-40\r\n                  ",
                  style: {
                    color: "#FFFFFF",
                    opacity: 0.15,
                    fontSize: "clamp(2.2rem, 8vw, 140px)",
                    lineHeight: 1
                  },
                  children: s.n
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5 sm:gap-3 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "\r\n                      font-medium\r\n                      uppercase\r\n                      transition-all duration-300\r\n                      group-hover:translate-x-2\r\n                    ",
                    style: {
                      color: "#FFFFFF",
                      fontSize: "clamp(1.1rem, 4.2vw, 2.1rem)",
                      lineHeight: 1.15
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
                      fontSize: "clamp(0.8rem, 1.5vw, 1.15rem)"
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
    role: "AI/ML Engineer Intern",
    org: "Briskcovey Technologies",
    period: "05/2026 – 08/2026",
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
    period: "05/2026 – 08/2026 (Remote)",
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
  "Internship Certificate – Cognetix Global Technology (ML Developer)",
  "Internship Certificate - Briskcovey Technologies (AI/ML Engineer)"
];
function ExperienceSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "experience",
      className: "px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 bg-[#0C0C0C]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "\r\n              hero-heading\r\n              font-black\r\n              uppercase\r\n              leading-none\r\n              tracking-tight\r\n              text-center\r\n              mb-12 sm:mb-20 md:mb-28\r\n              text-white\r\n            ",
            style: {
              fontSize: "clamp(2.6rem, 11vw, 160px)"
            },
            children: "Experience"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: EXPERIENCE.map((exp, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: i * 0.1, y: 30, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "\r\n                  group\r\n                  flex flex-col md:flex-row\r\n                  gap-4 sm:gap-8 md:gap-14\r\n                  py-6 sm:py-10 md:py-12\r\n                  px-3 sm:px-4 md:px-6\r\n                  rounded-2xl sm:rounded-3xl\r\n                  border border-transparent\r\n                  transition-all duration-300\r\n                  hover:bg-white/5\r\n                  hover:border-white/10\r\n                  hover:backdrop-blur-sm\r\n                  hover:-translate-y-1\r\n                ",
            style: {
              borderTop: i === 0 ? "1px solid rgba(255,255,255,0.12)" : void 0,
              borderBottom: "1px solid rgba(255,255,255,0.12)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "\r\n                    font-black\r\n                    shrink-0\r\n                    transition-all duration-300\r\n                    group-hover:opacity-40\r\n                  ",
                  style: {
                    color: "#FFFFFF",
                    opacity: 0.15,
                    fontSize: "clamp(2.2rem, 8vw, 140px)",
                    lineHeight: 1
                  },
                  children: exp.n
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2.5 sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-baseline sm:gap-3 gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "\r\n                        font-medium\r\n                        uppercase\r\n                        transition-all duration-300\r\n                        group-hover:translate-x-2\r\n                      ",
                      style: {
                        color: "#FFFFFF",
                        fontSize: "clamp(1.1rem, 4.2vw, 2.1rem)",
                        lineHeight: 1.15
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
                    className: "font-light leading-relaxed max-w-2xl flex gap-2.5 sm:gap-3",
                    style: {
                      color: "#FFFFFF",
                      opacity: 0.65,
                      fontSize: "clamp(0.8rem, 1.5vw, 1.15rem)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 shrink-0", children: "—" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
                    ]
                  },
                  idx
                )) })
              ] })
            ]
          }
        ) }, exp.n)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mt-16 sm:mt-24 md:mt-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 30, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white/50 uppercase tracking-[0.25em] text-xs sm:text-sm mb-4 sm:mb-6", children: "Education" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5 sm:gap-6", children: EDUCATION.map((ed) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "border-l border-white/10 pl-4 sm:pl-5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-medium leading-snug text-sm sm:text-base", children: ed.degree }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/50 text-xs sm:text-sm mt-1", children: ed.school }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/30 text-[11px] sm:text-xs mt-1 uppercase tracking-[0.15em]", children: [
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white/50 uppercase tracking-[0.25em] text-xs sm:text-sm mb-4 sm:mb-6", children: "Certifications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2.5 sm:gap-3", children: CERTIFICATIONS.map((cert) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "text-white/65 text-xs sm:text-sm md:text-base leading-relaxed flex gap-2.5 sm:gap-3",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/30 shrink-0", children: "—" }),
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
const projectPersonalAgent = "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=900&q=80&auto=format&fit=crop";
const projectTextSummary = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&q=80&auto=format&fit=crop";
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
    category: "AI / Machine Learning",
    name: "Personal Agent",
    image: projectPersonalAgent,
    link: "https://github.com/Kunal14695/Personal-Agent"
  },
  {
    n: "03",
    category: "Machine Learning",
    name: "Text Summarization API",
    image: projectTextSummary,
    link: "https://github.com/Kunal14695/Text-Summerizer-project"
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
      className: "sticky",
      style: { top: `calc(var(--card-top-offset) + ${index} * var(--card-gap))` },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          style: { scale },
          className: "\r\n          rounded-[40px] sm:rounded-[50px] md:rounded-[60px]\r\n          border border-white/10\r\n          bg-[#0C0C0C]/95\r\n          backdrop-blur-xl\r\n          p-4 sm:p-6 md:p-8\r\n          shadow-[0_0_60px_rgba(255,255,255,0.03)]\r\n          transition-all duration-300\r\n          hover:border-white/20\r\n        ",
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
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex md:col-span-2 flex-col gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: project.image,
                    alt: project.name,
                    loading: "lazy",
                    className: "\r\n                w-full object-cover\r\n                rounded-[30px]\r\n                border border-white/10\r\n                hover:scale-[1.02]\r\n                transition-all duration-300\r\n              ",
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
                    className: "\r\n                w-full object-cover\r\n                rounded-[30px]\r\n                border border-white/10\r\n                hover:scale-[1.02]\r\n                transition-all duration-300\r\n              ",
                    style: {
                      height: "clamp(180px,24vw,320px)"
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-3 h-48 sm:h-64 md:h-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: project.image,
                  alt: project.name,
                  loading: "lazy",
                  className: "\r\n                w-full h-full object-cover\r\n                rounded-[25px] sm:rounded-[35px] md:rounded-[45px]\r\n                border border-white/10\r\n                hover:scale-[1.01]\r\n                transition-all duration-300\r\n              "
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
      className: "\r\n        px-5 sm:px-8 md:px-10\r\n        py-20 sm:py-24 md:py-32\r\n        bg-[#0C0C0C]\r\n      ",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FadeIn,
          {
            y: 40,
            className: "text-center mb-16 sm:mb-20 md:mb-28",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "\r\n            hero-heading\r\n            font-black\r\n            uppercase\r\n            leading-none\r\n            tracking-tight\r\n            text-white\r\n          ",
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
            className: "h-[60vh] sm:h-[85vh]",
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
        duration: 32,
        repeat: Infinity,
        ease: "linear"
      },
      className: "flex gap-3 sm:gap-6 whitespace-nowrap will-change-transform",
      children: [...skills, ...skills, ...skills].map((skill, index) => {
        const Icon = skill.Icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "\r\n              flex items-center gap-2 sm:gap-3.5\r\n              px-3.5 py-2 sm:px-6 sm:py-3.5\r\n              rounded-full\r\n              border border-white/10\r\n              bg-white/[0.03]\r\n              backdrop-blur-md\r\n              hover:bg-white/[0.06]\r\n              transition-all duration-300\r\n              shrink-0\r\n            ",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-[18px] h-[18px] sm:w-[30px] sm:h-[30px]", color: skill.color }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-medium text-xs sm:text-base", children: skill.name })
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
      className: "py-16 sm:py-24 overflow-hidden",
      style: { background: "#0C0C0C" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "\r\n            hero-heading\r\n            font-black\r\n            uppercase\r\n            leading-none\r\n            tracking-tight\r\n            text-center\r\n            text-white\r\n            mb-12 sm:mb-20\r\n          ",
            style: {
              fontSize: "clamp(2.6rem, 11vw, 160px)"
            },
            children: "Skills"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SkillRow, { skills: row1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SkillRow, { skills: row2, reverse: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SkillRow, { skills: row3 })
        ] })
      ]
    }
  );
}
function FooterSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-[#0C0C0C] px-4 sm:px-8 md:px-10 pt-16 sm:pt-24 pb-8 sm:pb-10", id: "contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { y: 40, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "h2",
      {
        className: "\r\n              hero-heading\r\n              font-black\r\n              uppercase\r\n              leading-none\r\n              tracking-tight\r\n              text-white\r\n              text-center\r\n            ",
        style: {
          fontSize: "clamp(2.2rem, 8.5vw, 8rem)"
        },
        children: [
          "Let's Build",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Something Amazing"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.2, y: 30, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mt-8 sm:mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "mailto:kunalsingtanwar355@gmail.com",
        className: "\r\n                px-8 py-3.5 sm:px-10 sm:py-5\r\n                rounded-full\r\n                border border-white/10\r\n                bg-white/[0.03]\r\n                backdrop-blur-md\r\n                text-white\r\n                uppercase\r\n                tracking-[0.2em] sm:tracking-[0.25em]\r\n                font-medium\r\n                text-xs sm:text-sm\r\n                transition-all duration-300\r\n                hover:bg-white/[0.08]\r\n                hover:border-white/20\r\n                hover:-translate-y-1\r\n                active:scale-95\r\n              ",
        children: "Get In Touch"
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.3, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 sm:mt-14 flex justify-center px-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "mailto:kunalsingtanwar355@gmail.com",
        className: "\r\n                flex items-center gap-2 sm:gap-3\r\n                text-white/70\r\n                hover:text-white\r\n                transition-all\r\n                text-center\r\n              ",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FaEnvelope, { size: 18, className: "shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-base md:text-lg break-all", children: "kunalsingtanwar355@gmail.com" })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeIn, { delay: 0.4, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-6 sm:gap-8 mt-8 sm:mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://github.com/Kunal14695",
          target: "_blank",
          rel: "noreferrer",
          "aria-label": "GitHub Profile",
          className: "\r\n                text-white/60\r\n                hover:text-white\r\n                hover:scale-110\r\n                transition-all duration-300\r\n                p-2\r\n              ",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaGithub, { size: 26 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://www.linkedin.com/in/kunal-singh-tanwar-321031291",
          target: "_blank",
          rel: "noreferrer",
          "aria-label": "LinkedIn Profile",
          className: "\r\n                text-white/60\r\n                hover:text-white\r\n                hover:scale-110\r\n                transition-all duration-300\r\n                p-2\r\n              ",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaLinkedin, { size: 26 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://instagram.com/kunal_singh_tanwar_14",
          target: "_blank",
          rel: "noreferrer",
          "aria-label": "Instagram Profile",
          className: "\r\n                text-white/60\r\n                hover:text-white\r\n                hover:scale-110\r\n                transition-all duration-300\r\n                p-2\r\n              ",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaInstagram, { size: 26 })
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
