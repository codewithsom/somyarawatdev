"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    "id": 1,
    "color": "from-red-300 to-blue-300",
    "title": "Cartify",
    "desc": "An innovative e-commerce platform leveraging MERN stack technologies for seamless user experience and robust backend scalability.",
    "img": "/p1.png",
    "link": "https://github.com/codewithsom/E-Commerce-Website"
},

  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "React Admin Dashboard",
    desc:  "A comprehensive React-based admin dashboard built for managing and visualizing data with ease. It includes features such as user authentication, dynamic charts, and responsive design.",
    img: "/p2.png",
    link: "https://github.com/codewithsom/React-Admin-Dashboard",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "UTube Clone",
    desc: "A full-featured YouTube clone built using React and Tailwind CSS. This project showcases a seamless video streaming experience, complete with video uploads, playback, and user authentication.",
    img: "/p3.png",
    link: "https://github.com/codewithsom/S-Tube-Frontend",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Blog App",
    desc: "A personal blog application created using Hugo, a fast and flexible static site generator. This project highlights efficient content management, easy customization, and quick deployment. ",
    img: "/p4.png",
    link: "https://github.com/codewithsom/somyarawatblog",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Word2Pdf",
    desc: "A powerful Word to PDF converter application built using React. This project showcases seamless file conversion, user-friendly interface, and efficient performance.",
    img: "/p5.png",
    link: "https://github.com/codewithsom/InkToPDF",
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
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-48 h-32 md:w-56 md:h-40 lg:w-64 lg:h-48 xl:w-72 xl:h-56">
  <Image src={item.img} alt={item.title} layout="fill" objectFit="cover" />
</div>

                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center mt-16">
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
          Product Manager and Tech Enthusiast
        </textPath>
      </text>
    </motion.svg>
    <Link
      href="/contact"
      className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
    >
      Contact Me
    </Link>
  </div>
</div>

    </motion.div>
  );
};

export default PortfolioPage;

