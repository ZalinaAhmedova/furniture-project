import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--bg-gray);
`;

const FiltersTitle = styled.p`
  font-size: var(--fs-sm);
  font-weight: var(--medium);
`;

const FiltersList = styled.ul`
`;

const FilterListItem = styled.li`
  margin-top: 10px;
`;

const FiltersLabel = styled.label`
`;

const FilterInput = styled.input`
  display: none;
`;

const FilterFakeSpan = styled.span`
  display: inline-block;
  position: relative;
  width: 12px;
  height: 12px;
  border: 2px solid gray;
  border-radius: 1.5px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 10px;
    height: 10px;
    background-color: var(--bg-gray);

  }
`;

const FilterSpan = styled.span`
  display: inline-block;
  font-size: var(--fs-sm);
  padding-left: 5px;
`;

function Filters() {
  return (
    <FiltersContainer>
      <FiltersTitle>Filters</FiltersTitle>
      <FiltersList>
        <FilterListItem>
          <FiltersLabel htmlFor="brands">
            <FilterInput type="checkbox" id="brands" />
            <FilterFakeSpan></FilterFakeSpan>
            <FilterSpan>Brands</FilterSpan>
          </FiltersLabel>
        </FilterListItem>
        <FilterListItem>
          <FiltersLabel htmlFor="price">
            <FilterInput type="checkbox" id="price" />
            <FilterFakeSpan></FilterFakeSpan>
            <FilterSpan>Price from Lowest to Highest</FilterSpan>
          </FiltersLabel>
        </FilterListItem>
        <FilterListItem>
          <FiltersLabel htmlFor="instock">
            <FilterInput type="checkbox" id="instock" />
            <FilterFakeSpan></FilterFakeSpan>
            <FilterSpan>In Stock</FilterSpan>
          </FiltersLabel>
        </FilterListItem>
      </FiltersList>
    </FiltersContainer>
  );
}

export default Filters;
