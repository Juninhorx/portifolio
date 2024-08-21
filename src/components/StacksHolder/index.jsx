import React from 'react'
import github from '../../assets/github.png'
import react from '../../assets/react.png'
import js from '../../assets/js.png'
import node from '../../assets/node.svg'
import express from '../../assets/express.png'
import mysql from '../../assets/mysql.png'
import fastify from '../../assets/Fastify.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import git from '../../assets/git.png'


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