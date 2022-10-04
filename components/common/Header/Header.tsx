import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { ROUTES } from 'constants/routes';

const Header = () => {
  return (
    <header className="z-10 sticky top-0 flex h-[10vh] w-4/5 mx-auto justify-between items-center">
      <div className="text-base font-bold tracking-widest md:text-2xl lg:text-3xl">
        <Typewriter words={['hyoungmin']} />
      </div>
      <nav>
        <ul className="flex gap-5 text-base lg:gap-10 lg:text-lg">
          <li>
            <a href={ROUTES.HOME}>홈</a>
          </li>
          <li>
            <Link href={ROUTES.ABOUT}>소개</Link>
          </li>
          <li>
            <Link href={ROUTES.PROJECTS}>프로젝트</Link>
          </li>
          <li>
            <Link href={ROUTES.EXPERIENCE}>경험/교육</Link>
          </li>
          <li>
            <Link href={ROUTES.MORE}>더 알아보기</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
