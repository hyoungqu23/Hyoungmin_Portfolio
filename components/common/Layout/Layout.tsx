import Head from 'next/head';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

const pageSwitchAnimation = {
  initialState: {
    opacity: 0,
  },
  animateState: {
    opacity: 1,
  },
};

const Layout = (props: Props) => {
  const router = useRouter();

  console.log(router);

  return (
    <motion.div
      key={router.route}
      initial="initialState"
      animate="animateState"
      transition={{
        duration: 0.5,
      }}
      variants={pageSwitchAnimation}
      className="h-screen"
    >
      <Head>
        <title>PortFolio - HyoungMin</title>
        <meta name="description" content="Hyoungmin's PortFolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <main className="container h-[80vh] py-2 w-4/5 m-auto">{props.children}</main>
      <Footer />
    </motion.div>
  );
};

export default Layout;
