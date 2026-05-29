import { FadeIn } from "./FadeIn";
import { SplineHero } from "./SplineHero";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip main-wrapper relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center relative z-10">
          <div className="flex space-x-8">
            <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-60 transition-all duration-300 hover:translate-y-[-2px]">
              About
            </a>
            <a href="#skills" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-60 transition-all duration-300 hover:translate-y-[-2px]">
              Skills
            </a>
            <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-60 transition-all duration-300 hover:translate-y-[-2px]">
              Projects
            </a>
            <a href="#contact" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-60 transition-all duration-300 hover:translate-y-[-2px]">
              Contact
            </a>
          </div>
        </nav>
      </FadeIn>

      {/* 3D robot — fills the right side, absolutely positioned */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[55%] pointer-events-none md:pointer-events-auto z-0">
        <SplineHero />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Heading — bottom-left, above the robot */}
      <FadeIn delay={0.15} y={40}>
        <div className="relative z-10 overflow-hidden px-6 md:px-10 pb-2">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw]">
            Hi, i&apos;m
          </h1>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] -mt-1 sm:-mt-2 md:-mt-4">
            chaitanya
          </h1>
        </div>
      </FadeIn>

      {/* Bottom bar */}
      <FadeIn delay={0.35} y={20}>
        <div className="relative z-10 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <div className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            AN AI ENGINEER OBSESSED WITH AGENTS THAT ACT
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
