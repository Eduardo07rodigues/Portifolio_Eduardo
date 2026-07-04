import Contato from "../Componentes/Contato/Contato";
import Cursos from "../Componentes/Cursos/Cursos";
import Header from "../Componentes/Header/Header";
import Inicio from "../Componentes/Inicio/Inicio";
import Projetos from "../Componentes/Projetos/Projetos";
import Sobre from "../Componentes/Sobre/Sobre";

const Home = () => {
  return (
    <section className="section">
      <Header />
      <Inicio />
      <Sobre />
      <Cursos />
      <Projetos />
      <Contato />
    </section>
  );
};

export default Home;
