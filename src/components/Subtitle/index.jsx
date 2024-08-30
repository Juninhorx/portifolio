import styled from "styled-components";

const CustomSubtitle = styled.h2`
  font-weight: 400;
  // margin-top: 18px;
`;
const Dash = styled.hr`
  margin: 32px 0;
  height: 3px;
  background: #ccc;
  border: none;
  border-radius: 25px;
  width: 160px;
`;

const Subtitle = ({ content }) => {
  return (
    <>
      <CustomSubtitle>{content}</CustomSubtitle>
      <Dash />
    </>
  );
};

export default Subtitle;
