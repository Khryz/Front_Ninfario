import { useState, useRef, useEffect } from "react";
import "./carousel.css"; 
import { motion } from "framer-motion";

function NinfaCarousel() {
  const [ninfas, setNinfas] = useState([]);
  const [botones, setBotones] = useState([]);
  const [nidada, setNidada] = useState("");
  const [totalNidadas, setTotalNidadas] = useState(0);
  const carouselRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const loadButtons = async () => {
      try {
        const response = await fetch(
          "https://backninfario-production.up.railway.app/api/v1/ninfas/get-nidada"
        );
        const data = await response.json();

        if (response.status == 200) {
          const responseNidadaNinfas = await fetch(
            "https://backninfario-production.up.railway.app/api/v1/ninfas/get-one-nidada/" +
              data.resultado[0].nidada
          );
          const dataNidadaNinfas = await responseNidadaNinfas.json();

          setBotones(data.resultado);
          setNinfas(dataNidadaNinfas.resultado);
          setNidada(data.resultado[0].nidada);
          setTotalNidadas(data.resultado.length);
        } else {
          alert("An error occurred while loading the nest information.");
        }
      } catch (error) {
        console.error("Error show data in main body: ", error);
      }
    };

    loadButtons();
  }, []);

  useEffect(() => {
    if (buttonRefs.current[0]) {
      buttonRefs.current[0].focus();
    }
  }, [botones]);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: carouselRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const consultaNidada = async (nidada) => {
    try {
      const response = await fetch(
        "https://backninfario-production.up.railway.app/api/v1/ninfas/get-one-nidada/" + nidada
      );
      const result = await response.json();

      if (response.status == 200) {
        console.log("Exito al dar clic en el boton");
        setNinfas(result.resultado);
        setNidada(nidada);
      } else {
        alert("An error occurred while loading the nest information.");
      }
    } catch (error) {
      console.error("Error al consumir el servicio:", error);
    }
  };

  const saludo = () => {
    try {
      alert("¡Hola!");
    } catch (error) {
      console.error("Error al consumir el servicio:", error);
    }
  };

  return (
    <>
      <p style={styles.p}>
        Cada año se generan varias nidadas de aves ninfa, este año contamos con{" "}
        {totalNidadas} nidadas totales.
      </p>
      <p style={styles.p}>Informacion de la nidada: {nidada}</p>
      <div style={styles.div_buttons_nidada}>
        {botones.map((btn, index) => (
          <motion.button
            key={btn.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            ref={(el) => (buttonRefs.current[index] = el)}
            style={styles.button_nidada}
            onClick={() => consultaNidada(btn.nidada)}
          >
            {btn.nidada}
          </motion.button>
        ))}
      </div>
      <div className="carousel-container">
        <button className="nav-btn left" onClick={scrollLeft}>
          ❮
        </button>

        <div className="carousel" ref={carouselRef}>
          {ninfas.map((n, index) => (
            <div className="card" style={styles.card} key={index}>
              <img
                src={n.imagen || "https://via.placeholder.com/150"}
                style={styles.image}
                className="card-img"
                alt="ninfa"
              />

              <h3 className="card-title" style={styles.textos}>
                #{n.id}
              </h3>
              <p className="nidada" style={styles.textos}>
                {n.tipo}
              </p>
              <p className="precio" style={styles.textos}>
                ${n.precio}
              </p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="btn_disponibilidad"
                disabled={n.disponibilidad !== "Disponible"}
                onClick={() => saludo()}
                style={{
                  backgroundColor:
                    n.disponibilidad == "Disponible" ? "#C7B7F2" : "gray",
                  color: "white",
                  padding: "8px 16px",
                  border: "none",
                  borderRadius: "15px",
                  cursor:
                    n.disponibilidad !== "Disponible"
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                Contactar cuidador
              </motion.button>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={scrollRight}>
          ❯
        </button>
      </div>
    </>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    padding: "20px 0",
    justifyContent: "center",
  },
  div_buttons_nidada: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    padding: "20px 0",
    justifyContent: "center",
  },
  navButton: {
    background: "#4cafef",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    fontSize: "18px",
  },

  carousel: {
    display: "flex",
    alignItems: "center",
    overflowX: "auto",
    scrollBehavior: "smooth",
    gap: "20px",
    padding: "10px",
    width: "50%",
    backgroundColor: "#D6F5C1",
  },
  card: {
    minWidth: "200px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    background: "#FFEB99",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    alignItems: "center",
  },
  image: {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
    alignItems: "center",
  },
  name: {
    margin: "10px 0 5px 0",
    fontWeight: "600",
    fontSize: "16px",
  },
  price: {
    color: "#555",
    marginBottom: "12px",
  },
  buyButton: {
    padding: "8px 12px",
    background: "#4cafef",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  button_nidada: {
    padding: "8px 16px",
    background: "#F7C9D9",
    color: "#000",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  p: {
    textAlign: "center",
    paddingTop: "10px",
  },
  textos: {
    color: "black",
    fontWeight: "bold",
  },
};

export default NinfaCarousel;
