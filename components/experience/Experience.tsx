import React from 'react';
import { motion } from 'framer-motion';
import ExperienceBox from 'components/experience/ExperienceBox/ExperienceBox';
import { educationData } from 'data/educationData';

const Experience = () => (
  <section id="experience" className="container relative h-[90vh]">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute w-3 h-full bg-black left-1/2 top-10"
    />
    {educationData.map((data, index) => (
      <ExperienceBox key={data.program} education={data} index={index} />
    ))}
  </section>
);

export default Experience;
