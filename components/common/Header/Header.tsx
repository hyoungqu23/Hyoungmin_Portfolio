import Link from 'next/link';
import { ROUTES } from '../../../constants/routes';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="flex h-[7.5vh] justify-between items-center px-2 md:px-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-base font-bold tracking-widest md:text-2xl lg:text-3xl"
      >
        <Link href={ROUTES.HOME}>
          <a>이형민</a>
        </Link>
      </motion.div>
      <motion.nav
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <ul className="flex gap-5 text-base md:gap-16 lg:gap-20 md:text-lg lg:text-xl">
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
      </motion.nav>
    </header>
  );
};

export default Header;
