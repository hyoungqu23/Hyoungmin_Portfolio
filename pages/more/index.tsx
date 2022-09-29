import type { NextPage } from 'next';

const More: NextPage = () => {
  return (
    <div className="container flex flex-col items-center justify-center h-full mx-auto">
      <ul className="flex items-center text-primary gap-x-5 lg:gap-x-10">
        <li>
          <a href="https://github.com/hyoungqu23">
            <img className="h-20 lg:h-32" src="/image/github.svg" alt="깃허브" />
          </a>
        </li>
        <li>
          <a href="/">
            <img className="h-20 lg:h-32" src="/image/blog.svg" alt="블로그" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/hyoungqu23">
            <img className="h-20 lg:h-32" src="/image/instagram.svg" alt="인스타그램" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/hyoungmin.lee.92">
            <img className="h-20 lg:h-32" src="/image/facebook.svg" alt="페이스북" />
          </a>
        </li>
        <li>
          <a href="mailto:hyoungqu23@gmail.com">
            <img className="h-20 lg:h-32" src="/image/google.svg" alt="구글 메일" />
          </a>
        </li>
        <li>
          <a href="https://hyoungmin.notion.site/Hyoungmin-148ffdf1a5fe480b865ff6a0de802444">
            <img className="h-20 lg:h-32" src="/image/notion.svg" alt="노션" />
          </a>
        </li>
        <li>
          <a href="linkedin.com/in/hyoung-min-lee-9b5489196">
            <img className="h-20 lg:h-32" src="/image/linkedin.svg" alt="링크드인" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default More;
