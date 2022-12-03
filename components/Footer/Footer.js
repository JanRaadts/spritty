import styled from "styled-components";
import Image from "next/image";
import add from "/Users/janraadts/Development/neuefische/spritty/components/Footer/fluent_save-copy-24-regular.png";
import bib from "/Users/janraadts/Development/neuefische/spritty/components/Footer/bib.png";

export default function Footer({ onResult }) {
  function showCalc() {
    onResult(false);
  }
  function showResults() {
    onResult(true);
  }

  return (
    <StyledFooter>
      <Image src={add} alt="add_btn" width={50} onClick={showCalc} />
      <Image src={bib} alt="bib_btn" width={40} onClick={showResults} />
    </StyledFooter>
  );
}

const StyledFooter = styled.section`
  position: fixed;
  bottom: 0;
  height: 80px;
  background-color: #11223e;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 70px;
  padding-right: 70px;
`;
