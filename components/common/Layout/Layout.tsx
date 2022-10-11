import Head from 'next/head';
import Header from 'components/common/Header/Header';
import QuickMenu from 'components/common/QuickMenu/QuickMenu';
import Footer from 'components/common/Footer/Footer';
import { PropsWithChildren } from 'react';

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>HyoungMin</title>
        <meta name="description" content="Hyoungmin's PortFolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      {props.children}
      <QuickMenu />
      <Footer />
    </>
  );
};

export default Layout;
