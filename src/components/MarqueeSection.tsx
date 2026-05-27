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

// OpenAI SVG is not available on SimpleIcons CDN — embed inline
const openaiSvgDataUri = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>')}`;

const TechLogo = ({ name, slug }: { name: string; slug: string }) => (
  <div className="flex items-center gap-4 sm:gap-6 px-8 sm:px-12 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300">
    <img 
      src={slug === "openai" ? openaiSvgDataUri : `https://cdn.simpleicons.org/${slug}/white`} 
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