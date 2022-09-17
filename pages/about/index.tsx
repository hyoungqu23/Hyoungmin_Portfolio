import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <div className="container h-full mx-auto flex flex-col justify-center items-center">
      <p className="w-full lg:w-4/5 text-base lg:text-2xl mb-4">
        실제로 무엇인가를 만들면서 즐거움을 느끼는 일을 업으로 하고자 찾아 헤맸고, 프론트엔드 웹
        개발을 시작했습니다. 여전히{' '}
        <span className="text-bold text-pink-400">내 손으로 무엇인가를 만든다</span>는 점 그 자체가
        즐겁고, 개발을 계속해서 하게하는 원동력입니다.
      </p>
      <p className="w-full lg:w-4/5 text-base lg:text-2xl mb-4">
        <span className="text-bold text-pink-400">UI/UX 개선</span>에 우선순위를 두고 있습니다.
        사용자가 내가 완성한 서비스를 속에서 편리함과 즐거움을 찾아가면 좋겠다고 생각하며 이를
        향상시키고자 고민합니다.
      </p>
      <p className="w-full lg:w-4/5 text-base lg:text-2xl mb-4">
        단순한 기능 개발이 아닌{' '}
        <span className="text-bold text-pink-400">전체적인 서비스의 질적 향상</span>을 위해 Figma,
        Notion, Jira 등 다양한 Tool를 활용하고, Clean Code, CI/CD, 최적화 등에 꾸준히 관심을 가지고
        있습니다.
      </p>
      <p className="w-full lg:w-4/5 text-base lg:text-2xl mb-4">
        상대방의 언어로 소통하고자 노력하며 협업 능률을 높이고, 피드백을 받는 것을 좋아합니다.
        나아가{' '}
        <span className="text-bold text-pink-400">
          누구에게나 설명이 가능하고, 이해가 쉬운 코드를 작성
        </span>
        하는 것을 목표로 하고 있습니다.
      </p>
      <p className="w-full lg:w-4/5 text-base lg:text-2xl mb-4">
        보다 많은 사람들에게 <span className="text-bold text-pink-400">지식을 공유</span>하고,{' '}
        <span className="text-bold text-pink-400">함께 성장</span>해나가는 것을 꿈꾸고 있습니다.
      </p>
    </div>
  );
};

export default About;
