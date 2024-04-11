import React from "react";
import styled from "styled-components";

const SortingContainer = styled.fieldset`
  padding: 5px;
  border: 1px solid var(--gray);
  border-radius: 3px;
`;

const SortingTitle = styled.legend`
  font-size: 10px;
`;

const SortingSelect = styled.select`
  border: none;
  font-size: var(--fs-sm);
  cursor: pointer;
`;

function Sorting() {
  return (
    <SortingContainer>
      <SortingTitle>SORT BY</SortingTitle>
      <SortingSelect>
        <option>Popular</option>
        <option>Price</option>
        <option>News</option>
        <option>Product Name</option>
      </SortingSelect>
    </SortingContainer>
  );
}

export default Sorting;
