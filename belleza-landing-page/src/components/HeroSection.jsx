import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection({ onContactClick, onCourseClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side */}
      <div className="absolute top-5 left-10">
        <Image
          src="/assets/images/logos/belleza_logo.svg"
          width={100}
          height={100}
          alt="Belleza Logo"
        />
      </div>
      <motion.div
        className="flex p-5 sm:p-10 items-start justify-center flex-col gap-5 h-screen w-full sm:rounded-br-[40%] bg-[#791535]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-left ml-2 px-3 py-2 border-l-4 border-[#FDDFBF] text-[#FDDFBF] text-medium font-semibold"
          variants={itemVariants}
        >
          lorem ipsum.
        </motion.p>
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#FDDFBF] "
          variants={itemVariants}
        >
          Lorem ipsum dolor sit amet.
        </motion.h1>
        <motion.p
          className="text-[#FDDFBF] text-sm leading-tight"
          variants={itemVariants}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          fugiat nesciunt velit iusto repellat deserunt illum accusamus
          sapiente. Quod cupiditate vero assumenda ipsa unde fuga culpa dolores
          error at accusantium.
        </motion.p>
        <motion.div className="flex gap-4" variants={itemVariants}>
          <button
            className="bg-[#FDDFBF] text-[#791535] font-bold py-2 px-4 rounded-full hover:bg-[#FDDFBF]/90 text-sm"
            onClick={onCourseClick}
          >
            Explore Courses
          </button>
          <button
            className="bg-transparent text-[#FDDFBF] font-bold py-2 px-4 rounded-full border border-[#FDDFBF] hover:bg-[#FDDFBF]/10 text-sm"
            onClick={onContactClick}
          >
            Learn More
          </button>
        </motion.div>
      </motion.div>
      {/* Right Side */}
      <div className="w-full h-screen"></div>
    </div>
  );
}
