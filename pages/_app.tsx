import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/common/Layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
};

export default MyApp;
