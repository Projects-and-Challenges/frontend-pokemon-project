import styled from "styled-components";

export const FormsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 260px;
  height: 400px;

  padding: 32px;

  border-radius: 4px;
  background-color: #d9eefb;

  @media (min-width: 1024px) {
    width: 400px;
    height: 500px;
  }

  & .formContent {
    display: flex;
    flex-direction: column;
    gap: 24px;

    width: 90%;
  }

  & .inputContainer {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & .labelInput {
    font-weight: 500;
  }

  & .input {
    all: unset;

    height: 32px;
    padding: 4px 12px;

    border-radius: 8px;
    background-color: #ffffff;

    font-size: 12px;
  }

  & .labelInput,
  .input {
    color: #666666;
  }

  & .signIn {
    all: unset;

    display: flex;
    justify-content: center;
    align-self: center;

    margin-top: 24px;

    width: 120px;
    padding: 8px 32px;

    background-color: #666666;

    border: 0.5px solid #f8f8f8;
    border-radius: 8px;

    cursor: pointer;
  }
`;
