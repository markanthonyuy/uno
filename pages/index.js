import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({})

  return (
    <motion.div
      className={`${styles.container} bg-gradient-to-r from-cyan-500 to-blue-500 py-4`}
    >
      <Head>
        <title>Uno | Luka Antonio Salvio I. Uy</title>
        <meta name="description" content="Uno's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        className={styles.main}
        onMouseMove={(e) => {
          setMousePosition({
            x: e.pageX,
            y: e.pageY,
          })
        }}
      >
        <motion.div
          className="absolute w-12 h-12 bg-lime-500 rounded-full z-50 opacity-50"
          animate={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 38,
          }}
          transition={{ type: 'spring' }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-red-500 rounded-full z-50 opacity-50"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 30,
          }}
          transition={{ type: 'tween' }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-yellow-500 rounded-full z-50 opacity-50"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 22,
          }}
          transition={{ delay: 0.1 }}
        />
        <div className="flex place-content-center px-4 mb-5">
          <motion.div
            className="inline-flex drop-shadow"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <Image
              src="/uno.jpg"
              width="400"
              height="280"
              className="rounded-lg"
              alt="Uno's Picture"
            />
          </motion.div>
        </div>

        <div className="text-center mb-10">
          <p className="text-gray-50 text-5xl font-bold">&quot;Uno&ldquo;</p>
          <p className="text-gray-300 text-lg tracking-wide">
            Luka Antonio Salvio I. Uy
          </p>
        </div>

        <div className="bg-white p-10 text-center">
          <p>Born ♂ June 2021 in Muntinlupa, PH</p>
        </div>

        <div className="p-14 text-center">
          <p className="text-gray-50 text-3xl font-bold">
            💉 Immunization Record
          </p>
        </div>

        <motion.div className="grid grid-cols-3 content-center gap-8 px-8">
          <Card
            name="Hepatitis B"
            brand="Hexaxim"
            dates={[
              'June 2021',
              'July 2021',
              'September 2021',
              'November 2021',
            ]}
          />
          <Card
            name="DtwP/DTaP"
            brand="Hexaxim"
            dates={['July 2021', 'September 2021', 'November 2021']}
          />
          <Card
            name="OPV/IPV"
            brand="Hexaxim"
            dates={['July 2021', 'September 2021', 'November 2021']}
          />
          <Card
            name="HiB"
            brand="Hexaxim"
            dates={['July 2021', 'September 2021', 'November 2021']}
          />
          <Card
            name="Rotavirus"
            brand="Rotateq"
            dates={['July 2021', 'September 2021', 'November 2021']}
          />
          <Card
            name="PCV 10/13"
            brand="Previnar 13"
            dates={['August 2021', 'October 2021', 'December 2021']}
          />
        </motion.div>
      </motion.main>
    </motion.div>
  )
}
