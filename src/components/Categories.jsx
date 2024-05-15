import React, { useState } from "react";
import styled from "styled-components";
import CATEGORIES_DATA from "../data/categoriesData";

const CategoriesWrapper = styled.ul``;

const CategoriesTitle = styled.h2`
  margin-bottom: 15px;
  padding: 10px;
  font-size: var(--fs-lg);
  text-align: center;
  border: 1px solid var(--mid-gray);
  border-radius: 3px;
`;

const Subcategories = styled.ul`
  font-size: var(--fs-sm);
`;

const CategoriesItem = styled.li`
  padding-top: 15px;
  cursor: pointer;
`;

const CategoriesItemText = styled.p`
  font-size: var(--fs-sm);
  font-weight: var(--medium);

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

const SubcategoriesItem = styled.li`
  padding-left: 10px;
  font-size: var(--fs-sm);
  padding-left: 10px;
  padding-top: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

function Categories({ onClickCategory }) {

  return (
    <CategoriesWrapper>
      <CategoriesTitle>Categories</CategoriesTitle>
      {CATEGORIES_DATA.map((category, idx) => (
        <CategoriesItem key={idx}>
          <CategoriesItemText
            onClick={() => {
              onClickCategory(category.categoryName);
            }}
          >
            {category.categoryName}
          </CategoriesItemText>
          <Subcategories>
            {category.subCategory.map((subCategory, ind) => (
              <SubcategoriesItem
                key={ind}
                onClick={() => onClickCategory(subCategory)}
              >
                {subCategory}
              </SubcategoriesItem>
            ))}
          </Subcategories>
        </CategoriesItem>
      ))}
    </CategoriesWrapper>
  );
}

export default Categories;
