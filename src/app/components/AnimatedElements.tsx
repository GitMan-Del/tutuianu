'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedElements() {
  return (
    <>
      <motion.div 
        className="w-25 h-25 top-40 right-44 rotate-6 absolute z-50"
        animate={{
          y: [0, -10, 0],
          rotate: [6, 8, 6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Image src="/TL.png" alt="a" width={97.75} height={100.52} className="object-contain"/>
      </motion.div>
      
      <motion.div 
        className="w-24 h-24 top-70 left-72 -rotate-12 absolute z-50"
        animate={{
          y: [0, 8, 0],
          rotate: [-12, -10, -12]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Image src="/TS.png" alt="a" width={97.75} height={100.52} className="object-contain"/>
      </motion.div>
      
      <motion.div 
        className="w-20 h-20 top-96 right-72 -rotate-12 absolute z-50"
        animate={{
          y: [10, 6, 10],
          rotate: [-12, 18, -12]
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Image src="/SB.png" alt="a" width={97.75} height={100.52} className="object-contain"/>
      </motion.div>


      <motion.div 
        className="w-20 h-20 bottom-90 left-96 rotate-12 absolute z-50"
        animate={{
          y: [0, -6, 0],
          rotate: [12, 14, 12]
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Image src="/NJ.png" alt="a" width={97.75} height={100.52} className="object-contain"/>
      </motion.div>
    </>
  );
} 