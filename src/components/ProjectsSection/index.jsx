import React from "react";
import styled from "styled-components";
import ProjectItem from "../ProjectItem";
import dataProjects from "../dataProjects";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6%;
  margin-bottom: 10%;
  padding: 0 10%;
  @media (max-width: 850px) {
    margin-bottom: 50%;
    gap: 4%;
    padding: 0 0;
  }
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    gap: 3%;
  }
`;
const ProjectsSection = () => {
  return (
    <Container>
      {dataProjects.map((project) => (
        <ProjectItem
          image={project.image}
          title={project.title}
          description={project.description}
          stacks={project.stacks}
          repo={project.repo}
          deploy={project.deploy}
        />
      ))}
      {/* <ProjectItem image={} title={} description={} stacks={} repo={} deploy={}/> */}
    </Container>
  );
};

export default ProjectsSection;
