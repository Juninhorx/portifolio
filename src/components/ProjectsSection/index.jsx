import React from "react";
import styled from "styled-components";
import ProjectItem from "../ProjectItem";
import dataProjects from "../dataProjects";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8%;
  padding: 0 10%;
  @media (max-width: 850px) {
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
