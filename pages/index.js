import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import HeaderImage from "../components/HeaderImage";

import { immunizationData } from "../immunizationData";
import { Lime } from "../components/circle/Lime";
import { Red } from "../components/circle/Red";
import { Yellow } from "../components/circle/Yellow";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
          });
        }}
      >
        <Lime mousePosition={mousePosition} />
        <Red mousePosition={mousePosition} />
        <Yellow mousePosition={mousePosition} />

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
            {immunizationData?.map(({ year, immunizations }) => (
              <div key={`year-${year}`}>
                <div className="m-8 flex bg-blue-500 p-3 rounded-lg border-blue-200 border-blue-500 text-white font-bold">
                  {year}
                </div>

                <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 content-center gap-8 px-8">
                  {immunizations?.map(({ names, brand, date, reaction }, i) => (
                    <Card
                      key={`record-${year}-${i}`}
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
  );
}
