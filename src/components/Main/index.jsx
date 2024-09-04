import React from "react";
import styled from "styled-components";
import Btn from "../Btn";
import Subtitle from "../Subtitle";
import StacksHolder from "../StacksHolder";
import ProjectsSection from "../ProjectsSection";
import Contact from "../Contact";

const CustomSection = styled.section`
  padding: 72px 64px 0 64px;
  margin: 32px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 850px) {
    padding: 32px 24px;
    margin: 32px 0 0 0;
  }
  @media (max-width: 650px) {
    margin: 64px 0 0 0;
  }
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  @media (max-width: 850px) {
    font-size: 32px;
  }
`;
const Dash = styled.hr`
  margin: 32px 0;
  height: 3px;
  background: #ccc;
  border: none;
  border-radius: 25px;
  width: 190px;
`;
const CustomP = styled.p`
  max-width: 65%;
  text-align: justify;
  @media (max-width: 850px) {
    max-width: 100%;
    font-size: 18px;
  }
`;

const BtnHolder = styled.div`
  display: flex;
  padding: 24px 0 0 0;
  gap: 32px;
  justify-content: center;
  width: 100%;
  text-align: center;
  @media (max-width: 850px) {
    max-width: 100%;
    padding: 32px 0;
    gap: 64px;
  }
  @media (max-width: 680px) {
    gap: 32px;
    max-width: 100%;
    flex-direction: column;
  }
`;

const Main = () => {
  return (
    <main>
      <CustomSection>
        <Title>Ricardo Xavier</Title>
        <Dash />
        <CustomP>
          Desenvolvi este portifólio para mostrar alguns dos meus projetos mais
          significativos, minhas principais habilidades e um pouco sobre minha
          trajetória profissional. A intenção é dar uma visão clara do que eu
          posso oferecer e como posso contribuir para novos desafios e
          oportunidades.
        </CustomP>
        <BtnHolder>
          <Btn
            color="white"
            background="Black"
            change="#ccc"
            content="Projetos"
            href="#projetos"
          />
          <Btn
            color="black"
            background="white"
            change="#ccc"
            content={`Contato ${"\u2709"}`}
            href="#contato"
          />
        </BtnHolder>
      </CustomSection>
      <CustomSection id="sobre">
        <Subtitle content="Sobre Mim" />
        <CustomP>
          Tenho 20 anos, sou um Desenvolvedor Web especializado em <strong>JavaScript</strong>. <br/>Estou cursando <strong>Ciências da Computação</strong> na Una Divinópolis.
          Minha jornada no desenvolvimento web começou aos 17 anos, e desde
          então, venho aprimorando minhas habilidades e adquirindo experiência
          em diversas tecnologias. <br/> Possuo conhecimentos sólidos em HTML, CSS e
          JavaScript, além de experiência prática com frameworks e bibliotecas
          como React.js e Node.js. Também tenho trabalhado com APIs utilizando
          Express.js e Fastify, e sou familiarizado com bancos de dados como
          MySQL. Além disso, tenho experiência com autenticação JWT e
          versionamento de código com Git e GitHub.<br/> Estou sempre em busca de
          novos desafios e oportunidades para expandir meus conhecimentos e
          contribuir para projetos inovadores. Sinta-se à vontade para explorar
          meu portfólio e entrar em contato!
        </CustomP>
        <StacksHolder />
      </CustomSection>
      <CustomSection id="projetos">
        <Subtitle content="Projetos" />
        <ProjectsSection />
      </CustomSection>
      <CustomSection id="contato">
        <Subtitle content="Contato" />
        <Contact />
      </CustomSection>
    </main>
  );
};

export default Main;
