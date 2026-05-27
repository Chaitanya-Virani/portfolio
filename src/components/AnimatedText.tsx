import { useRef, useEffect } from "react";
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

  const charSpans = children.split("").map((char, index) => {
    const charIndex = useTransform(
      scrollYProgress,
      [0, 1],
      [0.2, 1]
    );

    return (
      <motion.span
        key={index}
        style={{ opacity: charIndex }}
        className="inline-block"
      >
        {char}
      </motion.span>
    );
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.style.visibility = "hidden";
      ref.current.style.position = "relative";
    }
  }, []);

  return (
    <motion.div ref={ref} className={className}>
      <span aria-hidden="true">{charSpans}</span>
    </motion.div>
  );
};