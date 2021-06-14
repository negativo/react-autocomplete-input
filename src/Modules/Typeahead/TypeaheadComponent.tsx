import React, { useState } from "react";
import styled from "styled-components";
import { Input, ListItem, ListContainer } from "../../UI";
import useFuzzyMatching from "./FuzzyMatchingHook";
import getHighlightedText from "./getHighlightedText";
import TERMS from "../../Resources/terms";

const TypeaheadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  max-height: 500px;
  margin: 20px auto;
`;
const HighlightedContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ENTER_KEY = "Enter";
const ARROW_UP_KEY = "ArrowUp";
const ARROW_DOWN_KEY = "ArrowDown";

const Typeahead = () => {
  const { results, search, reset, searchTerm } = useFuzzyMatching(TERMS);
  const [value, setValue] = useState("");
  const [tempValue, setTempValue] = useState("");
  const [highlightIndex, setHighlightIndex] = useState(0);

  const fieldRef = React.useRef<HTMLInputElement>(null);
  const setNextHighlightIndex = (nextHighlightIndex: number) => {
    setHighlightIndex(nextHighlightIndex);
    setTimeout(() => {
      if (fieldRef.current) {
        fieldRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 0);
  };

  const onKeyUp = (
    e: React.KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) => {
    let nextHighlightIndex;
    if (e.key === ARROW_DOWN_KEY) {
      nextHighlightIndex =
        highlightIndex === results.length ? 1 : highlightIndex + 1;
      setNextHighlightIndex(nextHighlightIndex);
      return;
    }
    if (e.key === ARROW_UP_KEY) {
      nextHighlightIndex =
        highlightIndex === 1 ? results.length : highlightIndex - 1;
      setNextHighlightIndex(nextHighlightIndex);
      return;
    }
    if (e.key === ENTER_KEY && highlightIndex !== 0) {
      setValue(!isTempValueEmpty ? tempValue : results[highlightIndex - 1]);
      reset();
      return;
    }
    search(e.target.value);
    setValue(e.target.value);
    setHighlightIndex(0);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue("");
    setValue(e.currentTarget.value);
  };

  const onClick = (value: string) => {
    setValue(value);
    reset();
  };
  const isTempValueEmpty = tempValue === "";
  const onMouseEnter = (value: string) => {
    setTempValue(value);
  };
  const onMouseLeave = () => {
    setTempValue("");
  };
  const onBlur = () => {
    reset();
    setHighlightIndex(0);
  };

  return (
    <TypeaheadContainer>
      <Input
        onKeyUp={onKeyUp}
        onChange={onChange}
        value={!isTempValueEmpty ? tempValue : value}
        onBlur={onBlur}
      />
      {results.length === 0 && searchTerm !== "" && (
        <ListContainer>
          <ListItem
            value={""}
            highlightedContent={"No results found. Try Again"}
            highlightedRef={null}
            onClick={() => {}}
            highlighted={false}
            onMouseLeave={() => {}}
            onMouseEnter={() => {}}
          />
        </ListContainer>
      )}

      {results.length > 0 && (
        <ListContainer>
          {results.map((term, index) => {
            const highlighted = index === highlightIndex - 1;
            const highlightedContent = getHighlightedText(term, searchTerm);
            return (
              <ListItem
                highlightedContent={
                  <HighlightedContentContainer key={index}>
                    {highlightedContent}
                  </HighlightedContentContainer>
                }
                value={term}
                onClick={onClick}
                highlighted={highlighted}
                highlightedRef={highlighted ? fieldRef : null}
                key={index}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              />
            );
          })}
        </ListContainer>
      )}
    </TypeaheadContainer>
  );
};

export default Typeahead;
