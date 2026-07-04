import styles from "./Projetos.module.css";
import { projetosFront } from "./Front";
import { projetosDesign } from "./Front";
import olho from "../../assets/olho.png";
import { useState } from "react";

const Projetos = () => {
  const [categoria, setCategoria] = useState("front");

  return (
    <section id="projetos" className={styles.containerProjetos}>
      <h1 className="tituloSecao">Projetos</h1>
      <div className={styles.botaoContainer}>
        <button
          className={styles.botaoProjetos}
          onClick={() => setCategoria("front")}
          disabled={categoria === "front"}
        >
          Front-End
        </button>
        <button
          className={styles.botaoProjetos}
          onClick={() => setCategoria("design")}
          disabled={categoria === "design"}
        >
          Design
        </button>
      </div>
      {categoria === "front" &&
        projetosFront.map((projeto) => (
          <div key={projeto.id} className={styles.Projeto}>
            <a href={projeto.url} className={styles.imagemContainer}>
              <img className={styles.imgProjeto} src={projeto.foto} alt="" />
              <img className={styles.iconeHover} src={olho} alt="" />
            </a>

            <div className={styles.Infos}>
              <h1 className={styles.nome}>{projeto.nome}</h1>
              <h2 className={styles.sobre}>Sobre:</h2>
              <p className={styles.texto}>{projeto.sobre}</p>

              <span className={styles.indicacao}>
                Clique no projeto para vê-lo
              </span>
            </div>
          </div>
        ))}
      {categoria === "design" &&
        projetosDesign.map((projeto) => (
          <div key={projeto.id} className={styles.Projeto}>
            <a href={projeto.url} className={styles.imagemContainer}>
              <img className={styles.imgProjeto} src={projeto.foto} alt="" />
              <img className={styles.iconeHover} src={olho} alt="" />
            </a>

            <div className={styles.Infos}>
              <h1 className={styles.nome}>{projeto.nome}</h1>
              <h2 className={styles.sobre}>Sobre:</h2>
              <p className={styles.texto}>{projeto.sobre}</p>

              <span className={styles.indicacao}>
                Clique no projeto para vê-lo
              </span>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Projetos;
