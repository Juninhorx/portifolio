import React from 'react'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const Project = styled.div`
  // box-shadow: 0px 1px 1px 1px #ccc;
`
  

const Container = styled.div`
  padding: 2%;
  background: #eee;
  border-radius: 2%;
  `
  
  const Image = styled.img`
  border-radius: 2%;
  width: 100%;
  // box-shadow: 0px 0px 2px 2px #ccc;
`

const Dash = styled.hr`
  margin: 18px 0;
  height: 3px;
  background: #ccc;
  border: none;
  border-radius: 25px;
`

const Title = styled.h3`
  margin: 2% 0 0 0;
  font-weight: 400;
`

const Description = styled.p`
  font-size: 14px;
`

const StacksHolder = styled.div`
  padding: 12px 0 0 0;
`

const Stack = styled.img`
  padding: 0 5px;
  max-width: 50px;
`
const ButtonHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const Button = styled.a`
  font-size: 10px;
  text-decoration: none;
  color: black;
  margin: 10px;
`

const ProjectItem = ({image, title, description, stacks, repo, deploy}) => {
  return (
    <Project>
      <Container>
        <Image src={image}/>
        <Title>{title}</Title>
        <Dash/>
        <Description>{description}</Description>
        <StacksHolder>
          {stacks.map(stack => (
            <Stack src={stack}/>
          ))}
        </StacksHolder>
        <ButtonHolder>
          <Button target='blank' href={repo}><FaGithub style={{fontSize: '30px'}}/></Button>
          <Button target='blank' href={deploy}><FaLink style={{fontSize: '30px'}}/></Button>
        </ButtonHolder>
      </Container>
    </Project>
  )
}

export default ProjectItem