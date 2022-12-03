import styled from "styled-components";
import Image from "next/image";
import logo from "/components/Header/logo_spritty.png";

export default function Header() {
  return (
    <StyledHeader>
      <Image alt="Logo" src={logo} width={300} />
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
`;
