import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;

  min-height: 100vh;
`;

export const PresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 34rem;

  padding: 24px;

  text-align: center;
  color: #ffffff;

  & .title-presentation {
    margin-bottom: 32px;
  }

  & .paragraph-presentation {
    margin-bottom: 7rem;

    font-size: 16px;
    line-height: 32px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  color: #ffffff;
  font-weight: 700;

  & .sign,
  .login {
    all: unset;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    padding: 16px 48px;

    background-color: #666666;
    opacity: 0.7;

    border: 0.5px solid #f8f8f8;
    border-radius: 8px;
  }

  & .sign:hover,
  .login:hover {
    background-color: #ffffff;

    color: #666666;

    cursor: pointer;
  }
`;
