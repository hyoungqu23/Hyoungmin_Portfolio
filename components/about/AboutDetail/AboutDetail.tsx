import React from 'react';

type Props = {
  data: string;
};

const AboutDetail = (props: Props) => {
  return <p className="text-base lg:text-lg">{props.data}</p>;
};

export default AboutDetail;
