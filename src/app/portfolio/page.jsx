"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Rakumon",
    desc: "Developed a personalized e-commerce platform with AI-powered recommendations, quick search, and social shopping features. Built an interactive and responsive UI using JavaScript, TypeScript, and Tailwind CSS.",
    img: "/rakumon.png",
    link: "https://github.com/xanderex-sid/Rakumon",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "ASGI Patient Portal",
    desc: "Developed a full-stack patient and admin portal using React, Redux, and MongoDB. Implemented user registration, medical history storage, and a real-time admin dashboard with data visualization and Excel export.",
    img: "/asgiportal.png",
    link: "https://asgi-patientportal.netlify.app/",
  },
  {
    id: 3,
    color: "from-red-300 to-blue-300",
    title: "My Portfolio Website",
    desc: "Developed a personal portfolio using Next.js, showcasing projects, skills, and experience with a dynamic and responsive UI.",
    img: "/myportfolio.png ",
    link: "http://localhost:2550/portfolio",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
  <div
    className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
    key={item.id}
  >
    <div className="flex flex-col gap-6 text-white p-8 max-w-4xl">
      <h1 className="text-6xl font-bold leading-tight">
        {item.title}
      </h1>
      <div className="relative w-full h-[60vh]">
        <Image 
          src={item.img} 
          alt="" 
          fill 
          style={{objectFit: "cover", objectPosition: "left"}} 
        />
      </div>
      <p className="w-full text-lg">
        {item.desc}
      </p>
      <div className="flex justify-end">
        <Link href={item.link}>
          <button className="px-6 py-3 text-base bg-white text-gray-600 font-semibold rounded">
            See Demo
          </button>
        </Link>
      </div>
    </div>
  </div>
))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-106 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-Stack Developer . UI/UX Designer . 
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
