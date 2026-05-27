import { FadeIn } from "./FadeIn";

const servicesData = [
  { id: 1, number: "01", title: "Agentic AI Systems", description: "Design and build multi-agent pipelines that plan, reason, and act autonomously on real-world tasks." },
  { id: 2, number: "02", title: "Real-Time ML Backends", description: "FastAPI + scikit-learn inference systems with live retraining, drift detection, and admin dashboards." },
  { id: 3, number: "03", title: "Embedded AI", description: "Deploy intelligence onto constrained hardware — ESP32, edge devices, and custom communication protocols." },
  { id: 4, number: "04", title: "Automation Pipelines", description: "End-to-end workflow automation connecting APIs, models, and databases into self-running systems." },
  { id: 5, number: "05", title: "Interactive AI Interfaces", description: "Live, streaming front-ends that make AI output legible, beautiful, and actually usable." }
];

export const ServicesSection = () => {
  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={20}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {servicesData.map((service, index) => (
          <div key={service.id} className="border-b border-[rgba(12,12,12,0.15)]">
            <FadeIn delay={index * 0.1} y={10}>
              <div className="flex items-start gap-8 py-8 sm:py-10 md:py-12">
                <div className="font-black text-[#0C0C0C] leading-none text-[clamp(3rem,10vw,140px)]">
                  {service.number}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                    {service.title}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
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