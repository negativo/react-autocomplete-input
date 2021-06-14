import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  display: block;
  padding: 0.5em 0.25em;
  border: none;
  border-radius: 0.2em;
  font-size: 1.5em;
  display: block;
  appearance: none;
  outline: 0;
  border: 1px solid #65fffc;
  width: 250px;
  background-color: #52a8a7;
  border-radius: 3px;
  padding: 10px 15px;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white;
  &::placeholder {
    font-family: "Source Sans Pro", sans-serif;
    color: white;
    font-weight: 300;
  }
  font-weight: 300;
  border: 1px solid fade(white, 40%);
  background-color: fade(white, 20%);
  &:hover {
    background-color: fade(white, 40%);
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
