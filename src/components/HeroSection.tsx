import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./ContactButton";

export const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col overflow-x-clip main-wrapper">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="px-6 md:px-10 pt-6 md:pt-8 flex justify-between">
          <div className="flex space-x-8">
            <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              About
            </a>
            <a href="#price" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              Price
            </a>
            <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              Projects
            </a>
            <a href="#contact" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              Contact
            </a>
          </div>
        </nav>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.15} y={40}>
        <div className="overflow-hidden">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m jack
          </h1>
        </div>
      </FadeIn>

      {/* Bottom bar */}
      <FadeIn delay={0.35} y={20}>
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
          <div className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] clamp(0.75rem,1.4vw,1.5rem)">
            a 3d creator driven by crafting striking and unforgettable projects
          </div>
          <ContactButton className="" />
        </div>
      </FadeIn>

      {/* Portrait */}
      <FadeIn delay={0.6} y={30}>
        <div className="relative">
          <Magnet padding={150} strength={3}>
            <img
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
              alt="Jack portrait"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
            />
          </Magnet>
        </div>
      </FadeIn>
    </div>
  );
};