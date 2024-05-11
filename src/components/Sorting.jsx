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
  const sortList = [
    {
      name: "Popular",
      sortProperty: "popular",
    },
    {
      name: "Highest Price",
      sortProperty: "highest price",
    },
    {
      name: "Lowest Price",
      sortProperty: "lowest price",
    },
    {
      name: "New",
      sortProperty: "new",
    },
    {
      name: "Name",
      sortProperty: "name",
    },
  ];

  return (
    <SortingContainer>
      <SortingTitle>SORT BY</SortingTitle>
      <SortingSelect>
        {sortList.map((item, idx) => (
          <option key={idx} onChange>{item.name}</option>
        ))}
      </SortingSelect>
    </SortingContainer>
  );
}

export default Sorting;
