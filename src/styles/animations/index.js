import { keyframes } from "styled-components";

export const widthAnimation = keyframes`
  from {
    opacity: 0;
    width: 0;
  } to {
    opacity: 1;
    width: 300px;
  }
`;

export const fadeAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

