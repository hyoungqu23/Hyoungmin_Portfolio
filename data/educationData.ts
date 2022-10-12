export interface EducationData {
  institute: string;
  period: string;
  program: string;
  notionUrl?: string;
}

export const educationData: EducationData[] = [
  {
    institute: '원티드',
    program: '프리온보딩 프론트엔드 챌린지',
    period: '2022.10.04 - 2022.10.15',
  },
  {
    institute: '원티드',
    program: '프리온보딩 프론트엔드 코스',
    period: '2022.08.29 - 2022.09.30',
    notionUrl: 'https://hyoungmin.notion.site/9a60af68222c403292e2f638a274b462',
  },
  {
    institute: '엘리스',
    program: 'SW 엔지니어 트랙 2기',
    period: '2022.04.04 - 2022.07.22',
  },
];
