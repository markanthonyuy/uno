import { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import HeaderImage from '../components/HeaderImage'

export function getServerSideProps() {
  const immunizationData = [
    {
      name: 'Hepatitis B',
      brand: 'Hexaxim',
      dates: ['June 2021', 'July 2021', 'September 2021', 'November 2021'],
      reaction: '',
    },
    {
      name: 'DtwP/DTaP',
      brand: 'Hexaxim',
      dates: ['July 2021', 'September 2021', 'November 2021'],
      reaction: '',
    },
    {
      name: 'OPV/IPV',
      brand: 'Hexaxim',
      dates: ['July 2021', 'September 2021', 'November 2021'],
      reaction: '',
    },
    {
      name: 'HiB',
      brand: 'Hexaxim',
      dates: ['July 2021', 'September 2021', 'November 2021'],
      reaction: '',
    },
    {
      name: 'Rotavirus',
      brand: 'Rotateq',
      dates: ['July 2021', 'September 2021', 'November 2021'],
      reaction: '',
    },
    {
      name: 'PCV 10/13',
      brand: 'Previnar 13',
      dates: ['August 2021', 'October 2021', 'December 2021'],
      reaction: '',
    },
  ]

  return {
    props: {
      immunizationData,
    },
  }
}

export default function Home({ immunizationData }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  return (
    <div className={styles.container}>
      <Head>
        <title>Uno | Luka Antonio Salvio I. Uy</title>
        <meta name="description" content="Uno's immunization record website" />
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
          className="absolute w-12 h-12 bg-lime-500 rounded-full z-50 opacity-50 pointer-events-none"
          animate={{
            x: mousePosition.x - 24,
            y: mousePosition.y - 26,
          }}
          transition={{ type: 'spring' }}
        />
        <motion.div
          className="absolute w-8 h-8 bg-red-500 rounded-full z-50 opacity-50 pointer-events-none"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 18,
          }}
          transition={{ type: 'tween' }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-yellow-500 rounded-full z-50 opacity-50 pointer-events-none"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 10,
          }}
          transition={{ delay: 0.1 }}
        />

        <HeaderImage />

        <div className="bg-white lg:p-10 md:px-8 py-10">
          <div className="text-center">
            <p>
              Born <span className="text-blue-400 font-bold">♂</span> June 2021
              in Muntinlupa, PH
            </p>
          </div>

          <div className="p-5 py-10 text-center">
            <p className="text-blue-400 text-3xl font-bold">
              💉 Immunization Record
            </p>
          </div>

          <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 content-center gap-8 px-8">
            {immunizationData.map(({ name, brand, dates, reaction }, i) => (
              <Card
                key={`record-${name}-${i}`}
                name={name}
                brand={brand}
                dates={dates}
                reaction={reaction}
              />
            ))}
          </motion.div>
        </div>
      </motion.main>
    </div>
  )
}
