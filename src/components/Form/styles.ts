import styled from "styled-components";

export const Form = styled.form`
  background: #d9eefb;

  padding: 80px 200px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  align-content: center;
  justify-content: center;

  width: 260px;
  /* height: 440px; */

  margin: auto;

  border: none;
  border-radius: 10px;
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

	background: #666666;

	border: 0.5px solid #f8f8f8;
	border-radius: 8px;
	font-size: 18px;

	cursor: pointer; 
`;