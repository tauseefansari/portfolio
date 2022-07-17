import { FC } from 'react';
import { useSelector } from 'react-redux';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';
import Loader from './Helpers/Loader';
import Preloader from './Helpers/Preloader';
import useConfiguration from './hooks/use-configuration';
import { RootState } from './redux/store';

const App: FC = () => {
  const configLoaded = useConfiguration();
  const loading = useSelector((state: RootState) => state.config.loading);

  return loading ? (
    <>
      {configLoaded && <Preloader />}
      <Loader />
    </>
  ) : (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
