import { motion } from "framer-motion";

export const Yellow = ({ mousePosition }) => {
  return (
    <motion.div
      className="absolute w-4 h-4 bg-yellow-500 rounded-full z-50 opacity-50 pointer-events-none"
      animate={{
        x: mousePosition.x - 8,
        y: mousePosition.y - 10,
      }}
      transition={{ delay: 0.1 }}
    />
  );
};
