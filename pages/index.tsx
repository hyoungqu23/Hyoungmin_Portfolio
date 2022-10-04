import type { NextPage } from 'next';
import Home from 'components/home/Home';
import About from 'components/about/About';
import Experience from 'components/experience/Experience';

const Main: NextPage = () => {
  return (
    <main className="w-4/5 mx-auto">
      <Home />
      <About />
      <Experience />
    </main>
  );
};

export default Main;
