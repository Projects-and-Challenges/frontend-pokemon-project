import styled from "styled-components";
import NextImage from 'next/image';

export const SignContainer = styled.div`
  display: flex;
  position: relative;
  margin: auto;
`;

export const Image = styled(NextImage)`
  min-width: 100%;
  clip-path: inset(0 52% 0 0);
  z-index: -1;
`;

export const LogoImage = styled.div`
  position: absolute;
  /* width: 100vw; */

  top: 24px;
  right: 24px;
`;

export const ImageContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;

    height: 100vh;
    width: 45vh;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  max-height: 450px;

  margin-top: 9%;
  margin-right: -20%;
`;

export const Button = styled.button`
  all: unset;

  display: flex;
  flex: 1;
  justify-content: center;
  margin-top: 16px;

  width: 60px;
  height: 120px;
  padding: 12px 30px;

  background: #888888;

  border: 0.5px solid #f8f8f8;
  border-radius: 8px;
  font-size: 18px;

  cursor: pointer; 
`;