"use client";

import * as React from "react";
import * as Styled from "./styles";
import Image from "next/image";
import Link from "next/link";

import { SIDEBAR_BUTTONS } from "@/constants/sidebar";

function SideBar(): JSX.Element {
  const [headerOpen, setHeaderOpen] = React.useState<boolean>(true);

  return (
    <Styled.SideBarContainer open={headerOpen}>
      <div onClick={() => setHeaderOpen(prev => !prev)}>
        <Image
          src={headerOpen ? SIDEBAR_BUTTONS[0].src : SIDEBAR_BUTTONS[1].src}
          alt={headerOpen ? SIDEBAR_BUTTONS[0].alt : SIDEBAR_BUTTONS[1].alt}
        />
      </div>

      {SIDEBAR_BUTTONS.map((item, index) => {
        return (
          index > 1 && (
            <div
              className={item.className}
              style={{ display: "flex", alignItems: "center" }}
            >
              {item.path ? (
                <Link href={item.path}>
                  <Image
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    style={{ marginRight: "12px" }}
                    />
                  {headerOpen && <Styled.Span>{item.text}</Styled.Span>}
                </Link>
              ) : (
                <>
                  <Image
                    key={index}
                    src={item.src}
                    alt={item.alt}
                    style={{ marginRight: "12px" }}
                    />
                  {headerOpen && <Styled.Span>{item.text}</Styled.Span>}
                </>
              )}
            </div>
          )
        );
      })}
    </Styled.SideBarContainer>
  );
}

export default SideBar;
