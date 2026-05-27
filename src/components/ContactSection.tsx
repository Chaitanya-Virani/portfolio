import { FadeIn } from "./FadeIn";
import { ContactButton } from "./ContactButton";

export const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-32 md:py-40">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-8 sm:mb-12 md:mb-16">
            Let&apos;s Talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={20}>
          <p className="text-[#D7E2EA] font-light text-[clamp(1rem,2vw,1.35rem)] leading-relaxed max-w-[520px] mb-12 sm:mb-16 md:mb-20">
            Have a project in mind or want to collaborate on something that thinks? Drop me a message.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <a href="mailto:chaitanya@example.com">
            <ContactButton />
          </a>
        </FadeIn>

        <FadeIn delay={0.4} y={10}>
          <div className="mt-16 sm:mt-20 md:mt-24 flex gap-8 sm:gap-12">
            <a
              href="https://github.com/Chaitanya-Virani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7E2EA]/60 font-medium uppercase tracking-wider text-sm hover:text-[#D7E2EA] transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7E2EA]/60 font-medium uppercase tracking-wider text-sm hover:text-[#D7E2EA] transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:chaitanya@example.com"
              className="text-[#D7E2EA]/60 font-medium uppercase tracking-wider text-sm hover:text-[#D7E2EA] transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={0}>
          <p className="mt-16 text-[#D7E2EA]/30 text-xs uppercase tracking-widest">
            © 2026 Chaitanya Virani. All rights reserved.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
