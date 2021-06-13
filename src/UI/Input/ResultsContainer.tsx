import React from 'react';
import styled from 'styled-components';

const ResultsContainerElement = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: 0 0 1em 0.25em rgba(0,0,0,0.2);
  height: 400px;
  flex: 1;
  border-radius: 0.2em;
  overflow: hidden;
  overflow-y: auto;
  margin-top: .2em;
`;
export const ResultsContainer: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  return <ResultsContainerElement>
    {children}
  </ResultsContainerElement>;
}
