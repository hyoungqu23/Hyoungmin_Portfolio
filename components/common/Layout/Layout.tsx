import Head from 'next/head';
import Header from 'components/common/Header/Header';
import Footer from 'components/common/Footer/Footer';
import { PropsWithChildren } from 'react';
import profile from 'public/icons/profile.svg';

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>HyoungMin's Portfolio</title>
        <meta
          name="description"
          content="안녕하세요, 피드백과 협업을 즐기는 프론트엔드 개발자 이형민입니다."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Hyoungmin's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hyoungmin-portfolio.vercel.app/" />
        <meta property="og:image" content={profile} />
        <meta property="og:article:author" content="Hyoungmin" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
