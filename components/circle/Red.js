import { motion } from "framer-motion";

export const Red = ({ mousePosition }) => {
  return (
    <motion.div
      className="absolute w-8 h-8 bg-red-500 rounded-full z-50 opacity-50 pointer-events-none"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 18,
      }}
      transition={{ type: "tween" }}
    />
  );
};
