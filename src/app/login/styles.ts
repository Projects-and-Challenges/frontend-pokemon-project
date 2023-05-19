import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  position: relative;
`;

export const LogoImage = styled.div`
  position: absolute;

  top: 24px;
  left: 24px;
`;

export const ImageContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;

    height: 100vh;
    width: 45vh;
  }
`;
