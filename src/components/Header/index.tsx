"use client";

import { useRouter } from "next/navigation";

import * as Styled from "./styles";

import React from "react";

function Header(): JSX.Element {
  const router = useRouter();

  return (
    <Styled.HeaderContainer>
      <button type="button" onClick={() => router.push("/signin")}>
        Create account
      </button>
      <button type="button" onClick={() => router.push("/login")}>
        Log In
      </button>
    </Styled.HeaderContainer>
  );
}

export default Header;
