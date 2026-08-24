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
      className="min-h-[100dvh] sm:h-screen flex flex-col relative"
      style={{ overflowX: "clip" }}
    >
      {/* Navbar */}
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex items-center justify-between md:justify-start px-4 sm:px-6 md:px-10 pt-5 sm:pt-6 md:pt-8 relative z-20 w-full"
      >
        {/* Desktop Links (md and up) */}
        <div className="hidden md:flex items-center gap-6 md:gap-8 lg:gap-12">
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
          className="md:hidden ml-auto text-[#D7E2EA] hover:opacity-70 transition-opacity p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none cursor-pointer"
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
              className="fixed inset-0 bg-black/75 backdrop-blur-md z-40 md:hidden"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-[300px] bg-[#0C0C0C]/98 border-l border-white/10 backdrop-blur-xl p-6 sm:p-8 z-50 md:hidden flex flex-col justify-between"
            >
              <div>
                {/* Close Button */}
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-[#D7E2EA] hover:opacity-70 transition-opacity p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none cursor-pointer"
                    aria-label="Close Menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-5 mt-4">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="
                        text-[#D7E2EA]
                        font-semibold
                        uppercase
                        tracking-widest
                        text-base sm:text-lg
                        hover:text-white
                        transition-colors duration-200
                        py-2
                        border-b border-white/5
                      "
                    >
                      {link}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Bottom Drawer Quick CTA */}
              <div className="pt-6 border-t border-white/10 flex justify-center">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full bg-white/10 text-white font-medium uppercase tracking-wider text-xs border border-white/15"
                >
                  Get in touch
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Title */}
      <div className="overflow-hidden mt-4 sm:mt-4 md:-mt-5 px-3 sm:px-4">
        <FadeIn delay={0.15} y={40}>
          <h1
            className="
              hero-heading
              font-black
              uppercase
              tracking-tight
              leading-[0.92]
              w-full
              text-[13.5vw]
              xs:text-[13vw]
              sm:text-[13vw]
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
          gap-5 sm:gap-0
          pb-6
          sm:pb-8
          md:pb-10
          px-4
          sm:px-6
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
              max-w-[170px]
              xs:max-w-[200px]
              sm:max-w-[220px]
              md:max-w-[260px]
            "
            style={{
              fontSize: "clamp(0.7rem, 1.4vw, 1.5rem)",
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
          bottom-4
          sm:bottom-0
          w-[190px]
          xs:w-[230px]
          sm:w-[360px]
          md:w-[440px]
          lg:w-[520px]
          pointer-events-none
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