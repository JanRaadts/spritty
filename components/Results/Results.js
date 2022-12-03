import styled from "styled-components";

export default function Results({
  aPers,
  aKm,
  pLiter,
  verbrauch,
  name,
  teilstrecke,
  id,
}) {
  const Personen = teilstrecke > 0 ? aPers - 1 : aPers;

  const Teilstrecke = teilstrecke > 0 ? teilstrecke : 0;

  const preisProKm = (verbrauch / 100) * pLiter;

  const einer = (preisProKm * teilstrecke) / aPers;

  const PreisEiner = teilstrecke > 0 ? einer : 0;

  const alle = (preisProKm * (aKm - Teilstrecke)) / Personen + PreisEiner;

  const resultEiner = einer.toFixed(2);
  const resultAlle = alle.toFixed(2);

  return (
    <>
      <StyledResult>
        {teilstrecke > 0 ? (
          <StyledText>
            {name}: {resultEiner}€ <br /> Alle anderen: {resultAlle}€
          </StyledText>
        ) : (
          <StyledText>{resultAlle}€ pro Person</StyledText>
        )}
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
