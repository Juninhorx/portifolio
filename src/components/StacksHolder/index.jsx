import React from 'react'
import github from '../../assets/logos/github.png'
import react from '../../assets/logos/react.png'
import js from '../../assets/logos/js.png'
import node from '../../assets/logos/node.svg'
import express from '../../assets/logos/express.png'
import mysql from '../../assets/logos/mysql.png'
import fastify from '../../assets/logos/Fastify.png'
import html from '../../assets/logos/html.png'
import css from '../../assets/logos/css.png'
import git from '../../assets/logos/git.png'


import styled from 'styled-components'

const Stack = styled.img`
  width: 60px;
  margin: 8px
`


const StacksHolder = () => {

  const styles = {
    padding: '18px 0',
  }

  return (
    <div style={styles}>
      <Stack src={github}/>
      <Stack src={git}/>
      <Stack src={node}/>
      <Stack src={express}/>
      <Stack src={mysql}/>
      <Stack src={fastify}/>
      <Stack src={js}/>
      <Stack src={react}/>
      <Stack src={html}/>
      <Stack src={css}/>
    </div>
  )
}

export default StacksHolder