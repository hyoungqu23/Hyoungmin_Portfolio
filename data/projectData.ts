type Description = {
  tag: string;
  content: string;
};

type Url = {
  pageUrl?: string;
  githubUrl: string;
  notionUrl?: string;
  figmaUrl?: string;
};

interface Projects {
  title: string;
  descriptions: Description[];
  stack: string[];
  period: string;
  type: string;
  url: Url;
}

const projects: Projects[] = [
  {
    title: 'SPA Routing 기능 개발 프로젝트',
    stack: ['JavaScript', 'React', 'Context API'],
    period: '2022.10.06 - 2022.10.07',
    type: '개인 프로젝트 / 프론트엔드',
    url: {
      githubUrl: 'https://github.com/hyoungqu23/SPA_Router',
      notionUrl: 'https://www.notion.so/SPA-Routing-524ab86f0720449a88b81bfdc353c10c',
    },
    descriptions: [
      {
        tag: 'feature',
        content:
          'SPA의 핵심 기능 중 하나인 Routing 기능 중 기본적인 부분을 react-router-dom 라이브러리 없이 직접 구현했습니다.',
      },
    ],
  },
  {
    title: '투자 관리 서비스 Admin 기능 개발 프로젝트',
    stack: ['JavaScript', 'React', 'Redux', 'Chakra UI', 'Git'],
    period: '2022.09.20 - 2022.09.25',
    type: '팀 프로젝트 / 프론트엔드 5명',
    url: {
      pageUrl: '',
      githubUrl:
        'https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-4-1-team-2',
      notionUrl: 'https://www.notion.so/admin-eeca6c576a0a4a68a155d3b7639c2856',
      figmaUrl: '',
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
  },
  {
    title: '댓글 기능 개발 프로젝트',
    stack: ['JavaScript', 'React', 'Redux', 'Redux-Toolkit', 'Git'],
    period: '2022.09.16 - 2022.09.19',
    type: '팀 프로젝트 / 프론트엔드 5명',
    url: {
      pageUrl: '',
      githubUrl:
        'https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-3-2-team-2',
      notionUrl: 'https://www.notion.so/e93ad69d33d5476fba1a6f491c286c8a',
      figmaUrl: '',
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
  },
  {
    title: '온라인 스토어 신규 페이지 리뉴얼 프로젝트',
    stack: ['JavaScript', 'React', 'Emotion', 'Redux', 'Redux-Persist', 'Git'],
    period: '2022.09.02 - 2022.09.05',
    type: '팀 프로젝트 / 프론트엔드 8명',
    url: {
      pageUrl: 'https://fruitte-renewal.netlify.app/',
      githubUrl:
        'https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-1-2-team-2',
      notionUrl: 'https://www.notion.so/8712c6543e664ee3931a4e07018e523f',
      figmaUrl: '',
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
  },
  {
    title: 'CFD',
    stack: ['JavaScript', 'Next.js', 'Redux', 'Emotion', 'Ant Design', 'Express', 'MongoDB', 'Git'],
    period: '2022.07.04 - 2022.07.22',
    type: '팀 프로젝트 / 프론트엔드 3명 + 백엔드 2명',
    url: {
      pageUrl: '',
      githubUrl: 'https://github.com/hyoungqu23/CFD',
      notionUrl: 'https://www.notion.so/Community-For-Developers-f28f68db503d493bb46c755521fcc949',
      figmaUrl: '',
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
  },
  {
    title: 'Collector’s',
    stack: ['JavaScript', 'CSS3', 'MongoDB', 'Express', 'S3', 'Git'],
    period: '2022.05.23 - 2022.06.03',
    type: '팀 프로젝트, 프론트엔드 2명 + 백엔드 2명',
    url: {
      pageUrl: 'https://collectors-twenty.herokuapp.com/',
      githubUrl: 'https://github.com/Elice-Team-20/Collectors',
      notionUrl: 'https://www.notion.so/20-1335219f96a64e678f66152f45666389',
      figmaUrl: 'https://www.figma.com/file/MmTalHhD88uGEyQJGJKyoe/Pet-Shop?node-id=637%3A49',
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
  },
];

export default projects;
