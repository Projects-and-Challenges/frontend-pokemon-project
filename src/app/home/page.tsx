"use client";

import logo from "@/images/pokemon-gotta.svg";
import pikachu from "@/images/pikachu.svg";
import pokemonCardEmpty from "@/images/pokemon-card-empty.svg";
import plusIcon from "@/images/plus-icon.svg";

import SideBar from "@/components/_ui/Sidebar";

import * as Styled from "./styles";

import Image from "next/image";
import React from "react";

export default function Home(): JSX.Element {
  let pokemonCards = [];

  for (let i = 0; i < 6; i++) {
    pokemonCards[i] = pokemonCardEmpty;
  }

  return (
    <Styled.HomeContainer>
      <SideBar />

      <Styled.PokemonContainer>
        <Styled.TextContainer>
          <h1 className="title-card">Seu Pokemon!</h1>
          <p className="paragraph-card">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="paragraph-card">
            Lorem Ipsum has been the industrys standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className="paragraph-card">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </Styled.TextContainer>
        <Styled.CardsContainer>
          {pokemonCards.map((item, index) => {
            return (
              <Styled.PokemonCardContainer key={index}>
                <Image src={item} alt="Pokemon empty card" />
                <Image className="plus-icon" src={plusIcon} alt="Add pokemon" />
              </Styled.PokemonCardContainer>
            );
          })}
        </Styled.CardsContainer>
      </Styled.PokemonContainer>

      <Styled.LogoImage>
        <Image src={logo} alt="Pokemon Logo" />
      </Styled.LogoImage>
      <Styled.ImageContainer>
        <Image src={pikachu} alt="Pikachu" />
      </Styled.ImageContainer>
    </Styled.HomeContainer>
  );
}
