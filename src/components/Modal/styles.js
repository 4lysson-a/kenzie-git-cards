import styled, { keyframes } from 'styled-components';

export const fadeAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  } to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

export const Container = styled.div`
  position: fixed;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background: white;

  z-index: 10;

  width: 300px;
  height: 300px;

  border-radius: 10px;

  opacity: 0;
  animation: ${fadeAnimation} 0.5s ease forwards;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: var(--night);
`;

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);

  z-index: 5;
`
