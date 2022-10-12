import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EducationData } from 'data/educationData';

type Props = {
  education: EducationData;
  index: number;
};

const ExperienceBox = ({ education, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: '-100' }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 * (index + 1) }}
    className="w-full p-4 text-center h-fit"
  >
    <h3 className="text-xs md:text-sm">{education.institute}</h3>
    <h2 className="text-sm md:text-lg text-bold">{education.program}</h2>
    <p className="text-xs md:text-sm">{education.period}</p>
  </motion.div>
);

export default ExperienceBox;
