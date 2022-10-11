import React from 'react';
import ExperienceBox from 'components/experience/ExperienceBox';
import { educationData } from 'data/educationData';

const Experience = () => (
  <section
    id="experience"
    className="container flex flex-col items-center justify-center h-screen gap-20"
  >
    {educationData.map((data, index) => (
      <ExperienceBox key={data.program} education={data} index={index} />
    ))}
  </section>
);

export default Experience;
