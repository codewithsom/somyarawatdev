// "use client";

// import Image from "next/image";
// import Link from 'next/link';
// import { motion } from "framer-motion";

// const Homepage = () => {
//   return (
//     <motion.div
//       className="h-full"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
//         {/* IMAGE CONTAINER */}
//         <div className="h-1/2 lg:h-full lg:w-1/2 relative">
//           <Image src="/hero.png" alt="" fill className="object-contain" />
//         </div>
//         {/* TEXT CONTAINER */}
//         <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
//           {/* TITLE */}
//           <h1 className="text-4xl md:text-4xl font-bold">
//           Innovation Navigator - Product Manager          </h1>
//           {/* DESC */}
//           <p className="md:text-xl">
//   As a dedicated Product Manager specializing in AI, software, web, and app development, I lead innovative projects that leverage cutting-edge technology to solve real-world problems. I collaborate closely with cross-functional teams, including engineers, data scientists, and designers, to ensure our solutions meet market needs and exceed user expectations.
// </p>

// {/* BUTTONS */}
// <div className="w-full flex gap-4">
//   <Link href="/portfolio">
//     <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
//       View My Work
//     </button>
//   </Link>
//   <Link href="/contact">
//     <button className="p-4 rounded-lg ring-1 ring-black">
//       Contact Me
//     </button>
//   </Link>
// </div>

//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Homepage;

"use client";

import Image from "next/image";
import Link from 'next/link';
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
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-4xl font-bold">
            Innovation Navigator - Product Manager
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            As a dedicated Product Manager specializing in AI, software, web, and app development, I lead innovative projects that leverage cutting-edge technology to solve real-world problems. I collaborate closely with cross-functional teams, including engineers, data scientists, and designers, to ensure our solutions meet market needs and exceed user expectations.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-auto py-4 bg-gray-900 text-white text-center relative">
        <p>
          © 2024{" "}
          <motion.a
            href="https://www.linkedin.com/in/somya-rawat-042196233/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            Somya Rawat
          </motion.a>{" "}
          🌟
        </p>
      </footer>
    </motion.div>
  );
};

export default Homepage;
