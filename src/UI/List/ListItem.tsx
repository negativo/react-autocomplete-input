import React from "react";
import styled from "styled-components";

const ListItemElement = styled.div<{ highlighted: boolean }>`
  display: block;
  width: 100%;
  padding: 0.5em 0.35em;
  border: none;
  font-size: 0.9em;
  background-color: ${(props) => (props.highlighted ? "#6fe4e2" : "white")};
  border-bottom: 1px;
  :hover {
    background-color: #6fe4e2;
  }
`;

interface ListItemProps {
  value: string;
  onClick: (v: string) => void;
  onMouseEnter: (v: string) => void;
  onMouseLeave: () => void;
  highlighted: boolean;
  highlightedRef?: any;
  highlightedContent: any;
}
export const ListItem: React.FunctionComponent<ListItemProps> = ({
  value,
  onClick,
  highlighted,
  highlightedRef,
  highlightedContent,
  onMouseEnter,
  onMouseLeave,
}) => (
  <ListItemElement
    onClick={() => onClick(value)}
    highlighted={highlighted}
    ref={highlightedRef}
    onMouseEnter={() => onMouseEnter(value)}
    onMouseLeave={onMouseLeave}
  >
    {highlightedContent}
  </ListItemElement>
);
