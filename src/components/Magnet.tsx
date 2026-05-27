import { motion, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}: MagnetProps) => {
  const [style, setStyle] = useState({ transform: "translate3d(0, 0, 0)" });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const distance = Math.sqrt(x * x + y * y);
      if (distance < padding) {
        const translateX = (x * strength) / distance;
        const translateY = (y * strength) / distance;
        setStyle({
          transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
          transition: activeTransition,
        });
      } else {
        setStyle({
          transform: "translate3d(0, 0, 0)",
          transition: inactiveTransition,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <motion.div ref={elementRef} style={style}>
      {children}
    </motion.div>
  );
};