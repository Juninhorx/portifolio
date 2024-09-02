import styled from "styled-components";
import "./index.css";
import logo from "../../assets/logos/logo-completa-black.png";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const CustomHeader = styled.header`
display: flex;
text-align: center;
justify-content: space-between;
padding: 16px 64px;
transition: all 1s ease-in;
@media (max-width: 850px) {
  padding: 16px 32px;
  }
  `;
  const HeaderUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  margin: 0 10px;
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 100px;
    }
    `;
    const HeaderLi = styled.li`
    display: flex;
    align-itens: center;
    justify-content: center;
    text-align: center;
    `;
    const LogoImg = styled.img`
    width: 180px;
    height: 30px;
    @media (max-width: 660px) {
      width: 140px;
      height: 25px;
      }
      `;
      const CustomLink = styled.a`
      padding: 8px 24px;
      border-radius: 12px;
      text-decoration: none;
      color: ${(props) => props.background};
      background: transparent;
      font-size: 18px;
      &:hover {
    background: ${(props) => props.background};
    color: ${(props) => props.color};
  }
  @media (max-width: 850px) {
    font-size: 24px;
  }
`;

const BtnMenu = styled.button`
  border: none;
  background: transparent;
  font-size: 28px;
  cursor: pointer;
  position: absolute;
  text-decoration: none;
  color: black;
  right: 10%;
  @media (min-width: 850px) {
    display: none;
  }
`;
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CustomHeader className={isOpen ? "menuMobile" : ""}>
      <LogoImg src={logo} />
      <nav className={isOpen ? "menuMobile" : "hide"}>
        <HeaderUl>
          <HeaderLi>
            <CustomLink color="white" background="black" href="">
              Menu
            </CustomLink>
          </HeaderLi>
          <HeaderLi>
            <CustomLink color="white" background="black" href="">
              Sobre Mim
            </CustomLink>
          </HeaderLi>
          <HeaderLi>
            <CustomLink color="white" background="black" href="">
              Projetos
            </CustomLink>
          </HeaderLi>
          <HeaderLi>
            <CustomLink
              color="black"
              background="grey"
              href=""
            >{`Contato ${"\u2709"}`}</CustomLink>
          </HeaderLi>
        </HeaderUl>
      </nav>
      <BtnMenu onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <AiOutlineClose /> : <FiMenu />}
      </BtnMenu>
    </CustomHeader>
  );
}

export default Header;
