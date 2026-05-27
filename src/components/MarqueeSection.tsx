import { useEffect, useRef, useState } from "react";

const gifUrls = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1518932945647-7a3c96943e28?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1531297172864-45d06140c4b0?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1580894732444-8ecbef79bd1d?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=420&h=270&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=420&h=270&q=80"
];

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

  // Triple the GIFs for seamless looping
  const tripledGifs = [...gifUrls, ...gifUrls, ...gifUrls];

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10">
      <div ref={containerRef} className="relative overflow-hidden">
        {/* Row 1 */}
        <div className="flex gap-3 will-change-transform"
             style={{ transform: `translateX(${offset - 200}px)` }}>
          {tripledGifs.slice(0, 33).map((url, index) => (
            <img
              key={index}
              src={url}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-3 will-change-transform"
             style={{ transform: `translateX(${-offset + 200}px)` }}>
          {tripledGifs.slice(11, 44).map((url, index) => (
            <img
              key={index}
              src={url}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};