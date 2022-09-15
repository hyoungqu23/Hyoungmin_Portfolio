import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between font-bold text-base md:text-xl lg:text-2xl px-2 md:px-5">
      <Link href="/">
        <a>이형민</a>
      </Link>
      <nav>
        <ul className="flex gap-5 md:gap-16 lg:gap-20">
          <li>
            <Link href="/about">소개</Link>
          </li>
          <li>
            <Link href="/projects">프로젝트</Link>
          </li>
          <li>
            <Link href="/experience">경험</Link>
          </li>
          <li>
            <Link href="/more">더 알아보기</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
