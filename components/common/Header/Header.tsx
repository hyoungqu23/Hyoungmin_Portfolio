import Link from 'next/link';
import { ROUTES } from '../../../constants/routes';

const Header = () => {
  return (
    <header className="flex h-[7.5vh] justify-between items-center font-bold text-base md:text-xl lg:text-2xl px-2 md:px-5">
      <Link href={ROUTES.HOME}>
        <a>이형민</a>
      </Link>
      <nav>
        <ul className="flex gap-5 md:gap-16 lg:gap-20">
          <li>
            <Link href={ROUTES.ABOUT}>소개</Link>
          </li>
          <li>
            <Link href={ROUTES.PROJECTS}>프로젝트</Link>
          </li>
          <li>
            <Link href={ROUTES.EXPERIENCE}>경험</Link>
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
