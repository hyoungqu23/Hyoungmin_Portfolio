import React from 'react';
import { ROUTES } from 'constants/routes';

const QuickMenu = () => {
  return (
    <aside className="hidden md:fixed w-fit left-5 top-[40%] dark:bg-white rounded-sm opacity-75 dark:p-3">
      <div className="absolute top-0 w-1 h-full bg-black dark:hidden dark:bg-white -left-2 " />
      <ul className="flex flex-col items-center gap-3">
        <li>
          <a href={ROUTES.GITHUB} target="_blank">
            <img className="w-5 h-5" src="/icons/github.svg" alt="깃허브" />
          </a>
        </li>
        <li>
          <a href={ROUTES.KAKAO} target="_blank">
            <img className="w-5 h-5" src="/icons/kakao.svg" alt="카카오톡 오픈채팅" />
          </a>
        </li>
        <li>
          <a href={ROUTES.BLOG} target="_blank">
            <img className="w-5 h-5" src="/icons/blog.svg" alt="블로그" />
          </a>
        </li>
        <li>
          <a href={ROUTES.EMAIL} target="_blank">
            <img className="w-5 h-5" src="/icons/google.svg" alt="구글 메일" />
          </a>
        </li>
        <li>
          <a href={ROUTES.NOTION} target="_blank">
            <img className="w-5 h-5" src="/icons/notion.svg" alt="노션" />
          </a>
        </li>
        <li>
          <a href={ROUTES.LINKEDIN} target="_blank">
            <img className="w-5 h-5" src="/icons/linkedin.svg" alt="링크드인" />
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default QuickMenu;
