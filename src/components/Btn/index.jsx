import styled from "styled-components"

const CustomBtn = styled.a`
  padding: 8px 32px;
  cursor: pointer;
  border-radius: 12px;
  color: ${props => props.background};
  background: ${props => props.color};
  box-shadow: 0 0 0 1px black inset;
  font-size: 17px;
  &:hover{
    background: ${props => props.change};
    color: ${props => props.color};
  }
`

const Btn = ({content, background, color, change}) => {

  return (
    <CustomBtn background={background} color={color} change={change}>{content}</CustomBtn>
  )
}

export default Btn