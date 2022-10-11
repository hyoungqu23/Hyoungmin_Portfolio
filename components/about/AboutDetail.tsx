import React from 'react';
import type { AboutData } from 'data/aboutData';

type Props = {
  data: AboutData;
};

const AboutDetail = ({ data }: Props) => {
  return (
    <div>
      <p className="text-sm text-sky-500 md:text-lg">{data.title}</p>
      <p className="text-xs md:text-base">{data.content}</p>
    </div>
  );
};

export default AboutDetail;
