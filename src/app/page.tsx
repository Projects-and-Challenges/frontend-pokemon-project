"use client";

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
        <Styled.ButtonContainer>
          <button
            className="sign"
            type="button"
            onClick={() => router.push("/sign")}
          >
            Create account
          </button>
          <button
            className="login"
            type="button"
            onClick={() => router.push("/login")}
          >
            Log In
          </button>
        </Styled.ButtonContainer>
      </Styled.PageContainer>
    </main>
  );
}
