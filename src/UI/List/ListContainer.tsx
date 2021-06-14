import React from "react";
import styled from "styled-components";

const ListContainerElement = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  box-shadow: 0 0 1em 0.25em rgba(0, 0, 0, 0.2);
  height: 400px;
  flex: 1;
  border-radius: 0.2em;
  overflow: hidden;
  overflow-y: auto;
  margin-top: 0.2em;
`;
export const ListContainer: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <ListContainerElement>{children}</ListContainerElement>;
};
