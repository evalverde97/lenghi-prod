import '../styles/_carousel.scss';
import image2 from "../assets/estudio-in-game.png"
import image from "../assets/lenghi2-in-game.jpg"
import image3 from "../assets/map-in-game.jpg"
import image4 from "../assets/lenghi-in-game1.png"

const games = [
  {
    title: 'El estudio',
    image: image2,
  },
  {
    title: 'Jugabilidad',
    image: image,
  },
  {
    title: 'Tus personajes son los bro...',
    image: image4,
  },
  {
    title: 'Mundo abierto',
    image: image3,
  },
];

export default function Carousel() {
  return (
    <section className="carousel">
      <h2>Vista previa</h2>
      <div className="carousel-container">
        {games.map((game, index) => (
          <div className="card" key={index}>
            <img src={game.image} alt={game.title} />
            <p>{game.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
