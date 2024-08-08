import "./galeriaImagens.css"


const imagens = [
  { url: "https://via.placeholder.com/150", legenda: "Imagem 1" },
  { url: "https://via.placeholder.com/150", legenda: "Imagem 2" },
  { url: "https://via.placeholder.com/150", legenda: "Imagem 3" },
];

function GaleriaImagens() {
  return (
    <div className="all">
      <h1>Galeria de Imagens</h1>
      <div className="galeria">
        <div className="card_galeria">
          {imagens.map((imagem, index) => (
            <div key={index} className="card_imagem">
              <img src={imagem.url} alt={imagem.legenda} />
              <p>{imagem.legenda}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GaleriaImagens;
