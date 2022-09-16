import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="container h-full flex flex-col justify-center items-center">
      <div className="overflow-hidden mb-5 lg:mb-8">
        <Image src="/image/profile.svg" width={'250%'} height={'250%'} />
      </div>
      <h2 className="text-3xl lg:text-4xl mb-3 lg:mb-5">
        <span className="font-bold hover:border-b-8 border-yellow-300">프론트엔드</span> 개발자
      </h2>
      <h1 className="text-5xl lg:text-7xl">
        <span className="font-bold hover:border-b-8 border-yellow-300">이형민</span>입니다
      </h1>
    </div>
  );
};

export default Home;
