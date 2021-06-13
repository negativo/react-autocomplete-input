import React from 'react';
import styled from 'styled-components';

const InputElement = styled.input`
  display: block;
  padding: 0.5em 0.25em;
  border: none;
  border-radius: 0.2em;
  font-size: 1.5em;
  box-shadow: 0 0 1em 0.25em rgba(0,0,0,0.2);
`;
export const Input = () => {
  return <InputElement />;
}
