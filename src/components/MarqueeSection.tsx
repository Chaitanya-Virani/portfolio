import { useEffect, useRef, useState } from "react";

const techLogos = [
  { name: "Python", slug: "python" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "scikit-learn", slug: "scikitlearn" },
  { name: "FastAPI", slug: "fastapi" },
  { name: "OpenAI", slug: "openai" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "AWS", slug: "amazonwebservices" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "Linux", slug: "linux" },
  { name: "GitHub", slug: "github" },
  { name: "Vercel", slug: "vercel" },
  { name: "Tailwind", slug: "tailwindcss" },
];

const TechLogo = ({ name, slug }: { name: string; slug: string }) => (
  <div className="flex items-center gap-4 sm:gap-6 px-8 sm:px-12 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
    <img 
      src={`https://cdn.simpleicons.org/${slug}/white`} 
      alt={name} 
      className="h-10 w-10 sm:h-16 sm:w-16 object-contain" 
    />
    <span className="text-white font-bold text-2xl sm:text-4xl tracking-tight">{name}</span>
  </div>
);

export const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const sectionTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;

      const newOffset = (scrollY - sectionTop + innerHeight) * 0.3;
      setOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1 = techLogos.slice(0, 11);
  const row2 = techLogos.slice(11, 21);

  // Multiply arrays to ensure seamless scrolling
  const extendedRow1 = [...row1, ...row1, ...row1, ...row1];
  const extendedRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-16 overflow-hidden">
      <div className="text-center mb-16 sm:mb-20 px-6">
        <p className="text-[#D7E2EA]/60 text-sm sm:text-lg md:text-xl font-light tracking-wide">
          Powered by industry-leading technologies and agentic frameworks.
        </p>
      </div>

      <div ref={containerRef} className="relative flex flex-col gap-12 sm:gap-16">
        {/* Row 1 - Moves Right */}
        <div className="flex will-change-transform items-center"
             style={{ transform: `translateX(${offset - 1000}px)` }}>
          {extendedRow1.map((tech, index) => (
            <TechLogo key={index} name={tech.name} slug={tech.slug} />
          ))}
        </div>

        {/* Row 2 - Moves Left */}
        <div className="flex will-change-transform items-center"
             style={{ transform: `translateX(${-offset}px)` }}>
          {extendedRow2.map((tech, index) => (
            <TechLogo key={index} name={tech.name} slug={tech.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};