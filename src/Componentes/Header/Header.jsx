import styles from "./Header.module.css";

const Header = () => {
  function scrollTo(id) {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className={styles.container}>
      <nav>
        <a className={styles.headerBotoes} onClick={() => scrollTo("inicio")}>
          Inicio
        </a>
        <a className={styles.headerBotoes} onClick={() => scrollTo("sobre")}>
          Sobre
        </a>
        <a className={styles.headerBotoes} onClick={() => scrollTo("cursos")}>
          Habilidades
        </a>
        <a className={styles.headerBotoes} onClick={() => scrollTo("projetos")}>
          Projetos
        </a>
        <a className={styles.contato} onClick={() => scrollTo("contato")}>
          Contato
        </a>
      </nav>
    </section>
  );
};

export default Header;
