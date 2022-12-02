import styled from "styled-components";

export default function InputForm() {
  return (
    <>
      <StyledForm>
        <StyledInput
          placeholder="Anzahl Personen"
          type="text"
          name="AnzPers"
          required
        ></StyledInput>
        <StyledInput
          placeholder="Anzahl Km"
          type="text"
          name="AnzPers"
          required
        ></StyledInput>
        <StyledInput
          placeholder="Preis pro Liter"
          type="text"
          name="AnzPers"
          required
        ></StyledInput>
        <StyledInput
          placeholder="Verbrauch auf 100km"
          type="text"
          name="AnzPers"
          required
        ></StyledInput>
        <StyledButton>Calculate</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const StyledInput = styled.input`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  border-radius: 23px;
  border: 3px #ff7b60 solid;
  font-size: 24px;
  text-align: center;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  border-radius: 35px;
  border: 3px #ff7b60 solid;
  font-size: 24px;
  text-align: center;
  background-color: #ff7b60;
  color: white;
`;
