import { motion } from 'framer-motion'

export default function Card({ name, brand, dates, reaction = 'No reaction' }) {
  const container = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1.2,
        delay: 0.8,
      },
    },
  }

  const item = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <motion.div
      className="flex justify-between flex-col bg-white p-3 shadow-md rounded-lg border-blue-400 border"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex justify-between">
        <p className="">
          {name} <span className="text-gray-500 text-xs">({brand})</span>
        </p>
        <div className="flex flex-col text-right text-xs">
          {dates.map((date, key) => (
            <motion.span className="text-blue-500" key={key} variants={item}>
              {date}
            </motion.span>
          ))}
        </div>
      </div>
      <p className="italic text-xs text-gray-500 border-gray-200 border-t pt-2 mt-2">
        Remarks: {reaction}
      </p>
    </motion.div>
  )
}
