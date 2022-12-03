import styled from "styled-components";

export default function Results({ aPers, aKm, pLiter, verbrauch, id }) {
  const result = ((verbrauch / 100) * aKm * pLiter) / aPers;
  return (
    <>
      <StyledResult>
        <StyledText>{result}€ pro Person</StyledText>
      </StyledResult>
    </>
  );
}

const StyledResult = styled.section`
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  filter: drop-shadow(2px 2px 5px black);
`;

const StyledText = styled.p`
  font-size: 24px;
  text-align: center;
`;
