# 프론트엔드 개발자 이형민입니다.

Next.js, TypeScript, Tailwind CSS, Framer Motion을 활용한 포트폴리오 사이트입니다.

- 개발자로서 자신의 프로젝트와 관련 정보를 제공하기 위해 포트폴리오 웹 사이트를 제작했습니다.
- 기획부터 배포까지 혼자 진행하면서 TypeScript, Tailwind CSS 등 새로운 기술을 학습할 수 있는 좋은 경험이었습니다.

## 페이지

[포트폴리오 보러가기](https://hyoungmin-portfolio.vercel.app/)

## 기획

[기획서 보러가기](https://hyoungmin.notion.site/7a6fe0dff3ea49e8ae0fdcf8923bb7d9)

[Figma](https://www.figma.com/file/ckqZTsvuqp94wif2lsv50A/Portfolio?node-id=125%3A471)

## 기간

2022.09.30 - 2022.10.14

## 기술 스택

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- ESLint
- Prettier
- Husky

## 디렉토리 구조

```
📦
├─ components
│  ├─ about
│  ├─ common
│  │  ├─ Footer
│  │  ├─ Header
│  │  ├─ Layout
│  │  └─ QuickMenu
│  ├─ experience
│  ├─ home
│  └─ projects
├─ constants
│  └─ routes.ts
├─ data
│  ├─ aboutData.ts
│  ├─ educationData.ts
│  └─ projectData.ts
├─ pages
│  ├─ _app.tsx
│  ├─ _document.tsx
│  └─ index.tsx
├─ public
│  ├─ favicon.svg
│  ├─ icons
│  └─ images
├─ styles
├─ .eslintignore
├─ .eslintrc.ts
├─ .gitignore
├─ .husky
├─ .prettierignore
├─ .prettierrc
├─ README.md
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ tsconfig.json
```

## 주요 구현 사항

- 모바일 유저를 위해 반응형 디자인으로 구성했습니다.
- Framer Motion을 활용한 애니메이션을 추가해 UX를 향상시키고자 했습니다.
- 1 page 형식으로 포트폴리오를 구현하고, 스크롤 애니메이션을 추가했습니다.
- Next.js의 `_app`, `_document`를 활용해 레이아웃과 전역 스타일을 추가했습니다.
- TypeScript를 적용하면서 TypeScript의 유용성과 효율성에 대해 느꼈습니다.
- 명시적으로 디자인을 확인할 수 있는 TailWind CSS를 통해 반응형 디자인과 전체적인 커스텀 디자인을 구현했습니다.
