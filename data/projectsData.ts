interface Projects {
  title: string;
  descriptions: string[];
  summary: string;
  period: string;
  type: string;
  pageUrl?: string;
  githubUrl: string;
  notionUrl?: string;
  figmaUrl?: string;
}

// {
//   title: '',
//   summary: '',
//   period: '',
//   type: '',
//   descriptions: ['', '', '', ''],
//   pageUrl: '',
//   githubUrl: '',
//   notionUrl: '',
//   figmaUrl: '',
// },
export const PROJECTS: Projects[] = [
  {
    title: '프론트엔드 개발자 이형민입니다',
    summary: 'Next.js를 활용한 포트폴리오 사이트',
    period: '2022.09.15 - 2022.09.20',
    type: '개인 프로젝트',
    descriptions: [
      'Next.js를 활용해 페이지 기반 Route를 쉽게 구현했습니다.',
      'Next.js의 _app, _document를 활용해 레이아웃과 전역 스타일을 추가했습니다.',
      'TypeScript를 배워 적용하면서 익숙해지고 있습니다.',
      '명시적으로 디자인을 확인할 수 있는 TailWind CSS를 통해 반응형 디자인과 전체적인 커스텀 디자인을 구현했습니다.',
      'Framer Motion 등 라이브러리를 적절히 활용해 UX와 UI 디자인을 보다 향상시키고자 했습니다.',
      'Notion과 Figma를 활용해 기본 구조와 디자인을 기획했습니다.',
    ],
    githubUrl: 'https://github.com/hyoungqu23/Hyoungmin_Portfolio',
    notionUrl: 'https://www.notion.so/hyoungmin/Hyoungmin-148ffdf1a5fe480b865ff6a0de802444',
  },
  {
    title: 'CFD - Community For Developers',
    summary: '개발자를 위한 커뮤니티, CFD입니다.',
    period: '2022.07.04 - 2022.07.22',
    type: '팀 프로젝트, 프론트엔드',
    descriptions: [
      'Next.js Server Side Rendering을 활용해 보다 빠른 응답 속도의 페이지를 구현하고, SEO를 향상시켰으며, 파일 기반 라우트를 활용했습니다.',
      '질문, 답변, 댓글 CRUD를 구현했습니다.',
      '실제 유저의 흐름에 따라 버튼의 위치, 답변하기 Form에 자동 포커스 등 UI를 개선했습니다.',
      '더 나은 UX를 위해 좋아요 기능을 구현하여 높은 평가를 받은 답변을 상단에 배치하고, 반응형 디자인을 적용했습니다.',
      '무한 스크롤과 검색을 적용해 수많은 질문 중 유저가 필요로하는 질문을 원활하게 검색할 수 있도록 구현했습니다.',
      'emotion과 함께 UI Framework를 활용해 쉽고 깔끔하게 웹 페이지를 디자인했습니다.',
      'Notion과 Figma를 활용해 기본 구조와 디자인을 기획했습니다.',
    ],
    githubUrl: 'https://github.com/hyoungqu23/CFD',
    notionUrl:
      'https://hyoungmin.notion.site/Community-For-Developers-f28f68db503d493bb46c755521fcc949',
  },
  {
    title: `Collector's`,
    summary: '수많은 사람들의 상상을 실현시켜줄 수 있는 쇼핑몰',
    period: '2022.06.13 - 2022.06.24',
    type: '팀 프로젝트 - 프론트엔드',
    descriptions: [
      '쇼핑몰 서비스의 프론트엔드 파트를 담당했습니다.',
      '홈 화면과 유저 정보 페이지, 상품 목록 페이지를 구현하고, 반응형 웹 디자인을 추가했습니다.',
      'UX 개선을 위한 최근 본 상품 목록 기능, 매진 임박 상품 알림 기능을 추가했습니다.',
      '비즈니스 측면에서 소비자 구매 유도를 위한 유저 Stat UI를 구현했습니다.',
      'ES6 문법에 익숙해지기 위해 활용했습니다.',
      'Figma를 활용해 와이어프레임과 프로토타입을 제작했습니다.',
      'fetch API를 활용해 비동기적으로 서버와 통신하여 데이터를 가져와 UI를 구현했습니다.',
      '백엔드 개발자와 API 등 필요한 명세에 관한 문서화를 기반으로 원활히 소통하면서 협업에서의 문서화와 소통의 중요성을 깨달았습니다.',
    ],
    pageUrl: 'https://collectors-twenty.herokuapp.com/',
    githubUrl: 'https://github.com/Elice-Team-20/Collectors',
    notionUrl: 'https://yerik.notion.site/20-1335219f96a64e678f66152f45666389',
    figmaUrl: 'https://www.figma.com/file/MmTalHhD88uGEyQJGJKyoe/Pet-Shop?node-id=637%3A49',
  },
];
