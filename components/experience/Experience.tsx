import React from 'react';
import ExperienceBox from 'components/experience/ExperienceBox';
import { educationData } from 'data/educationData';

const Experience = () => (
  <section
    id="experience"
    className="container relative flex flex-col items-center justify-center h-screen gap-20"
  >
    <h3 className="absolute text-2xl tracking-widest uppercase top-10">Experience</h3>
    {educationData.map((data, index) => (
      <ExperienceBox key={data.program} education={data} index={index} />
    ))}
  </section>
);

export default Experience;
