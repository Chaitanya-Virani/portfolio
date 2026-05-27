import { motion } from "framer-motion";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton = ({ className = "" }: ContactButtonProps) => {
  return (
    <motion.button
      className={`${className} rounded-full bg-gradient-to-tr from-[#18011F] via-[#B600A8] to-[#7621B0] bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)]
      shadow-[0px_4px_4px_rgba(181,1,167,0.25)] inset-shadow-[4px_4px_12px_#7721B1]
      outline-outline-offset-[-3px] outline-2 outline-white
      text-white font-medium uppercase tracking-widest
      px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
      text-xs sm:text-sm md:text-base`}
    >
      Contact Me
    </motion.button>
  );
};