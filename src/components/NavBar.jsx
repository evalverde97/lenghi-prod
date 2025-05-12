import '../styles/_navbar.scss';
import logo from '../assets/logo-lenghi.jpg'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Lenghi Logo" />
      </div>
      <div className="navbar-right">
        <ul>
          <li>Juegos</li>
          <li>Noticias</li>
          <li>Videos</li>
          <li>Descargas</li>
          <li>Tienda</li>
          <li>Ayuda</li>
        </ul>
        <a download>
        <button className="yellow-button">Descargar</button>
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
