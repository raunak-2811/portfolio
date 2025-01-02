import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">3 Months</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Internship Experience
          </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle="BitanceLab - (2024 - Present)"
            result="India"
            des="I Worked as a Full Stack Web Developer at Bitancelabs Solution , Where I designed a website for BitanceLab Solutions.  "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
