import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-clip main-wrapper relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center">
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

      {/* Heading with 3D portrait inline */}
      <FadeIn delay={0.15} y={40}>
        <div className="overflow-hidden px-6 md:px-10">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] mt-6 sm:mt-4 md:-mt-2 flex items-center">
            <span>Hi, i&apos;m</span>
            <FadeIn delay={0.6} y={30}>
              <Magnet padding={200} strength={3}>
                <img
                  src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                  alt="Chaitanya portrait"
                  className="w-[80px] sm:w-[120px] md:w-[160px] lg:w-[200px] mx-2 sm:mx-4 md:mx-6 inline-block rounded-full object-cover"
                />
              </Magnet>
            </FadeIn>
          </h1>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] -mt-1 sm:-mt-2 md:-mt-4">
            chaitanya
          </h1>
        </div>
      </FadeIn>

      {/* Spacer to push bottom bar down */}
      <div className="flex-1" />

      {/* Bottom bar */}
      <FadeIn delay={0.35} y={20}>
        <div className="pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
          <div className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            AN AI ENGINEER OBSESSED WITH AGENTS THAT ACT
          </div>
        </div>
      </FadeIn>
    </div>
  );
};