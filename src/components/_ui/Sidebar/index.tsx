"use client";

import * as React from "react";
import * as Styled from "./styles";
import Image from "next/image";

import CloseMenuButton from "@/images/close-menu.svg";
import OpenMenuButton from "@/images/open-menu.svg";
import Home from "@/images/home-icon.svg";
import Pokebola from "@/images/pokebola-icon.svg";
import Settings from "@/images/settings-icon.svg";

const headerButtons = [
  { src: CloseMenuButton, alt: "Close Menu", className: "close-menu" },
  { src: OpenMenuButton, alt: "Open Menu", className: "open-menu" },
  { text: "Início", src: Home, alt: "Home", className: "home" },
  { text: "Pokedéx", src: Pokebola, alt: "Pokebola", className: "pokebola" },
  {
    text: "Configurações",
    src: Settings,
    alt: "Settings",
    className: "settings",
  },
];

function SideBar(): JSX.Element {
  const [headerOpen, setHeaderOpen] = React.useState<boolean>(true);

  return (
    <Styled.SideBarContainer>
      <div>
        <Image
          src={headerOpen ? headerButtons[0].src : headerButtons[1].src}
          alt={headerOpen ? headerButtons[0].alt : headerButtons[1].alt}
        />
      </div>

      {headerButtons.map((item, index) => {
        return (
          index > 1 && (
            <div
              className={item.className}
              style={{ display: "flex", alignItems: "center" }}
            >
              <Image
                key={index}
                src={item.src}
                alt={item.alt}
                style={{ marginRight: "12px" }}
              />
              <span>{item.text}</span>
            </div>
          )
        );
      })}
    </Styled.SideBarContainer>
  );
}

export default SideBar;
