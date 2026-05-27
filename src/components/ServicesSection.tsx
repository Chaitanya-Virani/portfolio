import { FadeIn } from "./FadeIn";

const servicesData = [
  { id: 1, number: "01", title: "3D Modeling", description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations." },
  { id: 2, number: "02", title: "Rendering", description: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life." },
  { id: 3, number: "03", title: "Motion Design", description: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences." },
  { id: 4, number: "04", title: "Branding", description: "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence." },
  { id: 5, number: "05", title: "Web Design", description: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience." }
];

export const ServicesSection = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={20}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center clamp(3rem,12vw,160px) mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {servicesData.map((service, index) => (
          <div key={service.id} className="border-b border-[rgba(12,12,12,0.15)]">
            <FadeIn delay={index * 0.1} y={10}>
              <div className="flex items-start gap-8 py-8 sm:py-10 md:py-12">
                <div className="font-black text-[#0C0C0C] leading-none clamp(3rem,10vw,140px)">
                  {service.number}
                </div>
                <div className="flex col">
                  <h3 className="font-medium uppercase clamp(1rem,2.2vw,2.1rem)">
                    {service.title}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl clamp(0.85rem,1.6vw,1.25rem) opacity-60">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
};