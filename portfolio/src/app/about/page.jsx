"use client";
import Brain from "@/components/brain";
import { useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const [hovered, setHovered] = useState(false);

  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/hero.png"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">PRODUCT DEVELOPMENT MANAGER</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              As a seasoned Product Development Manager, I thrive on driving
              innovation and leading teams to success. With a passion for
              technology and a dedication to excellence, I navigate complex
              challenges with creativity and strategic insight. My journey is
              defined by continuous learning and a commitment to delivering
              impactful solutions that make a difference.
            </p>

            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
  &quot;Innovation distinguishes between a leader and a follower.&quot;
</span>

            {/* BIOGRAPHY SIGNATURE */}
            <div className="self-end">
              <p className="text-3xl font-semibold italic">Somya Rawat</p>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Nest.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GraphQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Apollo
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                WebGL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Product Management
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Agile Methodologies
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Scrum Framework
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Project Planning & Execution
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Stakeholder Management
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Team Leadership
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Strategic Planning
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Product Lifecycle Management
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                UX/UI Design Principles
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Market Research & Analysis
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Business Development
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Customer Insights
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Risk Management
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Quality Assurance
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Data Analysis & Interpretation
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Technical Writing
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

{/* EXPERIENCE CONTAINER */}
<div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
  {/* EXPERIENCE TITLE */}
  <motion.h1
    initial={{ x: "-300px" }}
    animate={isExperienceRefInView ? { x: "0" } : {}}
    transition={{ delay: 0.2 }}
    className="font-bold text-2xl text-gray-800 transform -skew-y-1"
  >
    EXPERIENCE
  </motion.h1>
  {/* EXPERIENCE LIST */}
  <motion.div
    initial={{ x: "-300px" }}
    animate={isExperienceRefInView ? { x: "0" } : {}}
    className="flex flex-col gap-4 transform -skew-y-1"
  >
    {/* Experience Item 1 */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`flex flex-col bg-white rounded-lg p-4 shadow-md transform skew-y-1 ${hovered ? 'bg-black' : 'bg-white'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <h2 className={`font-semibold ${hovered ? 'text-neon-green' : 'text-gray-800'}`}>Head of Product Development</h2>
      <p className={`text-sm ${hovered ? 'text-neon-pink' : 'text-gray-600'}`}>2024 - Present</p>
      <p className={`text-sm ${hovered ? 'text-neon-blue' : 'text-gray-600'}`}>Company: Invest369.Ai</p>
      <ul className="list-disc pl-6 mt-2">
        <li className={hovered ? 'text-neon-purple' : ''}>Lead the development and launch of invest369.ai product.</li>
        <li className={hovered ? 'text-neon-purple' : ''}>Managed a team of developers and designers.</li>
        <li className={hovered ? 'text-neon-purple' : ''}>Responsible for product strategy and roadmap.</li>
      </ul>
    </motion.div>
    
    {/* Experience Item 2 */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`flex flex-col bg-white rounded-lg p-4 shadow-md transform skew-y-1 ${hovered ? 'bg-black' : 'bg-white'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <h2 className={`font-semibold ${hovered ? 'text-neon-green' : 'text-gray-800'}`}>Project Manager</h2>
      <p className={`text-sm ${hovered ? 'text-neon-pink' : 'text-gray-600'}`}>2023 - 2024</p>
      <p className={`text-sm ${hovered ? 'text-neon-blue' : 'text-gray-600'}`}>Company: Center for Business and Technology</p>
      <ul className="list-disc pl-6 mt-2">
        <li className={hovered ? 'text-neon-purple' : ''}>Led multiple cross-functional projects from initiation to completion.</li>
        <li className={hovered ? 'text-neon-purple' : ''}>Managed project timelines, budgets, and resources.</li>
        <li className={hovered ? 'text-neon-purple' : ''}>Collaborated with stakeholders to define project scope and objectives.</li>
      </ul>
    </motion.div>
    
    {/* Experience Item 3 */}
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`flex flex-col bg-white rounded-lg p-4 shadow-md transform skew-y-1 ${hovered ? 'bg-black' : 'bg-white'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <h2 className={`font-semibold ${hovered ? 'text-neon-green' : 'text-gray-800'}`}>Software Development Engineer</h2>
      <p className={`text-sm ${hovered ? 'text-neon-pink' : 'text-gray-600'}`}>2022 - 2023</p>
      <p className={`text-sm ${hovered ? 'text-neon-blue' : 'text-gray-600'}`}>Company: Startup Labs Infotech Pvt. Ltd.</p>
      <ul className="list-disc pl-6 mt-2">
        <li className={hovered ? 'text-neon-purple' : ''}>Developed scalable and efficient software solutions.</li>
        <li className={hovered ? 'text-neon-purple' : ''}>Worked on front-end and back-end development tasks.</li>
        <li className={hovered ? 'text-neon-purple' : ''}>Participated in code reviews and software architecture discussions.</li>
      </ul>
    </motion.div>
  </motion.div>
</div>


</div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>

      
    </motion.div>
  );
};

export default AboutPage;
