import { StaticImageData } from 'next/image';
import Project_MiniLog from 'public/images/Project_MiniLog.png';
import Project_Portfolio from 'public/images/Project_Portfolio.png';
import Project_Router from 'public/images/Project_Router.png';
import Project_Search from 'public/images/Project_Search.png';
import Project_Admin from 'public/images/Project_Admin.png';
import Project_Comments from 'public/images/Project_Comments.png';
import Project_IssueViewer from 'public/images/Project_IssueViewer.png';
import Project_MovieTrailer from 'public/images/Project_MovieTrailer.png';
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
    title: '미니로그',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Notion API'],
    period: '2022.10.09 ~ 진행중',
    type: '개인 프로젝트 / 프론트엔드',
    imgUrl: Project_MiniLog,
    url: {
      pageUrl: 'https://minilog.vercel.app/',
      githubUrl: 'https://github.com/hyoungqu23/miniLog',
      retroUrl: 'https://minilog.vercel.app/blog/minilog-ssg-retrospective',
    },
    descriptions: [
      {
        tag: 'feature',
        content: 'First Load JavaScript를 약 4.5배 감소시켜 웹 사이트의 성능을 향상시켰습니다.',
      },
      {
        tag: 'feature',
        content:
          '최적화된 웹 사이트를 만들고자 웹 접근성과 SEO를 최대한 향상시켜 Lighthouse 점수를 높였습니다.',
      },
      {
        tag: 'feature',
        content:
          'Notion API를 통해 Notion을 CMS로 활용하는 정적 블로그 형태를 선택해 보다 효율적으로 블로그 글 작성을 할 수 있도록 구현했습니다.',
      },
    ],
    retrospective:
      'SSG 구조와 Next.js의 여러 기능 등을 활용해 최적화된 웹 사이트를 만들고자 고민하고 노력했습니다. Notion API를 연결하면서 발생한 Axios, TypeScript와 관련된 여러 이슈들을 해결하고자 노력했습니다. 자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: '프론트엔드 개발자 이형민입니다',
    stack: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS'],
    period: '2022.09.29 - 2022.10.13',
    type: '개인 프로젝트 / 프론트엔드',
    imgUrl: Project_Portfolio,
    url: {
      pageUrl: 'https://hyoungmin.vercel.app/',
      githubUrl: 'https://github.com/hyoungqu23/Hyoungmin_Portfolio',
      retroUrl: 'https://minilog.vercel.app/blog/portfolio-retrospective',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          '개발자로서 자신을 어필하기 위해 자신의 프로젝트와 관련 정보를 제공하고자 포트폴리오 웹 사이트를 제작했습니다.',
      },
      {
        tag: 'feature',
        content: '모바일 뷰를 고려해 Tailwind CSS를 활용하여 반응형 디자인을 쉽게 구현했습니다.',
      },
      {
        tag: 'feature',
        content:
          '다양한 사람들에게 피드백을 받아 지속적으로 수정하여 보다 나은 포트폴리오로 발전시키는 과정을 가지고 있습니다.',
      },
    ],
    retrospective:
      '기획부터 배포까지 혼자 진행하면서 TypeScript, Tailwind CSS 등 새로운 기술을 학습할 수 있는 좋은 경험이었습니다. 다른 개발자들의 피드백을 바탕으로 지속적으로 개선하고 있습니다. 자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: 'SPA Router 개발 프로젝트',
    stack: ['JavaScript', 'React', 'Context API'],
    period: '2022.10.06 - 2022.10.07',
    type: '개인 프로젝트 / 프론트엔드',
    imgUrl: Project_Router,
    url: {
      githubUrl: 'https://github.com/hyoungqu23/SPA_Router',
      retroUrl: 'https://minilog.vercel.app/blog/react-routing-without-library',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          'SPA의 핵심 기능 중 하나인 Routing 기능 중 기본적인 부분을 react-router-dom 라이브러리 없이 직접 구현했습니다.',
      },
    ],
    retrospective:
      '손쉽게 사용했던 라이브러리를 직접 구현하면서 라우팅 기능에 대해 더 깊게 이해할 수 있는 좋은 경험이었습니다. 추가적으로 다른 Hooks나 기능에 대해 비슷한 프로젝트를 진행하고자 합니다. 자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: '검색 기능 개발 프로젝트',
    stack: ['JavaScript', 'React', 'Axios', 'Git'],
    period: '2022.10.06 - 2022.10.07',
    type: '팀 프로젝트 / 프론트엔드',
    imgUrl: Project_Search,
    url: {
      githubUrl:
        'https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-5-1-team-2',
      retroUrl: 'https://minilog.vercel.app/blog/preonboarding-assignment-unknown',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          '확장성과 재사용성을 고려해 Axios 인스턴스를 생성하는 방식으로 구현하며, interceptor를 활용해 과제 요구 사항을 쉽게 충했습니다.',
      },
      {
        tag: 'feature',
        content:
          '단순 keyword를 인자로 받아 API 호출을 하도록 처리했으나, 코드 리뷰 결과 확장성을 고려해 객체 형태로 인자의 데이터 타입을 변경했습니다.',
      },
    ],
    retrospective:
      'Axios 인스턴스를 활용해 재사용성과 확장성을 높일 수 있는 코드를 구현하고자 했으며, 코드 리뷰와 피드백을 통해 Best Practice를 산출하고자 고민했습니다. 자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: '투자 관리 서비스 Admin 개발 프로젝트',
    stack: ['JavaScript', 'React', 'Redux', 'Chakra UI', 'Git'],
    period: '2022.09.20 - 2022.09.25',
    type: '팀 프로젝트 / 프론트엔드',
    imgUrl: Project_Admin,
    url: {
      githubUrl:
        'https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-4-1-team-2',
      retroUrl: 'https://minilog.vercel.app/blog/preonboarding-assignment-fint',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          '로그인 시 사용자의 편의를 높이기 위해 로그인 만료 메시지 및 로그인 폼의 validation 기준 미충족시 경고 메시지 등을 추가적으로 구현했습니다.',
      },
      {
        tag: 'UI/UX',
        content:
          '사용자가 연결된 데이터를 쉽게 확인할 수 있도록 고객 상세 데이터와 계좌 상세 데이터가 연결된 경우 Link를 활용해 쉽게 이동할 수 있도록 구현했습니다.',
      },
    ],
    retrospective:
      '로그인 validation, 로그인 상태에 따른 페이지 라우팅 등의 로그인 기능을 구현하면서 인증/인가에 대해 이해할 수 있었고, 어떻게 하면 UX를 향상시킬 수 있을 지에 대해 고민하면서 기본적인 상세 페이지 UI를 구현했습니다. 자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: '댓글 기능 개발 프로젝트',
    stack: ['JavaScript', 'React', 'Redux', 'Redux-Toolkit', 'Git'],
    period: '2022.09.16 - 2022.09.19',
    type: '팀 프로젝트 / 프론트엔드',
    imgUrl: Project_Comments,
    url: {
      githubUrl:
        'https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-3-2-team-2',
      retroUrl: 'https://minilog.vercel.app/blog/preonboarding-assignment-sparkpet',
    },
    descriptions: [
      {
        tag: 'refactoring',
        content:
          'Refactoring 과정에서 페어 프로그래밍을 하면서 Redux-Toolkit의 반복되는 ExtraReducers 코드를 제거하고자 extraReducerUtils를 직접 구현했습니다.',
      },
      {
        tag: 'refactoring',
        content:
          'Redux 코드의 유지보수성과 가독성을 높이기 위해 디렉토리 구조를 고민하다가, Ducks Pattern을 도입하여 코드를 작성했습니다.',
      },
    ],
    retrospective:
      '단순 강의나 공식 문서를 보면서 배우는 것보다 어느 정도 개념을 알게 되면 직접 코드를 작성해 보는 것의 중요성을 느낀 프로젝트입니다. 페어 프로그래밍 방식으로 진행하면서 Ducks Pattern 도입 여부와 Refactoring에 대해 고민하면서 Redux를 조금 더 이해할 수 있는 좋은 경험이었습니다. 자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: 'GitHub 이슈 확인 페이지 개발 프로젝트',
    stack: ['JavaScript', 'React', 'Emotion', 'Material UI', 'Context API', 'Git'],
    period: '2022.09.13 - 2022.09.15',
    type: '팀 프로젝트 / 프론트엔드',
    imgUrl: Project_IssueViewer,
    url: {
      pageUrl: 'https://github-issue-viewer-team2.netlify.app/',
      githubUrl:
        'https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-3-1-team-2',
      retroUrl: 'https://minilog.vercel.app/blog/preonboarding-assignment-thingsflow',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          'DOM의 Scroll Event를 활용하면 최적화가 필요하고, 추후 기능을 추가할 때 이슈가 생길 가능성이 있어 성능적으로 좋지 않을 수 있으므로, Intersection Observer를 활용하여 무한 스크롤을 구현했습니다.',
      },
    ],
    retrospective:
      '공통 컴포넌트를 분리하여 통일성 있는 UI를 구현하고, 직접 무한 스크롤을 구현하면서 해당 로직에 대해 더 이해할 수 있는 좋은 경험을 했습니다. 자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.',
  },
  {
    title: '영화 트레일러 사이트 개발 프로젝트',
    stack: ['JavaScript', 'React', 'Emotion', 'SWR', 'Git'],
    period: '2022.09.06 - 2022.09.08',
    type: '팀 프로젝트 / 프론트엔드',
    imgUrl: Project_MovieTrailer,
    url: {
      pageUrl: 'https://wanted-movie-trailer.netlify.app/',
      githubUrl:
        'https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-1-2-team-2',
      retroUrl: 'https://minilog.vercel.app/blog/preonboarding-assignment-imlab',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          '캐싱된 데이터를 가져와 UI를 구현하고, Query Parameter를 활용해 검색 요청을 하도록 구현했습니다.',
      },
    ],
    retrospective:
      '검색 과정에서 초기값 이슈를 해결하기 위해 다양한 방법을 고민했고 팀원이 작성한 로직의 문제점을 서로 피드백하며 수정하며 Best Practice를 만들기 위해 노력했습니다. 자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.',
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
      retroUrl: 'https://minilog.vercel.app/blog/preonboarding-assignment-fruitte',
    },
    descriptions: [
      {
        tag: 'UI/UX',
        content:
          '상품이 많아질수록 목록 렌더링 시간이 길어지므로, 사용자의 대기 시간을 줄이고자 페이지네이션 로직을 API 호출 없이 프론트단에서 직접 구현했습니다.',
      },
      {
        tag: 'UI/UX',
        content:
          '이미지의 통일성이 없는 점, 상품의 제목과 설명이 줄바꿈이 되어 UI를 해치는 점 등의 기존 웹 사이트의 문제점을 개선하고자 UI를 수정하여 구현했습니다.',
      },
    ],
    retrospective:
      '페이지네이션 로직의 구조를 하나하나 확인하며 구현하면서 해당 로직을 조금 더 이해할 수 있게 되었고, 사소한 수정 사항이라도 UI/UX에 큰 영향을 미칠 수 있다는 것을 알게된 프로젝트입니다. 자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.',
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
      retroUrl: 'https://minilog.vercel.app/blog/cfd-retrospective',
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
          'UX를 개선하기 위해 실제 사용자의 흐름에 따라 button, input 등 UI의 위치를 수정하고 자동 포커스 스크롤 기능을 구현했습니다.',
      },
    ],
    retrospective:
      '에디터 라이브러리를 적용하는데 어려움을 겪었고, 백엔드와의 협업 과정에서 발생한 소통 이슈로 시간적으로 여유가 부족한 와중에 끝까지 이슈를 해결하며 배포를 진행한 프로젝트입니다. 자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.',
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
      retroUrl: 'https://minilog.vercel.app/blog/collectors-retrospective',
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
      '팀에서 비동기적으로 협업하는 방식을 체득하고, 기본적인 웹 스토어의 기능을 구현하면서 재미있는 시간을 보낸 프로젝트입니다. 추가적으로 JavaScript로 진행하면서 React와 Next.js의 필요성을 느꼈습니다. 자세한 회고와 트러블슈팅은 아래 링크에서 보실 수 있습니다.',
  },
];

export default projects;
