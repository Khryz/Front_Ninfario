import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-info">
          <h3 style={styles.textos_principal}>Ninfario</h3>
          <p style={styles.textos}>
            Somos un espacio dedicado a compartir información sobre ninfas y su cuidado.
            Aquí encontrarás recursos, guías y apoyo para tu aviario.
          </p>
          <p style={styles.textos}>
            © {new Date().getFullYear()} Ninfario — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}


const styles = {
  textos_principal: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
  textos: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  }
};