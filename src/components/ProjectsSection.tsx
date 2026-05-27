import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projectsData = [
  {
    id: 1,
    number: "01",
    category: "Personal",
    title: "Customer Insight Triage System",
    liveUrl: "https://cits-u9pn.onrender.com/",
    githubUrl: "https://github.com/Chaitanya-Virani/CITS",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: 2,
    number: "02",
    category: "Personal",
    title: "ESP32 Wireless Walkie-Talkie",
    githubUrl: "https://github.com/Chaitanya-Virani/ESP32_WALKIE-TALKIE",
    images: [
      "/projects/esp32-diagram.png",
      "/projects/esp32-hardware.png"
    ]
  }
];

const ProjectCard = ({ project, index, progress, targetScale }: any) => {
  const range = [index * 0.33, 1];
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div 
      className="h-[85vh] w-full flex items-start justify-center sticky"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div 
        style={{ 
          scale,
          transformOrigin: "top center"
        }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-2xl"
      >
        {/* Top row */}
        <div className="flex items-start gap-4 mb-4">
          <div className="font-black text-white text-[clamp(3rem,10vw,140px)] leading-none">
            {project.number}
          </div>
          <div className="flex flex-col flex-1">
            <span className="text-[rgba(215,226,234,0.6)] text-xs uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-white font-black text-xl tracking-tight">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-3 mt-4">
              {project.liveUrl && (
                <LiveProjectButton href={project.liveUrl} label="Live Project" />
              )}
              {project.githubUrl && (
                <LiveProjectButton href={project.githubUrl} label="GitHub" />
              )}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex gap-4">
          {project.images.length === 2 ? (
            <>
              {/* 2-image layout (e.g. ESP32 Walkie-Talkie) */}
              <div className="w-[50%]">
                <img
                  src={project.images[0]}
                  alt=""
                  loading="lazy"
                  className="w-full h-[clamp(260px,35vw,480px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                />
              </div>
              <div className="w-[50%]">
                <img
                  src={project.images[1]}
                  alt=""
                  loading="lazy"
                  className="w-full h-[clamp(260px,35vw,480px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                />
              </div>
            </>
          ) : (
            <>
              {/* 3-image layout */}
              <div className="w-[40%] flex flex-col gap-3">
                <img
                  src={project.images[0]}
                  alt=""
                  loading="lazy"
                  className="w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                />
                <img
                  src={project.images[1]}
                  alt=""
                  loading="lazy"
                  className="w-full h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                />
              </div>
              <div className="w-[60%]">
                <img
                  src={project.images[2]}
                  alt=""
                  loading="lazy"
                  className="w-full h-[clamp(260px,35vw,480px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
                />
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" ref={containerRef} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={20}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          Projects
        </h2>
      </FadeIn>

      <div className="relative">
        {projectsData.map((project, index) => {
          const targetScale = 1 - (projectsData.length - 1 - index) * 0.03;
          return (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              progress={scrollYProgress} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};