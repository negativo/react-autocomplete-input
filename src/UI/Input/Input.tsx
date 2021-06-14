import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  display: block;
  padding: 0.5em 0.25em;
  border-radius: 0.2em;
  font-size: 1.2em;
  font-weight: 300;
  appearance: none;
  outline: 0;
  border: 1px solid #65fffc;
  background-color: #52a8a7;
  text-align: center;
  color: white;
  &::placeholder {
    font-family: "Source Sans Pro", sans-serif;
    color: white;
  }
  &:hover {
    background-color: #5cc2c0;
  }
  &:focus {
    background-color: white;
    color: #000;
  }
`;
interface InputProps {
  onKeyUp: React.KeyboardEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}
export const Input = ({ onKeyUp, onChange, value, onBlur }: InputProps) => {
  return (
    <InputElement
      onKeyUp={onKeyUp}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      placeholder="Search for something"
    />
  );
};
