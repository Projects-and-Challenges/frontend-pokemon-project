import styled, { css } from "styled-components";

type SideBarProps = {
  open: boolean;
};

export const SideBarContainer = styled.div<SideBarProps>`
  display: flex;
  flex-direction: column;
  gap: 24px;

  height: 100vh;

  padding: 24px 16px;

  background-color: #02244c;

  position: absolute;
  left: 0;

  ${({ open }) => open ? css`width: 180px` : css`width: 60px`}

  & .settings {
    position: absolute;

    bottom: 24px;
  }

  & :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const Span = styled.span`
  color: #fff;
  margin-left: 3px;
`;