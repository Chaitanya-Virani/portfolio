import { useEffect, useRef, useState } from "react";

const techs = [
  { name: "Anthropic",    slug: "anthropic" },
  { name: "OpenAI",       slug: "openai" },
  { name: "AWS",          slug: "amazonwebservices" },
  { name: "Azure",        slug: "microsoftazure" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "Python",       slug: "python" },
  { name: "FastAPI",      slug: "fastapi" },
  { name: "React",        slug: "react" },
  { name: "TypeScript",   slug: "typescript" },
  { name: "Next.js",      slug: "nextdotjs" },
  { name: "Docker",       slug: "docker" },
  { name: "Kubernetes",   slug: "kubernetes" },
  { name: "PostgreSQL",   slug: "postgresql" },
  { name: "Redis",        slug: "redis" },
  { name: "PyTorch",      slug: "pytorch" },
  { name: "TensorFlow",   slug: "tensorflow" },
  { name: "Hugging Face", slug: "huggingface" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Vercel",       slug: "vercel" },
  { name: "MongoDB",      slug: "mongodb" },
  { name: "Supabase",     slug: "supabase" },
  { name: "Scikit-learn", slug: "scikitlearn" },
  { name: "LangChain",    slug: "langchain" },
  { name: "GitHub",       slug: "github" },
  { name: "Node.js",      slug: "nodedotjs" },
  { name: "Ollama",       slug: "ollama" },
];

// brightness(0) collapses every brand colour to black, invert(1) flips it to white.
// This works on any SimpleIcons SVG regardless of brand colour or CDN version.
const ICON_FILTER = "brightness(0) invert(1)";

const LogoCard = ({ name, slug }: { name: string; slug: string }) => (
  <div className="flex-shrink-0 flex flex-col items-center justify-center gap-3 w-[180px] h-[120px]">
    <img
      src={`https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`}
      alt={name}
      loading="lazy"
      className="h-14 w-auto"
      style={{ filter: ICON_FILTER }}
    />
    <span className="text-[rgba(215,226,234,0.4)] text-[0.6rem] uppercase tracking-widest font-mono">
      {name}
    </span>
  </div>
);

export const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const sectionTop =
        containerRef.current.getBoundingClientRect().top + window.scrollY;
      const newOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(newOffset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tripled = [...techs, ...techs, ...techs];

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10">
      <div ref={containerRef} className="relative overflow-hidden">
        {/* Row 1 — drifts right on scroll */}
        <div
          className="flex gap-3 mb-3 will-change-transform"
          style={{ transform: `translateX(${offset - 200}px)` }}
        >
          {tripled.slice(0, 52).map((tech, i) => (
            <LogoCard key={i} {...tech} />
          ))}
        </div>

        {/* Row 2 — drifts left on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{ transform: `translateX(${-offset + 200}px)` }}
        >
          {tripled.slice(10, 62).map((tech, i) => (
            <LogoCard key={i} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};
