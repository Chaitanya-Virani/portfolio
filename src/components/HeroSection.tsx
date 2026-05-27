import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip main-wrapper">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center">
          <div className="flex space-x-8">
            <a href="#about" className="text-[var(--color-text-primary)] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-60 transition-all duration-300 ease-[var(--ease-quint)] hover:translate-y-[-2px]">
              About
            </a>
            <a href="#projects" className="text-[var(--color-text-primary)] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-60 transition-all duration-300 ease-[var(--ease-quint)] hover:translate-y-[-2px]">
              Projects
            </a>
            <a href="#skills" className="text-[var(--color-text-primary)] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-60 transition-all duration-300 ease-[var(--ease-quint)] hover:translate-y-[-2px]">
              Skills
            </a>
            <a href="#contact" className="text-[var(--color-text-primary)] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-60 transition-all duration-300 ease-[var(--ease-quint)] hover:translate-y-[-2px]">
              Contact
            </a>
          </div>
        </nav>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.15} y={40}>
        <div className="overflow-hidden">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m chaitanya
          </h1>
        </div>
      </FadeIn>

      {/* Bottom bar */}
      <FadeIn delay={0.35} y={20}>
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
          <div className="text-[var(--color-text-secondary)] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            AN AI ENGINEER OBSESSED WITH AGENTS THAT ACT
          </div>
          <ContactButton className="" />
        </div>
      </FadeIn>

      {/* Portrait */}
      <FadeIn delay={0.6} y={30}>
        <div className="relative flex justify-center w-full">
          <Magnet padding={200} strength={3}>
            <img
              src="https://higgsfield.ai/media/67890abc-1234-5678-90ab-cdef12345678"
              alt="Chaitanya portrait"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
            />
          </Magnet>
        </div>
      </FadeIn>
    </div>
  );
};