import { motion } from "framer-motion";

interface LiveProjectButtonProps {
  className?: string;
  href: string;
  label?: string;
}

export const LiveProjectButton = ({ className = "", href, label = "Live Project" }: LiveProjectButtonProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${className} inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
      font-medium uppercase tracking-widest text-center cursor-pointer
      hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors duration-300
      px-5 py-2 sm:px-6 sm:py-2.5
      text-[10px] sm:text-xs`}
    >
      {label}
    </motion.a>
  );
};