import styled from "styled-components";

const CustomBtn = styled.a`
  padding: 8px 32px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 12px;
  color: ${(props) => props.background};
  background: ${(props) => props.color};
  box-shadow: 0 0 0 1px black inset;
  font-size: 17px;
  &:hover {
    background: ${(props) => props.change};
    color: ${(props) => props.color};
  }
  @media (max-width: 850px) {
    padding: 16px 72px;
    font-size: 24px;
  }
`;

const Btn = ({ content, background, color, change, href }) => {
  return (
    <CustomBtn href={href} background={background} color={color} change={change}>
      {content}
    </CustomBtn>
  );
};

export default Btn;
