import styled from 'styled-components'
import Btn from '../Btn'
import logo from '../../assets/logos/logo-completa-black.png'

const CustomHeader = styled.header`
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 16px 64px;
`
const HeaderUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  margin: 0 10px;
`
const HeaderLi = styled.li`
  display: flex;
  align-itens: center;
  justify-content: center;
  text-align: center;
`
const LogoImg = styled.img`
  width: 180px;
  height: 30px;
`
const CustomLink = styled.a`
  padding: 8px 24px;
  border-radius: 12px;
  text-decoration: none;
  color: ${props => props.background};
  background: transparent;
  font-size: 17px;
  &:hover{
    background: ${props => props.background};
    color: ${props => props.color};
  }
`
const HeaderNav = styled.nav`
  display: flex;
`
function Header() {
  return (
    <CustomHeader>
      <LogoImg src={logo}/>
      <HeaderNav>
        <HeaderUl>
          <HeaderLi>
            <CustomLink color='white' background='black' href="">Menu</CustomLink></HeaderLi>
          <HeaderLi>
            <CustomLink color='white' background='black' href="">Sobre Mim</CustomLink></HeaderLi>
          <HeaderLi>
            <CustomLink color='white' background='black' href="">Projetos</CustomLink></HeaderLi>
        </HeaderUl>
        <Btn color='black' background='white' change="#ccc" content={`Contato ${'\u2b67'}`}/>
      </HeaderNav>
    </CustomHeader>
  )
}

export default Header