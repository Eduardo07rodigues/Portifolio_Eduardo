import styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <div id="sobre" className={styles.containerSobre}>
      <h1 className="tituloSecao">Sobre Mim</h1>
      <div className={styles.Front}>
        <h2 className={styles.sobre}>Front-End</h2>
        <p className={styles.textSobre}>
          Sou Eduardo, desenvolvedor Front-end e estudante de Análise e
          Desenvolvimento de Sistemas. Meu interesse por programação começou
          ainda na infância, quando criava pequenos jogos como hobby.
        </p>
      </div>
      <div className={styles.estudos}>
        <h2 className={styles.sobre}>Estudos</h2>
        <p className={styles.textSobre}>
          Atualmente continuo aprimorando minhas habilidades por meio da
          graduação, do curso de Front-end e Design da Origamid e de estudos
          constantes sobre desenvolvimento web. Tenho interesse em criar
          interfaces modernas, funcionais e acessíveis, buscando evoluir
          continuamente como desenvolvedor.{" "}
        </p>
      </div>
    </div>
  );
};

export default Sobre;
