import React from "react";
import styled from "styled-components";
import Categories from "../components/Categories";
import Filters from "../components/Filters";
import Sorting from "../components/Sorting";
import Search from "../components/Search";
import ViewCatalogButton from "../components/ViewCatalogButton";
import GoodsCatalog from "../components/GoodsCatalog";

const ShopPageWrapper = styled.section`
  width: calc(100% - 130px * 2);
  margin: 0 auto;
  display: flex;
`;

const CategoriesWrapper = styled.div`
  width: 230px;
  margin-top: 50px;
  padding-right: 10px;
  border-right: 1px solid var(--bg-gray);
`;

const GoodsWrapper = styled.div`
  width: calc(100% - 130px * 2);
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

const ControllersWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  border-bottom: 1px solid var(--bg-gray);
  padding-bottom: 25px;
`;

function ShopPage() {
  return (
    <ShopPageWrapper>
      <CategoriesWrapper>
        <Categories />
        <Filters />
      </CategoriesWrapper>
      <GoodsWrapper>
        <ControllersWrapper>
          <Sorting />
          <Search />
          <ViewCatalogButton />
        </ControllersWrapper>
        <GoodsCatalog />
      </GoodsWrapper>
    </ShopPageWrapper>
  );
}

export default ShopPage;
