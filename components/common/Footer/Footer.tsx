const Footer = () => {
  return (
    <footer className="absolute bottom-0 flex w-full h-[10vh] items-center flex-col p-1 gap-2 lg:flex-row lg:justify-evenly">
      <div className="text-sm ">Copyright 2022. Hyougmin. All rights reserved.</div>
      <ul className="flex items-center text-primary gap-x-5 lg:gap-x-10">
        <li>
          <a href="https://github.com/hyoungqu23">
            <img className="w-5 h-5 lg:w-7 lg:h-7" src="/image/github.svg" alt="깃허브" />
          </a>
        </li>
        <li>
          <a href="/">
            <img className="w-5 h-5 lg:w-7 lg:h-7" src="/image/blog.svg" alt="블로그" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/hyoungqu23">
            <img className="w-5 h-5 lg:w-7 lg:h-7" src="/image/instagram.svg" alt="인스타그램" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/hyoungmin.lee.92">
            <img className="w-5 h-5 lg:w-7 lg:h-7" src="/image/facebook.svg" alt="페이스북" />
          </a>
        </li>
        <li>
          <a href="mailto:hyoungqu23@gmail.com">
            <img className="w-5 h-5 lg:w-7 lg:h-7" src="/image/google.svg" alt="구글 메일" />
          </a>
        </li>
        <li>
          <a href="https://hyoungmin.notion.site/Hyoungmin-148ffdf1a5fe480b865ff6a0de802444">
            <img className="w-5 h-5 lg:w-7 lg:h-7" src="/image/notion.svg" alt="노션" />
          </a>
        </li>
        <li>
          <a href="linkedin.com/in/hyoung-min-lee-9b5489196">
            <img className="w-5 h-5 lg:w-7 lg:h-7" src="/image/linkedin.svg" alt="링크드인" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
