import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 200px;
  height: 35px;
  float: left;
  padding-left: 30px;
  padding-right: 10px;
  font-size: var(--fs-sm);
  border: none;
  border-radius: 3px;
  background-color: var(--bg-gray);
`;

const SearchIcon = styled.span`
  position: absolute;
  top: 18%;
  left: 4%;
`;

function Search() {
  return (
    <SearchContainer>
      <SearchIcon>
        <i class="fa fa-search" />
      </SearchIcon>
      <SearchInput type="search" id="search" placeholder="Search..." />
    </SearchContainer>
  );
}

export default Search;
