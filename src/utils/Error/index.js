import React from 'react';
import { StyledError } from './styles';

const Error = ({ error }) => {
  if (!error) return null;
  return <StyledError>{error}</StyledError>;
};

export default Error;
