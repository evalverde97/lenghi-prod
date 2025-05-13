import '../styles/_downloadPanel.scss';
import miniatura from "../assets/estudio-in-game.png"

const DownloadPanel = () => {
  return (
    <div className="download-panel">
      <img src={miniatura} style={{ width: 200}} />
      <h2>Descarga la última versión</h2>
      <a
        href="https://drive.google.com/drive/folders/1yTbHCUXnrtk4o87AmLXeDXRVGBmpWINc"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <button className="yellow-button">DESCARGAR</button>
      </a>
    </div>
  );
};

export default DownloadPanel;
