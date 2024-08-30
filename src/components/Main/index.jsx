import React from "react";
import styled from "styled-components";
import Btn from "../Btn";
import Subtitle from "../Subtitle";
import StacksHolder from "../StacksHolder";
import ProjectsSection from "../ProjectsSection";
import Contact from "../Contact";

const CustomSection = styled.section`
  padding: 72px 64px 0 64px;
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi amet
          laborum commodi provident animi, molestiae labore minus eos dolore aut
          magnam molestias ea ratione quo recusandae ab quis similique id?
        </CustomP>
        <BtnHolder>
          <Btn
            color="white"
            background="Black"
            change="#ccc"
            content="Projetos"
          />
          <Btn
            color="black"
            background="white"
            change="#ccc"
            content={`Contato ${"\u2709"}`}
          />
        </BtnHolder>
      </CustomSection>
      <CustomSection>
        <Subtitle content="Sobre Mim" />
        <CustomP>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          doloribus recusandae neque cum provident dolorem dignissimos corrupti
          eum, voluptatem nulla officia commodi dolore repellat, error mollitia
          soluta quidem cupiditate ex?
        </CustomP>
        <StacksHolder />
      </CustomSection>
      <CustomSection>
        <Subtitle content="Projetos" />
        <ProjectsSection />
      </CustomSection>
      <CustomSection>
        <Subtitle content="Contato" />
        <Contact />
      </CustomSection>
    </main>
  );
};

export default Main;
