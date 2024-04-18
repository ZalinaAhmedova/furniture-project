import React from "react";
import styled from "styled-components";

const CategoriesWrapper = styled.ul`
`;

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
  font-size: var(--fs-sm);
  padding-top: 20px;
  font-weight: var(--medium);
`;

const SubcategoriesItem = styled.li`
  padding-left: 10px;
  font-size: var(--fs-sm);
  padding-top: 10px;
  padding-left: 10px;
`;

function Categories() {
  return (
    <CategoriesWrapper>
      <CategoriesTitle>Categories</CategoriesTitle>
      <CategoriesItem>All Categories</CategoriesItem>
      <CategoriesItem>
        Living Area
        <Subcategories>
          <SubcategoriesItem>Sofas</SubcategoriesItem>
          <SubcategoriesItem>Armchairs and Chaises Lounges</SubcategoriesItem>
          <SubcategoriesItem>Poufs and Ottomans</SubcategoriesItem>
          <SubcategoriesItem>Bookshelves</SubcategoriesItem>
          <SubcategoriesItem>Rugs</SubcategoriesItem>
        </Subcategories>
      </CategoriesItem>
      <CategoriesItem>
        Dining Area
        <Subcategories>
          <SubcategoriesItem>Tables</SubcategoriesItem>
          <SubcategoriesItem>Chairs</SubcategoriesItem>
        </Subcategories>
      </CategoriesItem>
      <CategoriesItem>
        Hallway
        <Subcategories>
          <SubcategoriesItem>Coat Racks</SubcategoriesItem>
          <SubcategoriesItem>Mirrors</SubcategoriesItem>
        </Subcategories>
      </CategoriesItem>
      <CategoriesItem>
        Night Area
        <Subcategories>
          <SubcategoriesItem>Beds</SubcategoriesItem>
          <SubcategoriesItem>Wardrobes</SubcategoriesItem>
          <SubcategoriesItem>Dressing Tables</SubcategoriesItem>
        </Subcategories>
      </CategoriesItem>
    </CategoriesWrapper>
  );
}

export default Categories;
