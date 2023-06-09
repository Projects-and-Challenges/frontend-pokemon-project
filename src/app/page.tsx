"use client";

import { ROUTER_PATHS } from "@/constants/router";
import Image from "next/image";
import * as Styled from "./styles";
import Header from "@/components/Header";
import cover from "@/images/cover.svg";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

export default function Home(): JSX.Element {
  const router = useRouter();

  return (
    <main>
      <Styled.PageContainer>
        <Image
          src={cover}
          alt="Pokemon Logo"
          fill={true}
          style={{
            minWidth: "100%",
            objectPosition: "center",
            zIndex: -1,
          }}
        />
        <Styled.PresentationContainer>
          <h1 className="title-presentation">Sejam bem-vindos, Treinadores!</h1>

          <div className="paragraph-presentation">
            Capturem, treinem e batalhem de qualquer lugar do mundo real <br />
            com os amigos e com seu Pokémon companheiro! <br />
            Veja e organize os pokémons que você já capturou <br />
            por nível de poder, nome ou seus favoritos. <br />
          </div>

          <Styled.ButtonContainer>
            <button
              className="sign"
              type="button"
              onClick={() => router.push(`${ROUTER_PATHS.SIGN}`)}
            >
              Create account
            </button>
            <button
              className="login"
              type="button"
              onClick={() => router.push(`${ROUTER_PATHS.LOGIN}`)}
            >
              Log In
            </button>
          </Styled.ButtonContainer>
        </Styled.PresentationContainer>
      </Styled.PageContainer>
    </main>
  );
}
