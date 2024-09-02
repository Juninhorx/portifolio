import React from "react";
import styled from "styled-components";

const CustomForm = styled.form`
  padding: 32px 0 32px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3%;
  width: 80%;
  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 850px) {
  }
`;

const CustomTextarea = styled.textarea`
  height: 100%;
  border-radius: 10px;
  border: 1px solid grey;
  margin: 8px;
  padding: 10px;
  font-family: "Magistral";
  font-weight: 600;
  @media (max-width: 850px) {
    width: 100%;
    font-size: 18px;
  }
`;

const CustomInput = styled.input`
  height: 36px;
  border-radius: 10px;
  border: 1px solid grey;
  margin: 8px;
  height: 50px;
  padding: 10px;
  font-weight: 600;
  font-family: "Magistral";
  @media (max-width: 850px) {
    height: 60px;
    width: 100%;
    font-size: 18px;
  }
`;

const CustomBtn = styled.button`
  padding: 8px;
  // margin-left: 5px;
  cursor: pointer;
  border-radius: 12px;
  color: white;
  height: 60px;
  background: black;
  box-shadow: 0 0 0 1px black inset;
  font-size: 17px;
  text-align: center;
  width: 30%;
  &:hover {
    background: white;
    color: black;
  }
  @media (max-width: 850px) {
    width: 80%;
    font-size: 24px;
  }
  @media (max-width: 660px){
    width: 100%;
  }
`;

const FormStatus = styled.h3`
  border-radius: 10px;
`;

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [bg, setBg] = React.useState("transparent");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando....");
    setBg("yellow");
    const formData = new FormData(event.target);

    formData.append("access_key", "d9151ef3-b89d-4602-9d11-5b200c08d0a7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Mensagem enviada com sucesso!");
      setBg("green");
      event.target.reset();
    } else {
      console.log("Erro ao enviar", data);
      setResult(data.message);
      setBg("red");
    }
  };

  const divStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={divStyle}>
      <CustomForm onSubmit={onSubmit}>
        <FormDiv>
          <label htmlFor="nome">Nome</label>
          <CustomInput
            placeholder="John Snow"
            type="text"
            name="nome"
            id="nome"
            required
          />
          <label htmlFor="email">Email</label>
          <CustomInput
            placeholder="johnsnow@gmail.com"
            type="email"
            name="email"
            required
          />
        </FormDiv>
        <FormDiv>
          <label htmlFor="mensagem">Mensagem</label>
          <CustomTextarea
            placeholder="Deixe a sua mensagem aqui..."
            style={{ height: "100%" }}
            name="mensagem"
            id="mensagem"
            required
          ></CustomTextarea>
        </FormDiv>
        <FormStatus style={{ color: bg }}>{result}</FormStatus>
        <CustomBtn type="submit">Enviar {"\u27A4"}</CustomBtn>
      </CustomForm>
    </div>
  );
};

export default Contact;
