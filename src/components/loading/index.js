import React from 'react';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <strong>Carregando...</strong>
      <div className="loader">
        <span />
        <span />
        <span />
        <span />
      </div>
    </Container>
  );
}
