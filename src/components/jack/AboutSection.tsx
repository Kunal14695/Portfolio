import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 py-16 sm:py-24 md:py-28 gap-8 sm:gap-14 md:gap-16"
      style={{ background: "#0C0C0C", overflowX: "clip" }}
    >
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[2%] sm:left-[2%] md:left-[4%] w-[38px] xs:w-[48px] sm:w-[120px] md:w-[210px] opacity-40 sm:opacity-100 pointer-events-none select-none"
      >
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[6%] left-[2%] sm:left-[6%] md:left-[10%] w-[32px] xs:w-[42px] sm:w-[100px] md:w-[180px] opacity-40 sm:opacity-100 pointer-events-none select-none"
      >
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[2%] sm:right-[2%] md:right-[4%] w-[40px] xs:w-[50px] sm:w-[120px] md:w-[210px] opacity-40 sm:opacity-100 pointer-events-none select-none"
      >
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[6%] right-[2%] sm:right-[6%] md:right-[10%] w-[40px] xs:w-[50px] sm:w-[130px] md:w-[220px] opacity-40 sm:opacity-100 pointer-events-none select-none"
      >
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" className="w-full h-auto" />
      </FadeIn>

      <FadeIn delay={0} y={40} className="text-center relative z-10">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.6rem, 11vw, 160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-12 sm:gap-20 md:gap-24 px-2">
        <AnimatedText
          text="I am an AI/ML Engineer Pursuing B.Tech In Computer Science Engineering (AI & Data Science) from Poornima University, Jaipur. I build predictive models, deep learning pipelines, and cloud-deployed AI APIs, with hands-on experience across full-stack development, NLP, and production-grade ML systems."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[580px]"
          style={{ fontSize: "clamp(0.95rem, 2vw, 1.35rem)" }}
        />
        <ContactButton />
      </div>
    </section>
  );
}
