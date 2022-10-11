import React from 'react';

const QuickMenu = () => {
  return (
    <div className="fixed w-fit left-5 top-[50%]">
      <div className="absolute top-0 w-1 h-full bg-black -left-2 " />
      <ul className="flex flex-col items-center gap-3">
        <li>
          <a href="https://github.com/hyoungqu23" target="_blank">
            <img className="w-5 h-5" src="/image/github.svg" alt="깃허브" />
          </a>
        </li>
        <li>
          <a href="https://open.kakao.com/o/szcSNlHe" target="_blank">
            <img className="w-5 h-5" src="/image/kakao.svg" alt="카카오톡 오픈채팅" />
          </a>
        </li>
        <li>
          <a
            href="https://hyoungmin.notion.site/f4673e33e89f4143a0526b91d0040f89?v=38d3e22f4eb242149ed9dc21f53f7e6a"
            target="_blank"
          >
            <img className="w-5 h-5" src="/image/blog.svg" alt="블로그" />
          </a>
        </li>
        <li>
          <a href="mailto:hyoungqu23@gmail.com" target="_blank">
            <img className="w-5 h-5" src="/image/google.svg" alt="구글 메일" />
          </a>
        </li>
        <li>
          <a
            href="https://hyoungmin.notion.site/Hyoungmin-148ffdf1a5fe480b865ff6a0de802444"
            target="_blank"
          >
            <img className="w-5 h-5" src="/image/notion.svg" alt="노션" />
          </a>
        </li>
        <li>
          <a href="linkedin.com/in/hyoung-min-lee-9b5489196" target="_blank">
            <img className="w-5 h-5" src="/image/linkedin.svg" alt="링크드인" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickMenu;
