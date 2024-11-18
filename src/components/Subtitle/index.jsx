import styled from "styled-components";

const CustomSubtitle = styled.h2`
  font-weight: 400;
`;
const Dash = styled.hr`
  margin: 32px 0;
  height: 3px;
  background: #ccc;
  border: none;
  border-radius: 25px;
  width: 160px;
`;

const divStyle = {
  marginTop: "18px",
  textAlign: "center"
};

const Subtitle = ({ content }) => {
  return (
    <div style={divStyle}>
      <CustomSubtitle>{content}</CustomSubtitle>
      <Dash />
    </div>
  );
};

export default Subtitle;
