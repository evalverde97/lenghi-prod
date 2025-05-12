import './styles/main.scss';
import Navbar from './components/Navbar';
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
