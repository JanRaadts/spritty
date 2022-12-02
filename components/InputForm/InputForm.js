import { useState } from "react";
import styled from "styled-components";

export default function InputForm({ onData, onResult }) {
  const [result, setResult] = useState(false);

  function handleData(event) {
    event.preventDefault();
    setResult(true);
    onResult(result);
    let InputData = {
      anzPers: event.target.elements.AnzPers.value,
      anzKm: event.target.elements.AnzKm.value,
      preis: event.target.elements.preis.value,
      verbrauch: event.target.elements.AnzVerbrauch.value,
    };
    onData(InputData);
  }

  return (
    <>
      <StyledForm onSubmit={handleData}>
        <StyledInput
          placeholder="Anzahl Personen"
          type="number"
          name="AnzPers"
          required
        ></StyledInput>
        <StyledInput
          placeholder="Anzahl Km"
          type="number"
          name="AnzKm"
          required
        ></StyledInput>
        <StyledInput
          placeholder="Preis pro Liter"
          type="number"
          name="preis"
          required
        ></StyledInput>
        <StyledInput
          placeholder="Verbrauch auf 100km"
          type="number"
          name="AnzVerbrauch"
          required
        ></StyledInput>
        <StyledButton type="submit">Calculate</StyledButton>
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

  border: 3px #11223e solid;
  font-size: 24px;
  text-align: center;
  filter: drop-shadow(0.5px 0.5px 2px rgba(0, 0, 0, 0.25));
  ::placeholder {
    color: #4b4949;
  }
`;

const StyledButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  border-radius: 35px;
  border: 3px #11223e solid;
  font-size: 24px;
  text-align: center;
  background-color: #11223e;
  color: white;
  filter: drop-shadow(0.5px 0.5px 2px black);
`;
