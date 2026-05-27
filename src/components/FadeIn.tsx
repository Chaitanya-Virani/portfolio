import { motion, UseViewportProps } from "framer-motion";
import { useEffect } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
}: FadeInProps) => {
  const viewport: UseViewportProps = {
    once: true,
    margin: "50px",
    amount: 0,
  };

  return (
    <motion.div
      whileInView="viewport"
      viewport={viewport}
      initial={{ x, y, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1, transition: { delay, duration, ease: [0.25, 0.1, 0.25, 1] } }}
    >
      {children}
    </motion.div>
  );
};