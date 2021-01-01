import React from 'react';

import { Container } from './styles';

const Button = ({ solid, children, ...props }) => {
  return (
    <Container>
      <button solid={solid} {...props}>
        {children}
      </button>
    </Container>
  );
};

export default Button;
