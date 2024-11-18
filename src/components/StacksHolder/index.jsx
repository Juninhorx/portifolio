import React from "react";
import github from "../../assets/logos/github.png";
import react from "../../assets/logos/react.png";
import js from "../../assets/logos/js.png";
import node from "../../assets/logos/node.svg";
import express from "../../assets/logos/express.png";
import mysql from "../../assets/logos/mysql.png";
import fastify from "../../assets/logos/Fastify.png";
import html from "../../assets/logos/html.png";
import css from "../../assets/logos/css.png";
import git from "../../assets/logos/git.png";
import java from "../../assets/logos/java.png";
import postgres from "../../assets/logos/postgre.png";
import springboot from "../../assets/logos/springboot.svg";

import styled from "styled-components";

const Stack = styled.img`
  width: 60px;
  margin: 8px;
  @media (max-width: 850px) {
    width: 50px;
    margin: 12px;
  }
`;

const StacksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StacksHolder = () => {
  return (
    <StacksContainer>
      <Stack src={java} />
      <Stack src={springboot} />
      <Stack src={postgres} />
      <Stack src={git} />
      <Stack src={github} />
      <Stack src={node} />
      <Stack src={express} />
      <Stack src={mysql} />
      <Stack src={fastify} />
      <Stack src={js} />
      <Stack src={react} />
      <Stack src={html} />
      <Stack src={css} />
    </StacksContainer>
  );
};

export default StacksHolder;
