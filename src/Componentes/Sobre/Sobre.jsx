import styles from "./Sobre.module.css";
import email from "../../assets/email.svg";
import zap from "../../assets/zap.svg";

const Sobre = () => {
  return (
    <div id="sobre" className={styles.containerSobre}>
      <h1 className="tituloSecao">Sobre Mim</h1>
      <div className={styles.sobreInfos}>
        <div className={styles.Front}>
          <h2 className={styles.sobre}>Front-End</h2>
          <p className={styles.textSobre}>
            Sou Eduardo, desenvolvedor Front-end e estudante de Análise e
            Desenvolvimento de Sistemas.
            <br />
            <br />
            Tenho estudado sobre desenvolvimento de software e aplicado os
            conhecimentos com exercícios e projetos, busco uma chance de me
            desafiar para me desenvolver e aumentar meus conhecimentos na área
            cada vez mais. Estou disponível para novas oportunidades, entre em
            contato!
          </p>
        </div>
        <div className={styles.estudosContainers}>
          <div className={styles.estudos}>
            <h2 className={styles.sobre}>Estudos</h2>
            <p className={styles.textSobre}>
              <strong>Faculdade:</strong> Análise e Desenvolvimento de sistemas
              - Unifecaf
            </p>
            <p className={styles.textSobre}>
              <strong>Cursos:</strong> Front-end e Ui/UX Design - origamid
            </p>
          </div>
          <div className={styles.estudos}>
            <h2 className={styles.sobre}>Contato</h2>
            <a
              className={styles.contatoInfo}
              href="https://wa.me/5511940829674"
            >
              <img src={zap} alt="" />
              (11) 9 4082-9674
            </a>

            <a className={styles.contatoInfo}>
              <img src={email} alt="" />
              egrodrigues07@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
