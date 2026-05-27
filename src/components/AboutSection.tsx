import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./ContactButton";

export const AboutSection = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-5 sm:px-8 md:px-10 py-20">
      {/* Corner decorative images */}
      <FadeIn delay={0.1} duration={0.9} x={-80}>
          <img
            src="https://higgsfield.ai/media/12345678-abcd-efgh-ijkl-9876543210ab"
            alt="moon"
            className="absolute w-[120px] sm:w-[160px] md:w-[210px] top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
          />
      </FadeIn>

      <FadeIn delay={0.25} duration={0.9} x={-80}>
          <img
            src="https://higgsfield.ai/media/abcdef12-3456-7890-abcd-ef1234567890"
            alt="p59"
            className="absolute w-[100px] sm:w-[140px] md:w-[180px] bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
          />
      </FadeIn>

      <FadeIn delay={0.15} duration={0.9} x={80}>
          <img
            src="https://higgsfield.ai/media/fecba987-6543-2109-8765-43210fedcba9"
            alt="lego"
            className="absolute w-[120px] sm:w-[160px] md:w-[210px] top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
          />
      </FadeIn>

      <FadeIn delay={0.3} duration={0.9} x={80}>
          <img
            src="https://higgsfield.ai/media/98765432-10ab-cdef-ghij-klmnopqrstuv"
            alt="group"
            className="absolute w-[130px] sm:w-[170px] md:w-[220px] bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
          />
      </FadeIn>

      {/* Center content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <AnimatedText
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          >
            An ICT student obsessed with building AI systems that don't just predict — they act. i focus on agentic pipelines, real-time automation, and embedded intelligence. Let's build something that thinks together!
          </AnimatedText>
        </FadeIn>

        <FadeIn delay={0.2} y={10}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};