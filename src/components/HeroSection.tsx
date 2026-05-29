import { useState, useEffect } from "react";
import { FadeIn } from "./FadeIn";
import { SplineHero } from "./SplineHero";

const NAV_LINKS = [
  { href: "#about",    label: "About" },
  { href: "#skills",   label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact",  label: "Contact" },
];

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDesktop;
};

export const HeroSection = () => {
  const isDesktop = useIsDesktop();

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip main-wrapper relative">

      {/* ── Navbar ── */}
      <FadeIn delay={0} y={-20}>
        <nav className="px-5 sm:px-8 md:px-10 pt-5 sm:pt-6 md:pt-8 flex items-center relative z-10">
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider
                           text-xs sm:text-sm md:text-lg lg:text-[1.4rem]
                           hover:opacity-60 transition-all duration-300 hover:-translate-y-0.5"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* ── 3-D robot — desktop only, conditionally rendered to avoid mobile iframe load ── */}
      {isDesktop && (
        <div className="absolute inset-y-0 right-0 w-[60%] lg:w-[55%] z-0 pointer-events-auto">
          <SplineHero />
        </div>
      )}

      {/* Spacer pushes text to bottom on desktop */}
      <div className="flex-1" />

      {/* ── Heading ── */}
      <FadeIn delay={0.15} y={40}>
        <div className="relative z-10 overflow-hidden px-5 sm:px-8 md:px-10 pb-1 md:pb-2">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none
                         text-[14vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw]">
            Hi, i&apos;m
          </h1>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none
                         text-[14vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw]
                         -mt-1 sm:-mt-2 md:-mt-4">
            chaitanya
          </h1>
        </div>
      </FadeIn>

      {/* ── Tagline ── */}
      <FadeIn delay={0.35} y={20}>
        <div className="relative z-10 pb-8 sm:pb-9 md:pb-10 px-5 sm:px-8 md:px-10">
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
                        max-w-[200px] sm:max-w-[240px] md:max-w-[260px]
                        text-[clamp(0.65rem,2.5vw,1rem)] md:text-[clamp(0.75rem,1.4vw,1.5rem)]">
            An AI engineer obsessed with agents that act
          </p>
        </div>
      </FadeIn>
    </div>
  );
};
