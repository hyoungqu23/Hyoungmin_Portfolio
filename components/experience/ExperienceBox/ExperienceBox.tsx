import React from 'react';
import { motion } from 'framer-motion';
import { EducationData } from 'data/educationData';

type Props = {
  education: EducationData;
  index: number;
};

const ExperienceBox = ({ education, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 ? -500 : 1200, y: (index + 1) * 150 }}
    whileInView={{ opacity: 1, x: index % 2 ? 0 : 800 }}
    transition={{ duration: 1.5 }}
    className="absolute w-[30vw] h-fit text-center"
  >
    <h3 className="text-sm">{education.institute}</h3>
    <h2 className="text-xl lg:text-2xl text-bold">{education.program}</h2>
    <p className="text-sm">{education.period}</p>
  </motion.div>
);

export default ExperienceBox;
