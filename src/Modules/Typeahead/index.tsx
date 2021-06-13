import React from 'react';
import styled from 'styled-components';
import { Input, ResultItem, ResultsContainer } from '../../UI/';
import terms from '../../Resources/terms';

const TypeaheadContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
  max-height: 500px;
  margin:  100px auto;
`;
const Typeahead = () => {
  return <TypeaheadContainer>
    <Input/>
    { terms && 
      <ResultsContainer>
        { terms.map(term => <ResultItem value={term} />)}
      </ResultsContainer>}
  </TypeaheadContainer>;
}

export default Typeahead;