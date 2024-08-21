import React from 'react'
import styled from 'styled-components'
import Btn from '../Btn'
import Subtitle from '../Subtitle'
import StacksHolder from '../StacksHolder'

const CustomSection = styled.section`
  // background: red;
  padding: 72px 64px 0 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
`
const Dash = styled.hr`
  margin: 32px 0;
  height: 3px;
  background: #ccc;
  border: none;
  border-radius: 25px;
  width: 190px;
`
const CustomP = styled.p`
  max-width: 65%;
  text-align: center;
`

const BtnHolder = styled.div`
  display: flex;
  padding: 24px 0;
  gap: 32px
`

const Main = () => {
  return (
    <main>
    <CustomSection>
        <Title>Ricardo Xavier</Title>
        <Dash/>
        <CustomP style={{maxWidth: '50%'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi amet laborum commodi provident animi, molestiae labore minus eos dolore aut magnam molestias ea ratione quo recusandae ab quis similique id?</CustomP>
        <BtnHolder>
          <Btn color='white' background='Black' change="#ccc" content="Projetos"/>
          <Btn color='black' background='white' change="#ccc" content={`Contato ${'\u2b67'}`}/>
        </BtnHolder>
      </CustomSection>
    <CustomSection>
        <Subtitle content="Sobre Mim"/>
        <CustomP>Brasileiro, 20 anos, residente em Divinópolis – MG. <br/> <br/> 
          Sou um Desenvolvedor WEB com experiência em HTML, CSS e Javascript, 
          React.js,  Node.js e Express.js, APIs com rest, e teste das APIs, usando Postman. 
          Iniciando o aprendizado de React e typescript. </CustomP>
        <StacksHolder/>
      </CustomSection>
    </main>
  )
}

export default Main