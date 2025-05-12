import '../styles/_hero.scss';
import background from '../assets/lenghi-in-game1.png'; 
import characters from '../assets/plano-lt-game.png';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${background})` }}>
      <div className="overlay">
        {/* <img src={characters} alt="Characters" className="characters" /> */}
        <h1>LT Game</h1>
        <p className="release-date">Próximamente</p>
        <button className="learn-more">Ver más</button>
      </div>
    </section>
  );
};

export default Hero;
