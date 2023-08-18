import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 60vh;

  display: flex;
  flex-direction: column;
`;

export const PokemonsContainer = styled.div`
  margin-left: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between !important;
  

  width: 120px;
  height: 120px;

  & .plus-icon {

    right: 40%;
  }

  & .plus-icon:hover {
    cursor: pointer;

    border: 2px solid #efefef;
    border-radius: 50%;
  }
`;

export const PokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  
  margin-right: 36px;
`;