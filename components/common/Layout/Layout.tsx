import Head from 'next/head';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="h-screen">
      <Head>
        <title>PortFolio - HyoungMin</title>
        <meta name="description" content="Hyoungmin's PortFolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className="py-2 w-4/5 m-auto">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
