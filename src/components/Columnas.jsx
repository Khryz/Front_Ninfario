import "./Columnas.css";

function Columnas() {
  return (
    <>
      <div style={{ paddingTop: "10px", paddingBottom: "5px", alignItems:"center", textAlign:"center"}}>
        <h1 style={{ textAlign: "center" }}>
          🌿✨ ¡Bienvenidos a Ninfario! ✨🌿
        </h1>
        <p className="p_texto" style={{ textAlign: "center" }}>
          El hogar donde la pasión por las ninfas se convierte en una
          experiencia única.
        </p>
        <p className="p_texto" style={{ textAlign: "center", width: "80%", display: "flex", margin:"auto"}}>
          En Ninfario, creemos que cada ninfa es especial. Por eso hemos creado
          un espacio dedicado a quienes aman, cuidan o desean conocer más sobre
          estos maravillosos compañeros alados. Aquí encontrarás mucho más que
          un catálogo: descubrirás un lugar lleno de información, cariño y
          dedicación.
        </p>
        <p className="p_SemiTema" style={{ textAlign: "center", paddingTop: "10px"}}>🐥 ¿Por qué visitar Ninfario?</p>
      </div>
    <div className="contenedor-5-columnas">
      <div>
        <p className="p" style={{ textAlign: "center" }}>🌟 Diversidad de ninfas</p>
        <p style={{ textAlign: "center" }}>
          Explora una amplia variedad de ninfas: lutinas, perladas, cara blanca,
          albinas, ancestrales y muchas más. Cada una con su propia personalidad
          y encanto, presentadas en imágenes claras y detalladas.
        </p>
      </div>
      <div>
        <p className="p" style={{ textAlign: "center" }}>💚 Transparencia y confianza</p>
        <p style={{ textAlign: "center" }}>
          Mostramos de forma clara la disponibilidad, características y precios
          de cada ninfa. Queremos que tomes decisiones informadas y seguras.
        </p>
      </div>
      <div>
        <p className="p" style={{ textAlign: "center" }}>📸 Fotografías reales y en alta calidad</p>
        <p style={{ textAlign: "center" }}>
          Nuestras imágenes en HD permiten apreciar cada detalle, para que
          conozcas a las ninfas tal como son.
        </p>
      </div>
      <div>
        <p className="p" style={{ textAlign: "center" }}>📘 Aprendizaje para todos</p>
        <p style={{ textAlign: "center" }}>
          Si eres nuevo en el mundo de las ninfas, aquí encontrarás información
          útil, consejos y datos que te ayudarán a brindarles el mejor cuidado.
        </p>
      </div>
      <div>
        <p className="p" style={{ textAlign: "center" }}>🐥 Un espacio hecho con amor</p>
        <p style={{ textAlign: "center" }}>
          Cada ninfa ha sido criada con dedicación y respeto. En Ninfario
          compartimos no solo aves… compartimos historias, vida y compañía.
        </p>
      </div>
    </div>
    </>
  );
}

export default Columnas;
