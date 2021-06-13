import React from 'react';
import styled from 'styled-components';

const ResultItemElement = styled.div`
  display: block;
  width: 100%;
  padding: 0.15em 0.25em;
  border: none;
  font-size: .9em;
  background-color: white;
  border-bottom: 1px dotted;
  :hover{
    background-color: grey;
  }
`;
export const ResultItem: React.FunctionComponent<{ value: string }> = ({ value}) => {
  return <ResultItemElement>
    {value}
  </ResultItemElement>;
}
