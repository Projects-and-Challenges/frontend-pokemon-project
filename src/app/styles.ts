import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;

  min-height: 100vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  width: 400px;
  height: 400px;

  border-radius: 50%;
  background: #d9eefb;
  opacity: 0.75;

  position: absolute;
  top: 20%;

  color: black;
  font-weight: 700;

  & .sign,
  .login {
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    padding: 16px 48px;

    background-color: #ffffff;

    border: 0.5px solid #f8f8f8;
    border-radius: 8px;

    cursor: pointer;
  }
`;
