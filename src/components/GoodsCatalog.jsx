import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/cartSlice";
import { PRODUCTS } from "../data/productsData";

const GoodsCatalogContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 10px;
`;

const GoodsCatalogItem = styled.div`
  padding: 10px;
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
  font-size: var(--fs-md);
  font-weight: bold;
`;

const ProductPrice = styled.span`
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
  margin-top: 5px;
  cursor: pointer;
`;

function GoodsCatalog() {
  const dispatch = useDispatch();
  
  const handleClick = (product) => {
    dispatch(addCartItem(product));
  }
  
  return (
    <GoodsCatalogContainer>
      {PRODUCTS.map((product) => (
        <GoodsCatalogItem key={product._id}>
          <img width="200" height="150" src={product.imgSrc} />
          <ProductBrand>{product.brand}</ProductBrand>
          <ProductName>{product.name}</ProductName>
          <ProductPriceValue>US$ </ProductPriceValue>
          <ProductPrice>{product.price}</ProductPrice>
          <ProductButtonContainer>
            <ProductButton
              onClick={() => handleClick(product)}
            >
              Add to cart
            </ProductButton>
          </ProductButtonContainer>
        </GoodsCatalogItem>
      ))}
    </GoodsCatalogContainer>
  );
}

export default GoodsCatalog;
