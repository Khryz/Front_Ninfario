import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function RegisterModal({ onClose }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 20000); // 300000 - 5 minutos - 300 (now with 10 seconds)

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const dataRequest = {
      name: name,
      email: email,
      message: message,
    }
    try {
      const response = await fetch("https://backninfario-production.up.railway.app/api/v1/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataRequest),
      });
  
      if (response.status == 201) {
      
        console.log("response:", response);
        alert("¡Successful registration!");
        onClose();
      } else { 
        console.log("Registration error.");
        alert("Registration error.");
      }
      
  
    } catch (error) {
      console.error("Registration error.", error);
      alert("Registration error.");
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Registro</h2>
        <p>¡Al registrarte se te notificará la disponibilida de ejemplares!</p>

        <form style={styles.form} onSubmit={handleRegister}>
          <input type="text" placeholder="Nombre" style={styles.input} value={name} required onChange={(e)=> setName(e.target.value)}/>
          <input type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" placeholder="Correo" style={styles.input} value={email} onChange={(e)=> setEmail(e.target.value)}  required/>
          <input type="text" placeholder="Mensaje" style={styles.input} value={message} required onChange={(e) => setMessage(e.target.value)} />
          
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={styles.submit} type="submit">
            Registrarse
          </motion.button>
        </form>

        <button onClick={onClose} style={styles.closeBtn}>X</button>
        
      </div>
    </div>
  );

}



const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0,
    width: "100%", height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: 9999,
  },
  modal: {
    width: "350px",
    padding: "25px",
    background: "#AEE8F4",
    borderRadius: "10px",
    position: "relative"
  },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #aaa",
  },
  submit: {
    padding: "10px",
    background: "#4cafef",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  closeBtn: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default RegisterModal;