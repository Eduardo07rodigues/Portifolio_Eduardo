import styles from "./Inicio.module.css";
import perfil from "../../assets/Perfil2.svg";

const Inicio = () => {
  return (
    <section id="inicio" className={styles.container}>
      <div>
        <img className={styles.foto} src={perfil} alt="" />
      </div>
      <div className={styles.titulos}>
        <h3 className={styles.nome}>Eduardo Rodrigues</h3>
        <h1 className={styles.Dev}>Dev Front-End</h1>
        <h2 className={styles.subDev}>React & Ui Design</h2>
      </div>
    </section>
  );
};

export default Inicio;
