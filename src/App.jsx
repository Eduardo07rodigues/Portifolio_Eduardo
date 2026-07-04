import "./App.css";
import Home from "./Componentes/Home";
import Certificados from "./Componentes/Cursos/Certificado";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="section">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/curso/:nome" element={<Certificados />} />
      </Routes>
    </section>
  );
}

export default App;
