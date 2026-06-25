import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";
import aminePortrait from "@/assets/amine.png";

const NAV_LINKS = [
  "About",
  "Skills",
  "Experience",
  "Services",
  "Projects",
  "Contact",
];

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: "clip" }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 relative z-20 w-full"
      >
        {/* Monogram/Logo */}
        <a
          href="#"
          className="
            text-[#D7E2EA]
            font-bold
            tracking-wider
            text-lg
            md:text-xl
            uppercase
            hover:opacity-80
            transition-opacity
          "
        >
          KST
        </a>

        {/* Desktop Links (md and up) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
                text-[#D7E2EA]
                font-medium
                uppercase
                tracking-wider
                text-sm
                md:text-lg
                lg:text-[1.4rem]
                hover:opacity-70
                transition-opacity duration-200
              "
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-[#D7E2EA] hover:opacity-70 transition-opacity p-2 focus:outline-none cursor-pointer"
          aria-label="Open Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </FadeIn>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-3/4 max-w-[280px] bg-[#0C0C0C]/95 border-l border-white/10 backdrop-blur-xl p-8 z-50 md:hidden flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-[#D7E2EA] hover:opacity-70 transition-opacity p-2 focus:outline-none cursor-pointer"
                  aria-label="Close Menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 mt-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="
                      text-[#D7E2EA]
                      font-semibold
                      uppercase
                      tracking-widest
                      text-lg
                      hover:text-white
                      transition-colors duration-200
                      pb-2
                      border-b border-white/5
                    "
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Title */}
      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5 px-2">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="
              hero-heading
              font-black
              uppercase
              tracking-tight
              leading-[0.95]
              w-full
              text-[15vw]
              sm:text-[13.5vw]
              md:text-[14.5vw]
              lg:text-[15.5vw]
              break-words
              sm:whitespace-nowrap
            "
          >
            <span className="block sm:inline">Hi, i&apos;m</span>{" "}
            <span className="block sm:inline">kunal</span>
          </h1>
        </FadeIn>
      </div>

      {/* Description + Button */}
      <div
        className="
          mt-auto
          flex
          flex-col sm:flex-row
          justify-between
          items-start sm:items-end
          gap-6 sm:gap-0
          pb-7
          sm:pb-8
          md:pb-10
          px-6
          md:px-10
          relative
          z-20
        "
      >
        <FadeIn delay={0.35} y={20}>
          <p
            className="
              text-[#D7E2EA]
              font-light
              uppercase
              tracking-wide
              leading-snug
              max-w-[160px]
              sm:max-w-[220px]
              md:max-w-[260px]
            "
            style={{
              fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)",
            }}
          >
            machine learning developer & full-stack engineer
            building AI-powered applications
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="
          absolute
          left-1/2
          -translate-x-1/2
          z-10
          top-1/2
          -translate-y-1/2
          sm:top-auto
          sm:translate-y-0
          sm:bottom-0
          w-[220px]
          sm:w-[360px]
          md:w-[440px]
          lg:w-[520px]
        "
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src={aminePortrait}
            alt="Kunal Singh Tanwar portrait"
            className="w-full h-auto select-none pointer-events-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}