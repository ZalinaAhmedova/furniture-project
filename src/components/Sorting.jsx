import React, { useState } from "react";
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

function Sorting({ value, onChangeSort }) {
  const sortList = ["Popular", "Highest Price", "Lowest Price", "New", "Name"];

  return (
    <SortingContainer>
      <SortingTitle>SORT BY</SortingTitle>
      <SortingSelect value={value} onChange={onChangeSort}>
        {sortList.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </SortingSelect>
    </SortingContainer>
  );
}

export default Sorting;
