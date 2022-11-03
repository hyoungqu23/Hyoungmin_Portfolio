import { motion } from 'framer-motion';
import React from 'react';

const More = () => {
  return (
    <section
      id="more"
      className="container relative flex flex-col items-center h-full max-w-full gap-20 py-20 mx-auto overflow-hidden justify-evenly"
    >
      <h2 className="font-bold text-xl">법대생이 프론트엔드 개발자가 되기로 한 이유</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        첫 번째는 <span className="text-red-500 font-bold">재미와 흥미</span>이다. 이는 업으로
        하나를 정해 못해도 20-30년을 해야 하는데 만약 재미도 없고 흥미가 있는 분야도 아니라면
        어떨까라는 물음에서 시작됐다. 학교를 다닐 때도 성향에 맞지 않으면 우선순위를 미루곤 했고,
        새로운 과목이나 학습이 재미있는 분야를 찾아 나서곤 했다. 경영학을 복수전공하면서 처음
        프로그래밍을 접했을 때, python으로 고작 print('Hello, world!') 하나 찍는데 굉장히
        재미있었다. 또한, 애초에 새로운 분야를 학습할 수 있는 경험은 진귀하다고 생각하고, 새로운
        도전은 늘 흥미롭다고 생각하기 때문이다. 또한, 직접 만드는 것에 따라 결과물을 확인할 수
        있다는 점이 성향에 맞고, 내 성향과 적성에 맞는 프론트엔드를 시작하게 되었다.
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        두 번째로, <span className="text-red-500 font-bold">시각화와 구현에 대한 욕구</span>가 그
        이유이다. 목수나 대장장이는 어떤 결과물을 만들어 내기 위해 기획부터 디자인 등 모든 단계를
        설계하고, 자기 기술과 노하우를 발휘해 하나의 결과물을 만들어 낸다. 이와 유사하게 하나의
        웹페이지를 만들기 위해 처음부터 끝까지 고민하고, 생각하고, 직접 상상한 것을 내가 가진 기술을
        활용해서 시각적으로 구현해낼 수 있다는 것이 프론트엔드 개발에 끌린 이유다. 특히, 내가 필요한
        것을 생각하고, 다른 사람들이 필요한 것을 상상해 시각적으로 구현하고, 웹 접근성을 높여
        긍정적인 사용자 경험을 만들어 내고 싶어서 개발자가 되고자 한다.
      </motion.div>
    </section>
  );
};

export default More;
