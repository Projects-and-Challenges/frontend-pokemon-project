import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 180px;
  height: 100vh;

  padding: 24px 16px;

  background-color: #02244c;

  position: absolute;
  left: 0;

  & .settings {
    position: absolute;

    bottom: 24px;
  }

  & :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
