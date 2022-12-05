import { useState } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";
import Image from "next/image";
import zurück from "/components/InputForm/delete.png";
import more from "/components/InputForm/moreBtn.png";

export default function InputForm({ onData, onResult }) {
  const [moreBtn, setMoreBtn] = useState(false);
  const [dataInput, setDataInput] = useState();

  function handleMehrBtn() {
    setMoreBtn(true);
  }

  function handleData(event) {
    event.preventDefault();

    onResult(true);
    let InputData = {
      id: nanoid(),
      anzPers: Number(event.target.elements.AnzPers.value),
      anzKm: Number(event.target.elements.AnzKm.value),
      preis: Number(event.target.elements.preis.value),
      verbrauch: Number(event.target.elements.AnzVerbrauch.value),
    };

    onData(InputData);
  }

  function handleDataTeilstrecke(event) {
    event.preventDefault();

    onResult(true);
    let InputData = {
      id: nanoid(),
      anzPers: Number(event.target.elements.AnzPers.value),
      anzKm: Number(event.target.elements.AnzKm.value),
      preis: Number(event.target.elements.preis.value),
      verbrauch: Number(event.target.elements.AnzVerbrauch.value),
      name: event.target.elements.NamePers.value,
      teilstrecke: Number(event.target.elements.KmTeilstrecke.value),
    };

    onData(InputData);
  }

  function closeTeilStrecke() {
    setMoreBtn(false);
  }

  return (
    <>
      {moreBtn ? (
        <StyledForm onSubmit={handleDataTeilstrecke}>
          <StyledInput
            placeholder="Anzahl Personen"
            type="number"
            name="AnzPers"
            required
          ></StyledInput>
          <StyledImage>
            <Image
              onClick={handleMehrBtn}
              src={more}
              alt="mehrBtn"
              width={40}
              height={40}
            />
          </StyledImage>

          <StyledTeilstreckeSec>
            <div>
              <StyledTitle>Teilstrecke hinzufügen</StyledTitle>
            </div>
            <StyledDiv>
              <StyledInputContainer>
                <StyledInputTeilStr
                  placeholder="Name"
                  type="text"
                  name="NamePers"
                  required
                ></StyledInputTeilStr>
              </StyledInputContainer>
              <StyledInputContainer>
                <StyledInputTeilStr
                  placeholder="Km"
                  type="number"
                  name="KmTeilstrecke"
                  required
                ></StyledInputTeilStr>
              </StyledInputContainer>
            </StyledDiv>
          </StyledTeilstreckeSec>
          <StyledBackBtn>
            <Image
              onClick={closeTeilStrecke}
              src={zurück}
              alt="zurückBtn"
              width={30}
              height={30}
            />
          </StyledBackBtn>
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
            step="0.1000"
            required
          ></StyledInput>
          <StyledInput
            placeholder="Verbrauch auf 100km"
            type="number"
            name="AnzVerbrauch"
            step="0.1000"
            required
          ></StyledInput>
          <StyledButton type="submit">Calculate</StyledButton>
        </StyledForm>
      ) : (
        <StyledForm onSubmit={handleData}>
          <StyledInput
            placeholder="Anzahl Personen"
            type="number"
            name="AnzPers"
            required
          ></StyledInput>
          <StyledImage>
            <Image
              onClick={handleMehrBtn}
              src={more}
              alt="mehrBtn"
              width={40}
              height={40}
            />
          </StyledImage>
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
            step="0.01"
            required
          ></StyledInput>
          <StyledInput
            placeholder="Verbrauch auf 100km"
            type="number"
            name="AnzVerbrauch"
            step="0.1000"
            required
          ></StyledInput>
          <StyledButton type="submit">Calculate</StyledButton>
        </StyledForm>
      )}
    </>
  );
}

const StyledBtnSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledImage = styled.div`
  position: absolute;
  right: 40px;
  top: 165px;
`;

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

const StyledInputTeilStr = styled.input`
  /* margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px; */
  margin: 5px;
  padding: 20px;
  border-radius: 23px;
  width: 100%;

  border: 3px #11223e solid;
  font-size: 24px;
  text-align: center;
  filter: drop-shadow(0.5px 0.5px 2px rgba(0, 0, 0, 0.25));
  ::placeholder {
    color: #4b4949;
  }
`;

const StyledTeilstreckeSec = styled.section`
  background-color: #11223e;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px;
  border-radius: 23px;
  filter: drop-shadow(0.5px 0.5px 2px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.p`
  color: white;
  font-size: 24px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
`;

const StyledBackBtn = styled.div`
  position: absolute;
  right: 30px;
  top: 250px;
`;

const StyledInputContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
