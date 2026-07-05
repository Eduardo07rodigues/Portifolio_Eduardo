import html from "../assets/habilidades/html.svg";
import css from "../assets/habilidades/css.svg";
import javascript from "../assets/habilidades/js.svg";
import react from "../assets/habilidades/react.svg";
import ui from "../assets/habilidades/Ui.svg";
import figma from "../assets/habilidades/figma.svg";
import git from "../assets/habilidades/git.svg";
import github from "../assets/habilidades/github.svg";
import unifecaf from "../assets/habilidades/unifecaf.svg";

import certificadoHTML from "../assets/certificados/html.svg";
import certificadoCSS from "../assets/certificados/css.svg";
import certificadoJS from "../assets/certificados/js.svg";
import certificadoReact from "../assets/certificados/react.svg";
import certificadoUI from "../assets/certificados/ui.svg";
import certificadoFigma from "../assets/certificados/figma.svg";
import certificadoGit from "../assets/certificados/git.svg";
import certificadoGithub from "../assets/certificados/github.svg";
import certificadoUnifecaf from "../assets/certificados/unifecaf.svg";

const cursos = [
  {
    id: 1,
    rota: "html",

    cor: "#c55818",

    nome: "HTML",

    icone: html,

    certificado: certificadoHTML,

    descricao:
      "Neste curso aprendi os fundamentos do HTML. Desenvolvi conhecimentos sobre a criação de documentos semânticos, organização do conteúdo, uso correto de tags, formulários, tabelas, listas, links, imagens, vídeos,  entre outros. Também aprendi a estruturar projetos seguindo boas práticas, criando páginas bem organizadas, fáceis de manter e preparadas para receber CSS e JavaScript.",

    link: "https://www.origamid.com/certificate/c6467080",
  },

  {
    id: 2,
    rota: "css",

    cor: "#10A1E9",

    nome: "CSS",

    icone: css,

    certificado: certificadoCSS,

    descricao:
      "Neste curso aprendi os fundamentos do CSS. Desenvolvi conhecimentos sobre estilização de páginas, criação de layouts responsivos com Flexbox e Grid, animações, transições, posicionamento de elementos e organização dos estilos. Também aprendi a construir interfaces modernas, reutilizar classes e aplicar boas práticas para manter o código limpo e de fácil manutenção.",

    link: "https://www.origamid.com/certificate/c6467080",
  },

  {
    id: 3,
    rota: "javascript",

    cor: "#e4c82c",

    nome: "JavaScript",

    icone: javascript,

    certificado: certificadoJS,

    descricao:
      "Neste curso aprendi os fundamentos do JavaScript. Desenvolvi conhecimentos sobre lógica de programação, manipulação do DOM, eventos, funções, objetos, arrays, programação assíncrona e consumo de APIs. Também aprendi a criar aplicações dinâmicas e interativas, organizando o código de forma modular e seguindo boas práticas de desenvolvimento.",

    link: "https://www.origamid.com/certificate/bdf4bc57",
  },

  {
    id: 4,
    rota: "react",

    cor: "#10bee9",

    nome: "React",

    icone: react,

    certificado: certificadoReact,

    descricao:
      "Neste curso aprendi os fundamentos do React. Desenvolvi conhecimentos sobre componentes reutilizáveis, JSX, gerenciamento de estado com Hooks, renderização condicional, React Router e consumo de APIs. Também aprendi a organizar aplicações de forma escalável, tornando o desenvolvimento mais produtivo e o código mais reutilizável.",

    link: "https://www.origamid.com/certificate/450c011c",
  },

  {
    id: 5,
    rota: "ui-design",

    cor: "#4b147e",

    nome: "UI Design",

    icone: ui,

    certificado: certificadoUI,

    descricao:
      "Neste curso aprendi os fundamentos do UI Design. Desenvolvi conhecimentos sobre criação de interfaces digitais, tipografia, teoria das cores, espaçamento, hierarquia visual e composição de layouts. Também aprendi a projetar telas mais intuitivas, consistentes e agradáveis, sempre buscando melhorar a experiência visual do usuário.",

    link: "https://www.origamid.com/certificate/f86d2c21",
  },

  {
    id: 6,
    rota: "figma",

    cor: "#a174db",

    nome: "Figma",

    icone: figma,

    certificado: certificadoFigma,

    descricao:
      "Neste curso aprendi a utilizar o Figma para criação de interfaces e prototipagem. Desenvolvi conhecimentos sobre construção de layouts, componentes reutilizáveis, Auto Layout, organização de projetos e protótipos interativos. Também aprendi a transformar ideias em interfaces bem estruturadas antes do desenvolvimento da aplicação.",

    link: "https://www.origamid.com/certificate/f86d2c21",
  },

  {
    id: 7,
    rota: "git",

    cor: "#9c3a2d",

    nome: "Git",

    icone: git,

    certificado: certificadoGit,

    descricao:
      "Neste curso aprendi os fundamentos do Git. Desenvolvi conhecimentos sobre controle de versão, criação de repositórios, commits, branches, merges e resolução de conflitos. Também aprendi a organizar o histórico de desenvolvimento, acompanhar alterações no código e trabalhar de forma mais segura durante a criação de projetos.",

    link: "https://www.origamid.com/certificate/bdf4bc57",
  },

  {
    id: 8,
    rota: "github",

    cor: "#acacac",

    nome: "Github",

    icone: github,

    certificado: certificadoGithub,

    descricao:
      "Neste curso aprendi a utilizar o GitHub como plataforma para hospedagem e gerenciamento de projetos. Desenvolvi conhecimentos sobre criação de repositórios remotos, envio de alterações, colaboração entre desenvolvedores e documentação utilizando README. Também aprendi a publicar projetos e manter um portfólio organizado para compartilhar meu trabalho.",

    link: "https://www.origamid.com/certificate/bdf4bc57",
  },

  {
    id: 9,
    rota: "faculdade",

    cor: "#439b80",

    nome: "Faculdade",

    icone: unifecaf,

    certificado: certificadoUnifecaf,

    descricao:
      "Durante a graduação em Análise e Desenvolvimento de Sistemas na Unifecaf desenvolvo conhecimentos sobre programação, banco de dados, engenharia de software, desenvolvimento web e lógica computacional. Além da parte técnica, também estudo metodologias de desenvolvimento, arquitetura de sistemas e boas práticas utilizadas no mercado de tecnologia.",

    link: "https://drive.google.com/file/d/1KYErrAlBJ220KrOcPkCf39Lp1pqPnnM6/view?usp=sharing",
  },
];

export default cursos;
