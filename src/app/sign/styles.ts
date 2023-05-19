import styled from "styled-components";

export const SignContainer = styled.div`
  display: flex;

  position: relative;

  background-image: url("src/images/cover.svg");

  /* background: rgb(251, 223, 223);
  background: linear-gradient(
    90deg,
    rgba(251, 223, 223, 1) 0%,
    rgba(255, 254, 254, 1) 50%,
    rgba(232, 232, 255, 1) 100%
  ); */
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

    /* height: 100vh;
    width: 100vh;
    background-color: #d9eefb; */
  }
`;

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50vh;

  background-color: #d9eefb;
`;

export const PokedexImage = styled.div`
  margin-left: 10%;
`;

export const CharacterImage = styled.div`
  grid-area: ash;
`;

export const PokemonImage = styled.div`
  grid-area: bulbasaur;
`;
