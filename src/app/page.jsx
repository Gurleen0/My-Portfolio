"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-4/5 lg:h-500  lg:w-1/2 relative">
          <Image src="/myphoto.png" alt="" fill className="object-contain" />
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
          Coding Clean, Functional Designs that Work.         </h1>
          <p className="md:text-xl">
I build fast, scalable web applications with clean code, turning designs into smooth, functional user experiences.          </p>
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View My Work
              </button>
            </Link>
            <Link href="mailto:gill.gurleenkaur2004@gmail.com">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
