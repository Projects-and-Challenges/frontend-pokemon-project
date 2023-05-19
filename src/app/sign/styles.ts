import styled from "styled-components";

export const SignContainer = styled.div`
  display: flex;
  position: relative;
`;

export const LogoImage = styled.div`
  position: absolute;

  top: 24px;
  right: 24px;
`;

export const ImageContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;

    height: 100vh;
    width: 45vh;
  }
`;

export const FormsContainer = styled.div`
  position: absolute;

  @media (min-width: 1024px) {
    position: absolute;
    right: 6%;
  }

  @media (min-width: 1440px) {
    position: absolute;
    top: 25%;
    right: 15%;
  }
`;