import './styles/main.scss';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import DownloadPanel from './components/DownloadPanel';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <DownloadPanel />
      <Carousel />
    </>
  );
}

export default App;
