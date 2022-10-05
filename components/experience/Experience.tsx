import React from 'react';
import ExperienceBox from 'components/experience/ExperienceBox/ExperienceBox';
import { educationData } from 'data/educationData';

const Experience = () => (
  <section
    id="experience"
    className="container flex flex-col gap-20 items-center justify-center h-[90vh]"
  >
    {educationData.map((data, index) => (
      <ExperienceBox key={data.program} education={data} index={index} />
    ))}
  </section>
);

export default Experience;
