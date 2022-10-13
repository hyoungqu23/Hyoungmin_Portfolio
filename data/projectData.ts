import { StaticImageData } from 'next/image';
import Project_Router from 'public/images/Project_Router.png';
import Project_Admin from 'public/images/Project_Admin.png';
import Project_Comments from 'public/images/Project_Comments.png';
import Project_StoreRenewal from 'public/images/Project_StoreRenewal.png';
import Project_CFD from 'public/images/Project_CFD.jpg';
import Project_Collectors from 'public/images/Project_Collectors.png';

type Description = {
  tag: string;
  content: string;
};

type Url = {
  pageUrl?: string;
  githubUrl: string;
  notionUrl?: string;
  figmaUrl?: string;
  retroUrl?: string;
};

export interface Projects {
  title: string;
  descriptions: Description[];
  retrospective: string;
  stack: string[];
  period: string;
  type: string;
  imgUrl: StaticImageData;
  url: Url;
}

const projects: Projects[] = [
  {
    title: 'SPA Router',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    period: '2022.09.29 - 2022.10.13',
    type: '개인 프로젝트 / 프론트엔드',
    imgUrl: Project_Router,
    url: {
      pageUrl: 'https://hyoungmin-portfolio.vercel.app/',
      githubUrl: 'https://github.com/hyoungqu23/Hyoungmin_Portfolio',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          '개발자로서 자신의 프로젝트와 관련 정보를 제공하기 위해 포트폴리오 웹 사이트를 제작했습니다.',
      },
      {
        tag: 'feature',
        content: '모바일을 고려해 Tailwind CSS를 활용하여 반응형 디자인을 구현했습니다.',
      },
    ],
    retrospective:
      '기획부터 배포까지 혼자 진행하면서 TypeScript, Tailwind CSS 등 새로운 기술을 학습할 수 있는 좋은 경험이었습니다. 자세한 회고는 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: 'SPA Router',
    stack: ['JavaScript', 'React', 'Context API'],
    period: '2022.10.06 - 2022.10.07',
    type: '개인 프로젝트 / 프론트엔드',
    imgUrl: Project_Router,
    url: {
      githubUrl: 'https://github.com/hyoungqu23/SPA_Router',
      notionUrl: 'https://www.notion.so/SPA-Routing-524ab86f0720449a88b81bfdc353c10c',
      retroUrl: 'https://hyoungmin.notion.site/SPA-Routing-524ab86f0720449a88b81bfdc353c10c',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          'SPA의 핵심 기능 중 하나인 Routing 기능 중 기본적인 부분을 react-router-dom 라이브러리 없이 직접 구현했습니다.',
      },
    ],
    retrospective:
      '손쉽게 사용했던 라이브러리를 직접 구현하면서 무심코 사용하고 있던 라우팅 기능을 더 깊게 이해할 수 있는 좋은 경험이었습니다. 추가적으로 다른 Hooks나 기능에 대해 비슷한 프로젝트를 진행하고자 합니다. 자세한 회고는 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: '투자 관리 서비스 Admin',
    stack: ['JavaScript', 'React', 'Redux', 'Chakra UI', 'Git'],
    period: '2022.09.20 - 2022.09.25',
    type: '팀 프로젝트 / 프론트엔드',
    imgUrl: Project_Admin,
    url: {
      githubUrl:
        'https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-4-1-team-2',
      notionUrl: 'https://www.notion.so/admin-eeca6c576a0a4a68a155d3b7639c2856',
      retroUrl: 'https://hyoungmin.notion.site/admin-eeca6c576a0a4a68a155d3b7639c2856',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          '로그인하려는 사용자의 편의를 높이기 위해 로그인 만료 시 메시지, 로그인 폼의 validation 기준 미충족시 경고 메시지 등을 직접 구현했습니다.',
      },
      {
        tag: 'UI/UX',
        content:
          '사용자가 연결된 데이터를 쉽게 확인할 수 있도록 하기 위해서 고객 상세 데이터와 계좌 상세 데이터가 연결된 경우 Link를 활용해 각 상세 페이지로 이동할 수 있도록 구현했습니다.',
      },
    ],
    retrospective:
      '로그인 validation, 로그인 상태에 따른 페이지 라우팅 등의 로그인 기능과 UI를 구현하면서 Auth Service에 대해 이해할 수 있었습니다. 기본적인 상세 페이지를 구현할 때 어떻게 하면 UX를 향상시킬 수 있을 지에 대해 고민하면서 UI를 구현했습니다. 자세한 회고는 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: '댓글 기능 프로젝트',
    stack: ['JavaScript', 'React', 'Redux', 'Redux-Toolkit', 'Git'],
    period: '2022.09.16 - 2022.09.19',
    type: '팀 프로젝트 / 프론트엔드',
    imgUrl: Project_Comments,
    url: {
      githubUrl:
        'https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-3-2-team-2',
      notionUrl: 'https://www.notion.so/e93ad69d33d5476fba1a6f491c286c8a',
      retroUrl: 'https://hyoungmin.notion.site/e93ad69d33d5476fba1a6f491c286c8a',
    },
    descriptions: [
      {
        tag: 'refactoring',
        content:
          '반복되는 Redux-Toolkit의 ExtraReducers 코드를 제거하고자 extraReducerUtils를 고민하며 직접 구현해봤습니다.',
      },
      {
        tag: 'refactoring',
        content:
          'Redux 코드의 유지보수성과 가독성을 높이기 위해 Ducks Pattern을 도입하여 코드를 작성했습니다.',
      },
    ],
    retrospective:
      '단순 강의나 공식 문서를 보면서 배우는 것보다 어느 정도 개념을 알게 되면 직접 부딫혀 보는 것의 중요성을 느낀 프로젝트입니다. 페어 프로그래밍 방식으로 진행하면서 Ducks Pattern 도입 여부와 Refactoring에 대해 고민하면서 Redux를 조금 더 이해할 수 있는 좋은 경험이었습니다. 자세한 회고는 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: '온라인 스토어 리뉴얼 프로젝트',
    stack: ['JavaScript', 'React', 'Emotion', 'Redux', 'Redux-Persist', 'Git'],
    period: '2022.09.02 - 2022.09.05',
    type: '팀 프로젝트 / 프론트엔드',
    imgUrl: Project_StoreRenewal,
    url: {
      pageUrl: 'https://fruitte-renewal.netlify.app/',
      githubUrl:
        'https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-1-2-team-2',
      notionUrl: 'https://www.notion.so/8712c6543e664ee3931a4e07018e523f',
      retroUrl: 'https://hyoungmin.notion.site/8712c6543e664ee3931a4e07018e523f',
    },
    descriptions: [
      {
        tag: 'UI/UX',
        content:
          '기존 스토어 목록 페이지의 모든 상품을 보여주고 있어 상품이 더 추가될 경우를 대비하여 페이지네이션 로직을 직접 구현하여 사용자의 대기 시간을 줄였습니다.',
      },
      {
        tag: 'UI/UX',
        content:
          '상품의 제목과 설명이 줄바꿈이 되어 UI를 해치는 기존 웹사이트의 문제점과 이미지 크기를 통일해 UI를 개선했습니다.',
      },
    ],
    retrospective:
      '특정 로직을 처음 구현하는 것이 조금 더 깊게 이해하는데 도움을 준다는 것을 느끼고, UI/UX에 대해서 고민하게 만든 프로젝트입니다. 자세한 회고는 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: 'CFD',
    stack: ['JavaScript', 'Next.js', 'Redux', 'Emotion', 'Ant Design', 'Git'],
    period: '2022.07.04 - 2022.07.22',
    type: '팀 프로젝트 / 프론트엔드 3명 + 백엔드 2명',
    imgUrl: Project_CFD,
    url: {
      githubUrl: 'https://github.com/hyoungqu23/CFD',
      notionUrl: 'https://www.notion.so/Community-For-Developers-f28f68db503d493bb46c755521fcc949',
      retroUrl: 'https://hyoungmin.notion.site/CFD-ebc2c0899eb9405f88c20cdbf0f359d8',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          '질문 및 답변 시 Editor.js를 통해 마크다운 형식으로 입력할 수 있도록 구현하여 실제 사용자의 피드백을 반영했습니다.',
      },
      {
        tag: 'UI/UX',
        content:
          'UX를 개선하기 위해 실제 사용자의 흐름에 따라 button, input 등 UI의 위치를 수정하고 자동 포커스 스크롤 기능을 직접 구현했습니다.',
      },
    ],
    retrospective:
      '라이브러리를 적용하는데 어려움을 겪었고, 협업 과정에서의 이슈로 시간적으로 여유가 부족한 와중에 끝까지 이슈를 해결하며 배포를 진행한 프로젝트입니다. 자세한 회고는 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: 'Collector’s',
    stack: ['JavaScript', 'CSS3', 'S3', 'Git'],
    period: '2022.05.23 - 2022.06.03',
    type: '팀 프로젝트, 프론트엔드 2명 + 백엔드 2명',
    imgUrl: Project_Collectors,
    url: {
      pageUrl: 'https://collectors-twenty.herokuapp.com/',
      githubUrl: 'https://github.com/Elice-Team-20/Collectors',
      notionUrl: 'https://www.notion.so/20-1335219f96a64e678f66152f45666389',
      figmaUrl: 'https://www.figma.com/file/MmTalHhD88uGEyQJGJKyoe/Pet-Shop?node-id=637%3A49',
      retroUrl: 'https://hyoungmin.notion.site/Collector-s-2f607daa70124398a1c3146c76b9a466',
    },
    descriptions: [
      {
        tag: 'communication',
        content:
          '보다 효율적인 프로젝트 진행을 위해 동료와의 커뮤니케이션에서 비동기적 방식과 동기적 방식을 혼합해 활용했습니다.',
      },
      {
        tag: 'feature',
        content:
          '사용자의 정보 이용 편의를 높이기 위해 사용자의 기억을 보조하는 최근 본 상품 기능을 LocalStorage를 활용해 직접 구현했습니다.',
      },
      {
        tag: 'feature',
        content:
          '쇼핑몰의 비즈니스 측면에서 사용자의 구매를 유도하기 위해 구매 금액과 상품 종류에 따른 Stat 게이미피케이션 UI를 직접 구현했습니다.',
      },
    ],
    retrospective:
      '협업하는 방식을 체득하고, 기본적인 웹 스토어의 기능을 구현하면서 재미있는 시간을 보낸 프로젝트입니다. JavaScript로 진행하면서 React와 Next.js의 필요성을 느꼈습니다. 자세한 회고는 아래 링크에서 보실 수 있습니다.',
  },
];

export default projects;
