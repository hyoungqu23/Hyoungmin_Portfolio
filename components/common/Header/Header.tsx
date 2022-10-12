import { useState } from 'react';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { ROUTES } from 'constants/routes';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="z-30 relative flex items-center js mx-auto md:sticky top-0 h-[10vh] w-4/5 justify-between md:bg-transparent md:flex-row">
      <div className="text-xl font-bold tracking-widest text-center md:text-2xl">
        <Typewriter words={['hyoungmin']} loop={true} />
      </div>
      <button className="cursor-pointer md:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu ? '닫기' : '열기'}
      </button>
      <nav
        className={`absolute top-[10vh] transition-all duration-300 ease-in left-0 w-full md:static ${
          toggleMenu ? 'top-[10vh] opacity-100' : 'top-[-50vh] opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-5 py-5 text-base text-center md:flex-row md:gap-10 md:text-lg">
          <li onClick={() => setToggleMenu(!toggleMenu)}>
            <a href={ROUTES.HOME}>홈</a>
          </li>
          <li onClick={() => setToggleMenu(!toggleMenu)}>
            <Link href={ROUTES.ABOUT}>소개</Link>
          </li>
          <li onClick={() => setToggleMenu(!toggleMenu)}>
            <Link href={ROUTES.PROJECTS}>프로젝트</Link>
          </li>
          <li onClick={() => setToggleMenu(!toggleMenu)}>
            <Link href={ROUTES.EXPERIENCE}>경험/교육</Link>
          </li>
          <li onClick={() => setToggleMenu(!toggleMenu)}>
            <Link href={ROUTES.MORE}>더 알아보기</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
