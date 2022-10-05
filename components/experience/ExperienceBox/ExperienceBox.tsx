import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EducationData } from 'data/educationData';

type Props = {
  education: EducationData;
  index: number;
};

const ExperienceBox = ({ education, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: 500 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 * (index + 1) }}
    className="w-[60vw] lg:w-[30vw] h-fit text-center p-4"
  >
    <h3 className="text-xs lg:text-sm">{education.institute}</h3>
    <h2 className="text-lg lg:text-xl text-bold">{education.program}</h2>
    <p className="text-xs lg:text-sm">{education.period}</p>
  </motion.div>
);
export default ExperienceBox;
