import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface AnimatedTextProps {
  children: string;
  className?: string;
}

export const AnimatedText = ({ children, className = "" }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = children.split("");

  return (
    <motion.p ref={ref} className={className}>
      {chars.map((char, index) => (
        <AnimatedChar
          key={index}
          char={char}
          index={index}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </motion.p>
  );
};

const AnimatedChar = ({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: any;
}) => {
  const start = index / total;
  const end = Math.min(start + 1 / total + 0.1, 1);
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to preserve layout */}
      <span className="invisible">{char === " " ? "\u00A0" : char}</span>
      {/* Animated overlay */}
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
        aria-hidden="true"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
};