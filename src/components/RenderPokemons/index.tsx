import React from 'react';
import Image from "next/image";
import { Pokemon } from '@/types';

import pokemonCardEmpty from "@/images/pokemon-card-empty.svg";
import plusIcon from "@/images/plus-icon.svg";

import * as Styled from './styles';

type Props = {
  pokemons: Pokemon[];
}

const RenderPokemons = ({ pokemons }: Props): JSX.Element => {
  return (
    <Styled.Container>
      <Styled.PokemonsContainer>
        <div>
          {pokemons.slice(0, 3).map(pokemon => (
            <Styled.PokemonCard key={pokemon.id}>
              <Image src={pokemon.sprites.front_default} alt={pokemonCardEmpty} width={80} height={80} />
              <Image className="plus-icon" src={plusIcon} alt="Add pokemon" />
            </Styled.PokemonCard>
          ))}
        </div>
        <div>
          {pokemons.slice(3).map(pokemon => (
            <Styled.PokemonCard key={pokemon.id}>
              <Image src={pokemon.sprites.front_default} alt={pokemonCardEmpty} width={80} height={80} />
              <Image className="plus-icon" src={plusIcon} alt="Add pokemon" />
            </Styled.PokemonCard>
          ))}
        </div>
      </Styled.PokemonsContainer>
      {/* <Styled.PokemonCardContainer key={item.id}>
        <Image src={item.sprites.front_default} alt="Pokemon empty card" width={48} height={48} />
        <Image className="plus-icon" src={plusIcon} alt="Add pokemon" />
      </Styled.PokemonCardContainer> */}
    </Styled.Container>
  );
}

export default RenderPokemons;