import styles from "./Cursos.module.css";
import cursos from "../../data/cursos";
import { Link } from "react-router-dom";

const Cursos = () => {
  return (
    <section className={styles.sectionCurso}>
      <h1 id="cursos" className="tituloSecao">
        Habilidades / Cursos
      </h1>
      <div className={styles.containerCurso}>
        {cursos.map((curso) => (
          <Link
            className={styles.habilidade}
            key={curso.id}
            to={`/curso/${curso.rota}`}
          >
            <img
              className={styles.habilidadeIcone}
              src={curso.icone}
              alt={curso.nome}
            />
            {curso.nome}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Cursos;
