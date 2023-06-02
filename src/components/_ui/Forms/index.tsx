"use client";

import { ROUTER_PATHS } from "@/constants/router";
import * as React from "react";

import * as Styled from "./styles";
import { useRouter } from "next/navigation";

export default function Forms(): JSX.Element {
  const router = useRouter();

  return (
    <Styled.FormsContainer>
      <form
        className="formContent"
        action="/send-credentials-here"
        method="post"
      >
        <div className="inputContainer">
          <label className="labelInput" htmlFor="username">
            Username
          </label>
          <input className="input" type="text" name="username" id="username" />
        </div>

        <div className="inputContainer">
          <label className="labelInput" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>

        <div className="inputContainer">
          <label className="labelInput" htmlFor="password">
            Senha
          </label>
          <input
            className="input"
            type="password"
            name="password"
            id="password"
            required
          />
        </div>

        <button
          className="signIn"
          type="submit"
          onClick={() => router.push(ROUTER_PATHS.HOME)}
        >
          Sign In
        </button>
      </form>
    </Styled.FormsContainer>
  );
}
