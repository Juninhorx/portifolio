import react from "../assets/logos/react.png";
import js from "../assets/logos/js.png";
import html from "../assets/logos/html.png";
import css from "../assets/logos/css.png";
import git from "../assets/logos/git.png";
import github from "../assets/logos/github.png";
import node from "../assets/logos/node.svg";
import express from "../assets/logos/express.png";
import mysql from "../assets/logos/mysql.png";
import fastify from "../assets/logos/Fastify.png";
import imagemPortifolio from "../assets/projectImages/capa-portifolio.jpg";
import imagemBuscacep from "../assets/projectImages/capa-buscacep.jpg";

const dataProjects = [
  {
    image: imagemPortifolio,
    title: "Este Portifólio",
    description:
      "Este projeto foi desenvolvido com o intuito de mostrar o meu trabalho, as tecnologias que uso no dia a dia e algun projetos pessoais. Com este projeto desenvolvi habilidades de front-end, design, responsividade e também consumi uma api para o envio dos e-mails de contato.",
    stacks: [react, js, css, html],
    repo: "https://github.com/Juninhorx/portifolio",
    deploy: "https://portifolio-liard-three.vercel.app/",
  },
  {
    image: imagemBuscacep,
    title: "Buscador Cep",
    description:
      "Trata-se de um buscador onde o usuário pesquisa um código CEP e retorna os dados, como estado, cidade, bairro e rua. Neste projeto trabalhei o consumo de APIs e o tratamento de dados.",
    stacks: [react, js, css, html, github],
    repo: "https://github.com/Juninhorx/busca-cep",
    deploy: "https://busca-cep-seven-orcin.vercel.app/",
  },
];

export default dataProjects;
