import Head from 'next/head';
import Header from 'components/common/Header/Header';
import Footer from 'components/common/Footer/Footer';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => (
  <div className="h-screen">
    <Head>
      <title>PortFolio - HyoungMin</title>
      <meta name="description" content="Hyoungmin's PortFolio" />
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Header />
    <main className="container h-[80vh] py-2 w-4/5 m-auto">{children}</main>
    <Footer />
  </div>
);

export default Layout;
