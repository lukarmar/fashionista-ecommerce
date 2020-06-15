import React from 'react';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <span>Carregando...</span>
      <svg>
        <circle cx="50" cy="50" r="50" />
      </svg>
    </Container>
  );
}
