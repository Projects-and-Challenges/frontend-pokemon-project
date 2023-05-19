"use client";

import logo from "src/images/pokemon-gotta.svg";
import pokedex from "src/images/pokedex.svg";
import ash from "src/images/ash.svg";
import bulbasaur from "src/images/bulbasaur.svg";
import cover from "@/images/cover.svg";

import * as Styled from "./styles";

import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";

export default function Login(): JSX.Element {
  return (
    <Styled.LoginContainer>
      <Styled.LogoImage>
        <Image src={logo} alt="Pokemon Logo" />
      </Styled.LogoImage>

      <Styled.ImageContainer>
        <Image
          src={cover}
          alt="Pokemon Logo"
          fill={true}
          style={{
            minWidth: "100%",
            clipPath: "inset(0 0 0 52%)",
            zIndex: -1,
          }}
        />
      </Styled.ImageContainer>
    </Styled.LoginContainer>
  );
}
