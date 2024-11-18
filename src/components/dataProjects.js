import react from "../assets/logos/react.png";
import js from "../assets/logos/js.png";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import git from "../assets/logos/git.png";
import github from "../assets/logos/github.png";
import node from "../assets/logos/node.svg";
import java from "../assets/logos/java.png";
import postgres from "../assets/logos/postgre.png";
import springboot from "../assets/logos/springboot.svg";
import express from "../assets/logos/express.png";
import mysql from "../assets/logos/mysql.png";
import fastify from "../assets/logos/Fastify.png";
import imagemPortifolio from "../assets/projectImages/capa-portifolio.jpg";
import imagemBuscacep from "../assets/projectImages/capa-buscacep.jpg";
import imagemDslist from "../assets/projectImages/capa-dslist.png";
import imagemDengueFighters from "../assets/projectImages/denguefighters.png";
import imagemDengueFightersServer from "../assets/projectImages/denguefighters-server.png";

const dataProjects = [
  {
    image: imagemDslist,
    title: "DsList API",
    description:
      "Uma API REST desenvolvida em Java com SpringBoot e PostgresSql que serve dados de jogos classificados por tipo, plataforma e score podendo ser ordenados de forma personalizada.",
    stacks: [java, springboot, postgres, git],
    repo: "https://github.com/Juninhorx/dslist",
    deploy: "https://dslist-production-e0b3.up.railway.app/games",
  },
  {
    image: imagemDengueFighters,
    title: "Dengue Fighters",
    description:
      "Uma aplicação que serve como uma rede social, onde as usuários podem criar, editar e se inscrever em eventos de combate a dengue. Este projeto consome uma API que está neste portfólio \"Dengue Fighters API\" também criada por mim.",
    stacks: [js, react, html, css, git],
    repo: "https://github.com/Juninhorx/dengue-fighters",
    deploy: "https://dengue-fighters.vercel.app/home",
  },
  {
    image: imagemDengueFightersServer,
    title: "Dengue Fighters API",
    description:
      "API REST com as operações básicas (Criar, Ler, Atualizar, Deletar) no banco de dados relacional (MySql) que cadastra os usuários, eventos, usuários inscritos no evento e criador de cada evento.",
    stacks: [js, node, express, mysql, git],
    repo: "https://github.com/Juninhorx/dengue-fighters-server",
    deploy: "https://dengue-fighters-server-production.up.railway.app/getevent",
  },
  {
    image: imagemBuscacep,
    title: "Buscador Cep",
    description:
    "Trata-se de um buscador onde o usuário pesquisa um código CEP e retorna os dados, como estado, cidade, bairro e rua. Neste projeto trabalhei o consumo de APIs e o tratamento de dados.",
    stacks: [react, js, css, html, git],
    repo: "https://github.com/Juninhorx/busca-cep",
    deploy: "https://busca-cep-seven-orcin.vercel.app/",
  },
  {
    image: imagemPortifolio,
    title: "Este Portifólio",
    description:
      "Este projeto foi desenvolvido com o intuito de mostrar o meu trabalho, as tecnologias que uso no dia a dia e algun projetos pessoais. Com este projeto desenvolvi habilidades de front-end, design, responsividade e também consumi uma api para o envio dos e-mails de contato.",
    stacks: [react, js, css, html, git],
    repo: "https://github.com/Juninhorx/portifolio",
    deploy: "https://portifolio-liard-three.vercel.app/",
  },
];

export default dataProjects;
