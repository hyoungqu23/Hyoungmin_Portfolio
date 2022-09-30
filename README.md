# 프론트엔드 개발자 이형민입니다.

![image](https://user-images.githubusercontent.com/76457116/193171448-842eff80-f974-4579-aa44-3909dcebbe4c.png)

Next.js, TypeScript, Tailwind CSS, Framer Motion을 활용한 포트폴리오 사이트입니다.

## 페이지

[포트폴리오 보러가기](https://hyoungmin-portfolio.vercel.app/)

## 기간

2022.09.15 - 2022.09.20

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
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ .husky
├─ .prettierignore
├─ .prettierrc
├─ README.md
├─ components
│  ├─ common
│  └─ projects
├─ constants
├─ data
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ about
│  ├─ experience
│  ├─ index.tsx
│  ├─ more
│  └─ projects
├─ postcss.config.js
├─ public
├─ styles
├─ tailwind.config.js
└─ tsconfig.json
```

## 주요 구현 사항

- 모바일 유저를 위해 반응형 디자인으로 구성했습니다.
- Framer Motion을 활용해 페이지 전환 등 애니메이션을 추가해 UX를 향상시키고자 했습니다.
- Next.js의 페이지 라우트 기능을 활용해 1 page 방식으로 포트폴리오를 구현했습니다.
- Next.js의 `_app`, `_document`를 활용해 레이아웃과 전역 스타일을 추가했습니다.
- TypeScript를 적용하면서 TypeScript의 유용성과 효율성에 대해 느꼈습니다.
- 명시적으로 디자인을 확인할 수 있는 TailWind CSS를 통해 반응형 디자인과 전체적인 커스텀 디자인을 구현했습니다.

## 참고 자료

- [Next.js 공식문서](https://nextjs.org/docs/getting-started#automatic-setup)
- [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [husky 로 git hook 하자](https://library.gabia.com/contents/8492/)
- [Git Hooks](https://git-scm.com/book/ko/v2/Git%EB%A7%9E%EC%B6%A4-Git-Hooks)
