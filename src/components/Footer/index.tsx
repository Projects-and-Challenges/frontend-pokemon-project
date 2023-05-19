"use client";

import * as Styled from "./styles";
import Image from "next/image";
import footer from "@/images/footer.svg";

import React from "react";

function Footer(): JSX.Element {
  return (
    <Styled.FooterContainer>
      <Image src={footer} alt="footer" />
    </Styled.FooterContainer>
  );
}

export default Footer;
