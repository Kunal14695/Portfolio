import { FadeIn } from "./FadeIn";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export function FooterSection() {
  return (
    <footer className="bg-[#0C0C0C] px-4 sm:px-8 md:px-10 pt-16 sm:pt-24 pb-8 sm:pb-10" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* CTA */}
        <FadeIn y={40}>
          <h2
            className="
              hero-heading
              font-black
              uppercase
              leading-none
              tracking-tight
              text-white
              text-center
            "
            style={{
              fontSize: "clamp(2.2rem, 8.5vw, 8rem)",
            }}
          >
            Let's Build
            <br />
            Something Amazing
          </h2>
        </FadeIn>

        {/* Contact Button */}
        <FadeIn delay={0.2} y={30}>
          <div className="flex justify-center mt-8 sm:mt-12">
            <a
              href="mailto:kunalsingtanwar355@gmail.com"
              className="
                px-8 py-3.5 sm:px-10 sm:py-5
                rounded-full
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-md
                text-white
                uppercase
                tracking-[0.2em] sm:tracking-[0.25em]
                font-medium
                text-xs sm:text-sm
                transition-all duration-300
                hover:bg-white/[0.08]
                hover:border-white/20
                hover:-translate-y-1
                active:scale-95
              "
            >
              Get In Touch
            </a>
          </div>
        </FadeIn>

        {/* Email */}
        <FadeIn delay={0.3} y={20}>
          <div className="mt-10 sm:mt-14 flex justify-center px-2">
            <a
              href="mailto:kunalsingtanwar355@gmail.com"
              className="
                flex items-center gap-2 sm:gap-3
                text-white/70
                hover:text-white
                transition-all
                text-center
              "
            >
              <FaEnvelope size={18} className="shrink-0" />
              <span className="text-xs sm:text-base md:text-lg break-all">
                kunalsingtanwar355@gmail.com
              </span>
            </a>
          </div>
        </FadeIn>

        {/* Socials */}
        <FadeIn delay={0.4} y={20}>
          <div className="flex justify-center gap-6 sm:gap-8 mt-8 sm:mt-12">
            <a
              href="https://github.com/Kunal14695"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="
                text-white/60
                hover:text-white
                hover:scale-110
                transition-all duration-300
                p-2
              "
            >
              <FaGithub size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/kunal-singh-tanwar-321031291"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="
                text-white/60
                hover:text-white
                hover:scale-110
                transition-all duration-300
                p-2
              "
            >
              <FaLinkedin size={26} />
            </a>

            <a
              href="https://instagram.com/kunal_singh_tanwar_14"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Profile"
              className="
                text-white/60
                hover:text-white
                hover:scale-110
                transition-all duration-300
                p-2
              "
            >
              <FaInstagram size={26} />
            </a>
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="h-px bg-white/10 mt-16 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-sm">
            © 2026 Kunal Singh Tanwar. All rights reserved.
          </span>

          <span className="text-white/40 text-sm uppercase tracking-[0.2em]">
            Designed & Developed by Kunal
          </span>
        </div>
      </div>
    </footer>
  );
}