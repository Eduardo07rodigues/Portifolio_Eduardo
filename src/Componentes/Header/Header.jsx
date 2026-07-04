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
        <a onClick={() => scrollTo("inicio")}>Inicio</a>
        <a onClick={() => scrollTo("sobre")}>Sobre</a>
        <a onClick={() => scrollTo("cursos")}>Habilidades</a>
        <a onClick={() => scrollTo("projetos")}>Projetos</a>
        <a className={styles.contato} onClick={() => scrollTo("contato")}>
          Contato
        </a>
      </nav>
    </section>
  );
};

export default Header;
