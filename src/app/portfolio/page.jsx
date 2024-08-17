"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "My Portfolio Website",
    desc: "This Next.js project, bootstrapped with create-next-app, showcases my skills in UI/UX design and front-end development. Using HTML, Tailwind CSS, and Framer Motion animations, I've crafted a dynamic and responsive portfolio that delivers a seamless user experience across all devices.",
    img: "/myportfolio.png ",
    link: "http://localhost:3000/portfolio",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "AI Shopping Assistant",
    desc: "The AI Shopping Assistant reimagines online shopping through a UI/UX design that replaces the traditional search bar with an interactive AI chatbot. Focused on wireframing and prototyping, this design offers a personalized, engaging shopping experience with tailored fashion recommendations and advice, without involving technology implementation.",
    img: "/aiassistant.jpg",
    link: "https://www.figma.com/proto/7etBKqmIgBuWMkxK3DEpDA/Untitled?node-id=1-2&t=yfHOcqIgpgheBKuk-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Fauxica Apparel App",
    desc: "Fauxica presents a premium apparel experience through UI/UX design, offering high-quality clothing without the designer price tag. This project focuses on wireframing and prototyping to deliver a luxury shopping experience that reflects the craftsmanship of high-end brands, while maintaining affordability.",
    img: "/fauxica.png",
    link: "https://www.figma.com/proto/kXp6jFzxJVVQxnpSkIl1EN/Untitled?t=dSgg666c47cRMbn6-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-3",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Mynstagram App",
    desc: "Mynstagram leverages UI/UX design to enhance the Myntra shopping experience by integrating an interactive system for personalized outfit recommendations. Through wireframing and prototyping, the platform offers a seamless user experience for exploring and purchasing stylish outfits based on individual preferences.",
    img: "/mynstagram1.png",
    link: "https://www.figma.com/proto/ZMmOvb3sROI2Gf4XAOnL3i/E-commerce-Website-Template-(Freebie)-(Community)?node-id=20-2&t=9jpq5W1T3xtIDNBP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=20%3A2&show-proto-sidebar=1",
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
      <div className="relative w-full h-[50vh]">
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
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
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
                Front-end Developer and UI Designer
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
