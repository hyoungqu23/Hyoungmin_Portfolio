import React from 'react';

type Props = {
  data: string;
};

const AboutDetail = (props: Props) => {
  return <p className="text-xs lg:text-lg">{props.data}</p>;
};

export default AboutDetail;
