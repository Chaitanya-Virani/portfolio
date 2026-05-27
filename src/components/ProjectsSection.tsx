import { FadeIn } from "./FadeIn";
import { LiveProjectButton } from "./LiveProjectButton";
import { useEffect, useState } from "react";

const projectsData = [
  {
    id: 1,
    number: "01",
    category: "Personal",
    title: "Customer Insight Triage System",
    images: [
      "https://higgsfield.ai/media/bcda1234-5678-90ab-cdef-1234567890ab",
      "https://higgsfield.ai/media/deadbeef-cafe-babe-1234-567890abcdef",
      "https://higgsfield.ai/media/11223344-5566-7788-9900-aabbccddeeff"
    ]
  },
  {
    id: 2,
    number: "02",
    category: "Personal",
    title: "ESP32 Wireless Walkie-Talkie",
    images: [
      "https://higgsfield.ai/media/ffeeddcc-bbaa-9988-7766-554433221100",
      "https://higgsfield.ai/media/00112233-4455-6677-8899-aabbccddeeff",
      "https://higgsfield.ai/media/abcdef01-2345-6789-abcd-ef0123456789"
    ]
  },
  {
    id: 3,
    number: "03",
    category: "In Progress",
    title: "Multi-Agent Research Assistant",
    images: [
      "https://higgsfield.ai/media/bcda1234-5678-90ab-cdef-1234567890ab",
      "https://higgsfield.ai/media/ffeeddcc-bbaa-9988-7766-554433221100",
      "https://higgsfield.ai/media/11223344-5566-7788-9900-aabbccddeeff"
    ]
  }
];

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({ project, index, progress, targetScale }: any) => {
  // Use the global section progress to trigger the scale down.
  // Card 0 starts scaling when progress is 0, Card 1 at 0.33, etc.
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
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[var(--color-border)] bg-[#0C0C0C]/80 backdrop-blur-md p-4 sm:p-6 md:p-8 shadow-2xl"
      >
        {/* Top row */}
        <div className="flex items-start gap-4 mb-4">
          <div className="font-black text-white text-[clamp(3rem,10vw,140px)] leading-none">
            {project.number}
          </div>
          <div className="flex flex-col">
            <span className="text-[rgba(215,226,234,0.6)] text-xs uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-white font-black text-xl tracking-tight">
              {project.title}
            </h3>
            <LiveProjectButton className="mt-2" />
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex gap-4">
          {/* Left column with 2 stacked images */}
          <div className="w-[40%] flex flex-col gap-3">
            <img
              src={project.images[0]}
              alt=""
              className="w-full h-[clamp(130px,16vw,230px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
            />
            <img
              src={project.images[1]}
              alt=""
              className="w-full h-[clamp(160px,22vw,340px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
            />
          </div>

          {/* Right column with 1 tall image */}
          <div className="w-[60%]">
            <img
              src={project.images[2]}
              alt=""
              className="w-full h-[clamp(260px,35vw,480px)] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
            />
          </div>
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
    <section ref={containerRef} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={20}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          Project
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