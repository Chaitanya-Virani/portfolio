import { motion } from "framer-motion";

interface LiveProjectButtonProps {
  className?: string;
  githubHref?: string;
  liveHref?: string;
}

const linkClass =
  "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest hover:bg-[#D7E2EA]/10 px-5 py-2 sm:px-7 sm:py-2.5 text-xs sm:text-sm transition-colors";

export const LiveProjectButton = ({
  className = "",
  githubHref,
  liveHref,
}: LiveProjectButtonProps) => {
  return (
    <div className={`${className} flex flex-wrap gap-2`}>
      {githubHref && (
        <motion.a
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          GitHub
        </motion.a>
      )}
      {liveHref && (
        <motion.a
          href={liveHref}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Live Project
        </motion.a>
      )}
    </div>
  );
};
