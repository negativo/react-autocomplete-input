import React from "react";
import styled from "styled-components";

const TitleElement = styled.h1`
  display: block;
  border: none;
  border-radius: 0.2em;
  font-size: 2.5em;
  font-weight: 100;
  text-align: center;
  color: white;
  margin-top: 100px;
`;

export const Title = () => {
  return <TitleElement>Welcome</TitleElement>;
};
