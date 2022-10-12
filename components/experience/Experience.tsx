import React from 'react';
import ExperienceBox from 'components/experience/ExperienceBox';
import { educationData } from 'data/educationData';

const Experience = () => (
  <section
    id="experience"
    className="container relative flex flex-col items-center justify-center h-screen gap-20"
  >
    <h3 className="absolute text-2xl tracking-widest uppercase top-5 md:top-10">Experience</h3>
    <p className="absolute text-xs text-gray-500 top-14 md:top-20">
      프로그램명을 클릭하면 <span className="text-sky-500">프로그램 참가 회고</span>로 연결됩니다.
    </p>
    {educationData.map((data, index) => (
      <ExperienceBox key={data.program} education={data} index={index} />
    ))}
  </section>
);

export default Experience;
