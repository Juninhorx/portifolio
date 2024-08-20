import styled from 'styled-components'

const CustomHeader = styled.header`
  display: flex;
  text-align: center;
  align-itens: center;
  justify-content: space-between;
  padding: 16px 64px;
  `
  const HeaderUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  `
  
  const HeaderLi = styled.li`
  display: flex;
  align-itens: center;
  justify-content: center;
  text-align: center;
`

const LogoImg = styled.img`
  width: 150px;
  height: 30px;
`

const CustomLink = styled.a`
  padding: 8px 24px;
  border-radius: 12px;
  text-decoration: none;
  color: ${props => props.background};
  background: ${props => props.color};
  font-size: 17px;
  &:hover{
    background: ${props => props.background};
    color: ${props => props.color};
    box-shadow: ${props => props.boxshadow}
  }
`

function Header() {
  return (
    <CustomHeader>
      <LogoImg src='../public/assets/logo-completa-black.png'/>
      <HeaderUl>
        <HeaderLi><CustomLink color='white' background='black' href="">Menu</CustomLink></HeaderLi>
        <HeaderLi><CustomLink color='white' background='black' href="">Sobre Mim</CustomLink></HeaderLi>
        <HeaderLi><CustomLink color='white' background='black' href="">Projetos</CustomLink></HeaderLi>
        <HeaderLi><CustomLink color='black' boxshadow='0px 0px 0px 2px black inset' background='white' href="">Contato {'\u2b67'}</CustomLink></HeaderLi>
      </HeaderUl>
    </CustomHeader>
  )
}

export default Header