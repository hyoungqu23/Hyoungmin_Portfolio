export interface EducationData {
  institute: string;
  period: string;
  program: string;
  retroUrl?: string;
}

export const educationData: EducationData[] = [
  {
    institute: '원티드',
    program: '프리온보딩 프론트엔드 챌린지',
    period: '2022.10.04 - 2022.10.15',
    retroUrl: 'https://minilog.vercel.app/blog/preonboarding-challenge-retrospective',
  },
  {
    institute: '원티드',
    program: '프리온보딩 프론트엔드 코스',
    period: '2022.08.29 - 2022.09.30',
    retroUrl: 'https://minilog.vercel.app/blog/preonboarding-retrospective',
  },
  {
    institute: '엘리스',
    program: 'SW 엔지니어 트랙 2기',
    period: '2022.04.04 - 2022.07.22',
  },
];
