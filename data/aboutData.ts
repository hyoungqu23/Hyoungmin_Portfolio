export interface AboutData {
  title: string;
  content: string;
}

type AboutDetail = AboutData[];

export const aboutDetailData: AboutDetail = [
  {
    title: '피드백을 좋아합니다.',
    content:
      '누구에게나 설명할 수 있고, 이해할 수 있는 코드를 작성하면서 협업의 효율을 높이는 것을 목표로 합니다.',
  },
  {
    title: 'UI/UX 개선을 우선합니다.',
    content:
      '사용자가 내가 완성한 서비스를 사용하면서 편리함과 즐거움을 찾아갈 수 있도록 고민합니다.',
  },
  {
    title: '기술과 툴에 관심이 많습니다.',
    content:
      '서비스의 질적 향상과 효율적인 협업을 위해 Clean Code, CI/CD, 최적화, 다양한 협업 툴 활용 등에 꾸준히 관심을 갖고 학습합니다.',
  },
  {
    title: '지식의 선순환을 꿈꾸고 있습니다.',
    content:
      '보다 많은 사람들에게 지식을 공유하고, 함께 성장해나가는 것을 꿈꿔 블로그에 작성할 글을 꾸준히 작성하고 있습니다.',
  },
];
