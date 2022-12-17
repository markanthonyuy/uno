import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'

const HeaderImage = () => {
  return (
    <div
      className={`${styles.header} flex flex-col place-content-center h-screen py-4`}
    >
      <div className="flex place-content-center px-4 mb-10">
        <motion.div
          className="inline-flex drop-shadow"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Image
            src="/uno.jpg"
            width="700"
            height="450"
            className="rounded-lg pointer-events-none"
            alt="Uno's Picture"
          />
        </motion.div>
      </div>

      <div className="text-center">
        <p className="text-gray-50 text-5xl font-bold">&quot;Uno&quot;</p>
        <p className="text-gray-300 text-lg tracking-wide">
          Luka Antonio Salvio I. Uy
        </p>
      </div>
    </div>
  )
}

export default HeaderImage
