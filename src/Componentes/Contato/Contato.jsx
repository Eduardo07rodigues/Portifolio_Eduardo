import styles from "./Contato.module.css";
import email from "../../assets/email.svg";
import zap from "../../assets/zap.svg";
import linkedin from "../../assets/habilidades/lLinkedin.svg";
import maps from "../../assets/maps.svg";
import githubIcon from "../../assets/githubIcon.svg";

const Contato = () => {
  return (
    <section id="contato" className={styles.containerContato}>
      <h1 className="tituloSecao">Contato</h1>
      <div className={styles.contato}>
        <a className={styles.contatoInfo}>
          <img src={maps} alt="" />
          Osasco/Sp
        </a>

        <a className={styles.contatoInfo} href="https://wa.me/5511940829674">
          <img src={zap} alt="" />
          (11) 9 4082-9674
        </a>

        <a className={styles.contatoInfo}>
          <img src={email} alt="" />
          egrodrigues07@gmail.com
        </a>

        <a
          className={styles.contatoInfo}
          href="https://www.linkedin.com/in/eduardogrodrigues"
        >
          <img src={linkedin} alt="" />
          linkedin.com/in/eduardogrodrigues
        </a>

        <a
          className={styles.contatoInfo}
          href="https://github.com/Eduardo07rodigues"
        >
          <img src={githubIcon} alt="" />
          github.com/Eduardo07rodigues
        </a>
      </div>
    </section>
  );
};

export default Contato;
