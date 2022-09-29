import type { NextPage } from 'next';

const Experience: NextPage = () => {
  return (
    <div className="container grid items-center h-full grid-cols-1 grid-rows-1 mx-auto lg:grid-cols-3 justify-evenly">
      <div className="text-center transition-colors duration-300 ease-in hover:text-pink-400">
        <h3 className="text-sm">원티드</h3>
        <h2 className="text-xl lg:text-2xl text-bold">프리온보딩 프론트엔드 코스</h2>
        <p className="text-sm">2022.08.29 - 2022.09.30</p>
      </div>
      <div className="text-center transition-colors duration-300 ease-in hover:text-pink-400">
        <h3 className="text-sm">엘리스</h3>
        <h2 className="text-xl lg:text-2xl text-bold ">SW 엔지니어 트랙 2기</h2>
        <p>2022.04.04 - 2022.07.22</p>
      </div>
      <div className="text-center transition-colors duration-300 ease-in hover:text-pink-400">
        <h3 className="text-sm">홍익대학교</h3>
        <h2 className="text-xl lg:text-2xl">법학/경영학(학사)</h2>
        <p className="text-sm">2013.03 - 2020.08</p>
      </div>
    </div>
  );
};

export default Experience;
