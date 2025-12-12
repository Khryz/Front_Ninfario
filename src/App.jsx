import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import RegisterModal from "./components/RegisterModal";
import Footer from "./components/Footer";
import NinfaCarousel from "./components/NinfaCarousel";
import Columnas from "./components/Columnas";
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true);
  const [openRegister, setOpenRegister] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return loading ? (<Loader />) : (
    <div style={{ paddingTop: "130px", backgroundColor: "#D6F5C1"}}>
      <Navbar onOpenRegister={() => setOpenRegister(true)} />
      <Columnas onOpenRegister={() => setOpenRegister(true)} />
      <div style={{ alignItems: "center" }}>
        <NinfaCarousel onOpenRegister={() => setOpenRegister(true)} />
      </div>
      {openRegister && <RegisterModal onClose={() => setOpenRegister(false)} />}
      <Footer />
    </div>
  );
}

export default App;
