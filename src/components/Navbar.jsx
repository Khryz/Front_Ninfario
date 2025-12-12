<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap" rel="stylesheet"></link>
import { motion } from "framer-motion";

function Navbar({ onOpenRegister }) {
    return (
      <nav style={styles.nav}>
        <div style={styles.left}>
          <img src="https://res.cloudinary.com/dfmn1wvfh/image/upload/v1765512939/LOGO_130x130_p3j4gs.png"
            alt="Logo"
            style={styles.logo}
            onClick={()=> window.location.reload()}
          />
          <h2 style={styles.title} onClick={()=> window.location.reload()}>Ninfario</h2>
        </div>
  
        
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={styles.button} type="submit" onClick={onOpenRegister}>
        Registro
        </motion.button>
      </nav>
    );
  }
  
  const styles = {
    nav: {
      width: "100%",
      height:"100px",
      padding: "0 20px",
      background: "#D6F5C1",
      color: "black",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 9999
    },
    left: { display: "flex", alignItems: "center", gap: "10px" },
    logo: { width: "100px", height: "100px", borderRadius: "50%", cursor: "pointer" },
    title: {
      cursor: "pointer",
      margin: 0,
      fontFamily: "'Cinzel', serif",
      fontSize: "200%",
      letterSpacing: "0.35em",
      fontWeight: 1000
    },
    button: {
      padding: "1% 2%",
      background: "#4cafef",
      color: "#000",
      border: "none",
      borderRadius: "60px",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "80%",
    },
  };
  
  export default Navbar;