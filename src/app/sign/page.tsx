"use client";

import logo from "src/images/pokemon-gotta.svg";
import cover from "@/images/cover.svg";

import Forms from "@/components/_ui/Forms";

import * as Styled from "./styles";

import Image from "next/image";
import React from "react";
import Footer from "@/components/Footer";

export default function Sign(): JSX.Element {
  return (
    <Styled.SignContainer>
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
            clipPath: "inset(0 52% 0 0)",
            zIndex: -1,
          }}
        />
      </Styled.ImageContainer>

      <Styled.FormsContainer>
        <Forms />
      </Styled.FormsContainer>
    </Styled.SignContainer>
  );
}
