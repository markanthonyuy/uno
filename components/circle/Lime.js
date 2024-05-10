import { motion } from "framer-motion";

export const Lime = ({ mousePosition }) => {
  return (
    <motion.div
      className="absolute w-12 h-12 bg-lime-500 rounded-full z-50 opacity-50 pointer-events-none"
      animate={{
        x: mousePosition.x - 24,
        y: mousePosition.y - 26,
      }}
      transition={{ type: "spring" }}
    />
  );
};
