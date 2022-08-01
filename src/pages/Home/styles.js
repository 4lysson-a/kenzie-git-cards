import styled from "styled-components";

import { widthAnimation, fadeAnimation } from "../../styles/animations";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const StyledInput = styled.input`
  width: 0;
  border-radius: 8px;
  padding: 15px 20px;
  border: none;
  color: white;
  outline: none;
  font-weight: bold;
  background: var(--orange);

  opacity: 0;
  animation: ${widthAnimation} 1s ease forwards;

  &::placeholder {
    color: white;
    opacity: 0.4;
    font-weight: bold;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--yellow);

  transition: 0.5s;

  opacity: 0;
  animation: ${fadeAnimation} 0.5s 0.6s ease forwards;

  font-weight: bold;
  cursor: pointer;

  text-decoration: unset;

  &:hover {
    text-decoration: underline;
  }
`;
