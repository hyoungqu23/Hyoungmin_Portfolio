import type { NextPage } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Home: NextPage = () => (
  <div className="container flex flex-col items-center justify-center h-full">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="mb-5 overflow-hidden lg:mb-8"
    >
      <Image src="/image/profile.svg" width="250%" height="250%" />
    </motion.div>
    <h2 className="mb-3 text-3xl lg:text-4xl lg:mb-5">
      <span className="font-bold border-yellow-300 hover:border-b-8">프론트엔드</span> 개발자
    </h2>
    <h1 className="text-5xl lg:text-7xl">
      <span className="font-bold border-yellow-300 hover:border-b-8">이형민</span>입니다
    </h1>
  </div>
);

export default Home;
