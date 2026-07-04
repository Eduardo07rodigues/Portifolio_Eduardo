import styles from "./Certificado.module.css";
import { useParams } from "react-router-dom";
import cursos from "../../data/cursos";
import { NavLink } from "react-router-dom";

const Certificado = () => {
  const { nome } = useParams();

  const curso = cursos.find((curso) => curso.rota === nome);

  if (!curso) {
    return <h1>Curso não encontrado.</h1>;
  }
  return (
    <section className={styles.container}>
      <div className={styles.cursoContainer}>
        <img className={styles.icone} src={curso.icone} alt="" />
        <h1 className={styles.nome}>{curso.nome}</h1>
      </div>
      <div style={{ color: curso.cor }} className={styles.sobreContainer}>
        <p className={styles.sobreCurso}>{curso.descricao}</p>
      </div>
      <div className={styles.certificadoContainer}>
        <a href={curso.link}>
          <img
            style={{ color: curso.cor }}
            className={styles.certificado}
            src={curso.certificado}
            alt="clique aqui para certificado"
          />
        </a>
        <h1 className={styles.certificadoTexto}>Certificado:</h1>
      </div>
      <NavLink to="/" className={styles.botaoInicio}>
        inicio
      </NavLink>
    </section>
  );
};

export default Certificado;
