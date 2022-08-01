import React from 'react';
import { Container, Backdrop, Title } from './styles';

const Modal = ({ onClose, name }) => {
  return (
    <>
      <Container>
        <Title>Olá, {name}</Title>
      </Container>
      <Backdrop onClick={onClose} />
    </>
  );
};

export default Modal;
