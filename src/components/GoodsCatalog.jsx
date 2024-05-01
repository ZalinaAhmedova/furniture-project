import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { incrementCartItem } from "../store/cartSlice";
import { addCartItem } from "../store/cartSlice";
import { PRODUCTS } from "../data/productsData";

const GoodsCatalogContainerTile = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 10px;
`;

const GoodsCatalogContainerList = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(150px, 1fr));
`;

const GoodsCatalogItemTile = styled.div`
  padding: 10px;
`;

const GoodsCatalogItemList = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px var(--bg-gray) solid;
`;

const ProductNameListView = styled.div`
  margin-top: 15px;
`;

const ProductPriceButtonListView = styled.div`
  margin-left: auto;
  margin-top: auto;
  display: flex;
`;

const ProductBrand = styled.p`
  font-size: var(--fs-xs);
  margin-bottom: 5px;
`;

const ProductName = styled.p`
  font-size: var(--fs-sm);
  font-weight: var(--semi-bold);
  margin-bottom: 5px;
`;

const ProductPriceValue = styled.span`
  margin-top: ${(props) => (props.isViewList ? "auto" : "0")};
  font-size: var(--fs-md);
  font-weight: bold;
`;

const ProductPrice = styled.span`
  margin-top: ${(props) => (props.isViewList ? "auto" : "0")};
  font-size: var(--fs-md);
  font-weight: bold;
`;

const ProductButtonContainer = styled.div``;

const ProductButton = styled.button`
  border: none;
  border-radius: 3px;
  background-color: var(--bg-green);
  color: var(--white);
  font-size: var(--fs-sm);
  padding: 5px 10px;
  margin-left: ${(props) => (props.isViewList ? "15px" : "0")};
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }
`;

function GoodsCatalog({ category, subCategory, viewMode, searchCatalogValue }) {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleIncrementButton = (_id) => {
    dispatch(incrementCartItem(_id));
  };

  const addProductHandler = (product, productId) => {
    let isCartIncludesItem = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        isCartIncludesItem = true;
        handleIncrementButton(productId);
      }
    });
    !isCartIncludesItem && dispatch(addCartItem(product));
  };

  const products =
    category === "All Categories"
      ? PRODUCTS
      : PRODUCTS.filter((cat) => cat.subCategory === subCategory);

  return (
    <>
      {viewMode === "tile" && (
        <GoodsCatalogContainerTile>
          {products
            .filter((product) => {
              const fullProductName = (
                product.name + product.brand
              ).toLowerCase();
              return searchCatalogValue
                ? fullProductName.includes(searchCatalogValue.toLowerCase())
                : product;
            })
            .map((product) => (
              <GoodsCatalogItemTile key={product._id}>
                <img width="200" height="150" src={product.imgSrc} />
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductName>{product.name}</ProductName>
                <ProductPriceValue>US$ </ProductPriceValue>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButtonContainer>
                  <ProductButton
                    onClick={() => addProductHandler(product, product._id)}
                  >
                    Add to cart
                  </ProductButton>
                </ProductButtonContainer>
              </GoodsCatalogItemTile>
            ))}
        </GoodsCatalogContainerTile>
      )}
      {viewMode === "list" && (
        <GoodsCatalogContainerList>
          {products
            .filter((product) => {
              const fullProductName = (
                product.name + product.brand
              ).toLowerCase();
              return searchCatalogValue
                ? fullProductName.includes(searchCatalogValue.toLowerCase())
                : product;
            })
            .map((product) => (
              <GoodsCatalogItemList key={product._id}>
                <img width="200" height="150" src={product.imgSrc} />
                <ProductNameListView>
                  <ProductBrand>{product.brand}</ProductBrand>
                  <ProductName>{product.name}</ProductName>
                </ProductNameListView>
                <ProductPriceButtonListView>
                  <ProductPriceValue isViewList>US$ </ProductPriceValue>
                  <ProductPrice isViewList>{product.price}</ProductPrice>
                  <ProductButtonContainer>
                    <ProductButton
                      isViewList
                      onClick={() => addProductHandler(product, product._id)}
                    >
                      Add to cart
                    </ProductButton>
                  </ProductButtonContainer>
                </ProductPriceButtonListView>
              </GoodsCatalogItemList>
            ))}
        </GoodsCatalogContainerList>
      )}
    </>
  );
}

export default GoodsCatalog;
