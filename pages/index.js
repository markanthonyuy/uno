import { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import HeaderImage from '../components/HeaderImage'

export function getServerSideProps() {
  const immunizationData = [
    {
      year: 2022,
      immunizations: [
        {
          date: 'February',
          brand: 'MMR',
          names: ['Measles'],
          reaction: '',
        },
        {
          date: 'April',
          brand: 'Sanofi Pasteur',
          names: ['Vaxigrip Tetra (Flu)'],
          reaction: '',
        },
        {
          date: 'May',
          brand: 'Sanofi Pasteur',
          names: ['Vaxigrip Tetra (Flu)'],
          reaction: '',
        },
        {
          date: 'June',
          brand: 'Viravax',
          names: ['Varicella Virus Vaccine Live (Chickenpox)'],
          reaction: '',
        },
        {
          date: 'July',
          brand: 'MMR',
          names: ['Measles'],
          reaction: '',
        },
        {
          date: 'August',
          brand: 'Sanofi Pasteur',
          names: ['Avaxim (Hepa A)'],
          reaction: '',
        },
        {
          date: 'October',
          brand: 'Hexaxim',
          names: ['Hepatitis B', 'DtwP/DTaP', 'OPV/IPV', 'HiB'],
          reaction: '',
        },
        {
          date: 'December',
          brand: 'Previnar 13',
          names: ['PCV 10/13'],
          reaction: '',
        },
      ],
    },
    {
      year: 2021,
      immunizations: [
        {
          date: 'June',
          brand: 'Hexaxim',
          names: ['Hepatitis B'],
          reaction: '',
        },
        {
          date: 'July',
          brand: 'Hexaxim',
          names: ['Hepatitis B', 'DtwP/DTaP', 'OPV/IPV', 'HiB'],
          reaction: '',
        },
        {
          date: 'July',
          brand: 'Rotateq',
          names: ['Rotavirus'],
          reaction: '',
        },
        {
          date: 'August',
          brand: 'Previnar 13',
          names: ['PCV 10/13'],
          reaction: '',
        },
        {
          date: 'September',
          brand: 'Hexaxim',
          names: ['Hepatitis B', 'DtwP/DTaP', 'OPV/IPV', 'HiB'],
          reaction: '',
        },
        {
          date: 'September',
          brand: 'Rotateq',
          names: ['Rotavirus'],
          reaction: '',
        },
        {
          date: 'October',
          brand: 'Previnar 13',
          names: ['PCV 10/13'],
          reaction: '',
        },
        {
          date: 'November',
          brand: 'Hexaxim',
          names: ['Hepatitis B', 'DtwP/DTaP', 'OPV/IPV', 'HiB'],
          reaction: '',
        },
        {
          date: 'November',
          brand: 'Rotateq',
          names: ['Rotavirus'],
          reaction: '',
        },
        {
          date: 'December',
          brand: 'Previnar 13',
          names: ['PCV 10/13'],
          reaction: '',
        },
      ],
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

          <div className="">
            {immunizationData.map(({ year, immunizations }) => (
              <div key={`year-${year}`}>
                <div className="m-8 flex bg-blue-500 p-3 rounded-lg border-blue-200 border-blue-500 text-white font-bold">
                  {year}
                </div>

                <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 content-center gap-8 px-8">
                  {immunizations.map(({ names, brand, date, reaction }, i) => (
                    <Card
                      key={`record-${i}`}
                      names={names}
                      brand={brand}
                      date={date}
                      reaction={reaction}
                    />
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.main>
    </div>
  )
}
