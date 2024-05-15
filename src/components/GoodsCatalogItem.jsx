import React from "react";
import styled from "styled-components";

const GoodsCatalogItemWrapper = styled.div`
  display: ${(props) => (props.$isListView ? "flex" : "block")};
  padding: 10px;
  border-bottom: ${(props) =>
    props.$isListView ? "1px var(--bg-gray) solid" : "none"};
`;

const ProductNameContainer = styled.div`
  margin-top: 15px;
`;

const ProductPriceButtonContainer = styled.div`
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
  margin-top: ${(props) => (props.$isListView ? "auto" : "0")};
  font-size: var(--fs-md);
  font-weight: bold;
`;

const ProductPrice = styled.span`
  margin-top: ${(props) => (props.$isListView ? "auto" : "0")};
  font-size: var(--fs-md);
  font-weight: bold;
`;

const ProductButton = styled.button`
  border: none;
  border-radius: 3px;
  background-color: var(--bg-green);
  color: var(--white);
  font-size: var(--fs-sm);
  padding: 5px 10px;
  margin-right: 5px;
  margin-left: ${(props) => (props.$isListView ? "15px" : "0")};
  margin-top: ${(props) => (props.$isListView ? "125px" : "5px")};
  height: 30px;
  min-width: 60px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.7;
  }
`;

function GoodsCatalogItem({
  item,
  onClickAddButton,
  onClickDecreaseButton,
  isListView,
  isAdded,
}) {
  return (
    <GoodsCatalogItemWrapper key={item._id} $isListView={isListView}>
      <img width="200" height="150" src={item.imgSrc} />
      <ProductNameContainer>
        <ProductBrand>{item.brand}</ProductBrand>
        <ProductName>{item.name}</ProductName>
      </ProductNameContainer>
      <ProductPriceButtonContainer>
        <ProductPriceValue $isListView={isListView}>US$ </ProductPriceValue>
        <ProductPrice $isListView={isListView}>{item.price}</ProductPrice>
      </ProductPriceButtonContainer>
      {isAdded && (
        <ProductButton onClick={() => onClickDecreaseButton(item)}>
          -1
        </ProductButton>
      )}
      <ProductButton
        $isListView={isListView}
        onClick={() => onClickAddButton(item)}
      >
        {isAdded ? `+1` : `Add to cart`}
      </ProductButton>
    </GoodsCatalogItemWrapper>
  );
}

export default GoodsCatalogItem;
