import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutDetail from 'components/about/AboutDetail/AboutDetail';
import { aboutDetailData } from 'data/aboutData';

const About = () => {
  return (
    <section
      id="about"
      className="container flex flex-col-reverse lg:flex-row gap-10 items-center justify-center h-[90vh]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col w-full gap-3 lg:w-1/2"
      >
        <h2 className="text-base lg:text-2xl">안녕하세요🙋‍♂️ 프론트엔드 개발자 이형민입니다.</h2>
        {aboutDetailData.map((data, index) => (
          <AboutDetail key={index} data={data} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: '50%', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-1/2 overflow-hidden"
      >
        <Image src="/image/profile.svg" width={'1000%'} height={'1000%'} />
      </motion.div>
    </section>
  );
};

export default About;