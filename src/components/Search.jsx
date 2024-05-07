import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div``;

const SearchInput = styled.input`
  position: relative;
  width: 200px;
  height: 35px;
  padding-left: 30px;
  padding-right: 5px;
  font-size: var(--fs-sm);
  border: none;
  border-radius: 3px;
  background-color: var(--bg-gray);
`;

const SearchIcon = styled.span`
  position: absolute;
  width: 15px;
  height: 16px;
  z-index: 1;
  margin-top: 6px;
  margin-left: 7px;
`;

function Search({ value, onChange }) {

  return (
    <SearchContainer>
      <SearchIcon>
        <i className="fa fa-search" />
      </SearchIcon>
      <SearchInput
        value={value}
        onChange={onChange}
        type="search"
        id="search"
        placeholder="Search..."
      />
    </SearchContainer>
  );
}

export default Search;
