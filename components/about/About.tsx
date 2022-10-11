import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutDetail from 'components/about/AboutDetail';
import { aboutDetailData } from 'data/aboutData';

const About = () => {
  return (
    <section
      id="about"
      className="container relative flex flex-col-reverse lg:flex-row gap-10 items-center justify-center h-[90vh]"
    >
      <h3 className="absolute text-3xl tracking-widest uppercase top-10">About</h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col w-full lg:w-2/3"
      >
        <h2 className="mb-5 text-base lg:text-3xl">안녕하세요🙋‍♂️ 프론트엔드 개발자 이형민입니다.</h2>
        <div className="flex flex-col gap-2 lg">
          {aboutDetailData.map((data, index) => (
            <AboutDetail key={index} data={data} />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: '500', opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="overflow-hidden"
      >
        <Image src="/image/profile.svg" width={'500%'} height={'500%'} />
      </motion.div>
    </section>
  );
};

export default About;
