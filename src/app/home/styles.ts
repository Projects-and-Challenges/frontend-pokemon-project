import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  min-height: 100vh;
  min-width: cover;

  background: #d9eefb;

  position: relative;
`;

export const PokemonContainer = styled.div`
  display: flex;
  flex: 0;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  
  padding: 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 30rem;
  height: 35rem;
  
  padding: 32px 24px;
  margin: 1rem;
  
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background-color: #efefef;
  /* margin-right: 24px; */

  color: #666666;
  line-height: 24px;

  & .title-card {
    margin-bottom: 24px;
  }

  & .paragraph-card {
    margin-bottom: 1rem;
  }
`;

export const PokemonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  background: #efefef;
  width: 120px;
  height: 150px;
  margin: 12px;

  border: 1px solid #e0e0e0;
  border-radius: 12px;

  p {
    font-size: 12px;
    margin-bottom: 24px;

    color: #2c2c2c;
  }

  & .plus-icon {
    margin-top: 12px;
    position: absolute;

    right: 40%;
  }

  & .plus-icon:hover {
    cursor: pointer;

    border: 2px solid #efefef;
    border-radius: 50%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  width: 500px;
  height: 80%;

  font-size: 48px;

  margin-right: 8.1rem;
  margin-left: 4rem;
`;

export const LogoImage = styled.div`
  position: absolute;

  bottom: 24px;
  right: 24px;
`;

export const ImageContainer = styled.div`
  @media (min-width: 1024px) {
    position: absolute;

    top: 24px;
    right: 24px;
  }
`;
