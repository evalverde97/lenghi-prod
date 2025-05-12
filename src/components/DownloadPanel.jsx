import '../styles/_downloadPanel.scss';
import miniatura from "../assets/estudio-in-game.png"

const DownloadPanel = () => {
  return (
    <div className="download-panel">
      <img src={miniatura} style={{ width: 200}} />
      <h2>Descarga la última versión</h2>
      <a download>
        <button onClick={() => alert('Avise al programador que se ponga las pilas...')}>DESCARGAR</button>
      </a>
    </div>
  );
};

export default DownloadPanel;
