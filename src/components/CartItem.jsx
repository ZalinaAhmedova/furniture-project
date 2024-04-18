import React from "react";
import styled from "styled-components";
import incrementImg from "../images/increment_button.png";
import decrementImg from "../images/decrement_button.png";
import trashCan from "../images/trash_can.png";

const ShoppingCartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 5fr 1fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  height: 100px;
  box-shadow: 0px 1px 4px rgb(0, 0, 0, 0.25);
  border-radius: 15px;
`;

const ShoppingCartItemImg = styled.img`
  display: block;
  border-radius: 15px;
  width: 100px;
  height: 80px;
`;

const ShoppingCartItemNameContainer = styled.div``;

const ShoppingCartItemName = styled.p`
  font-size: var(--fs-lg);
  font-weight: var(--medium);
  line-height: var(--lh-lg);
`;

const ShoppingCartItemBrand = styled.p`
  font-size: var(--fs-sm);
  font-weight: var(--medium);
  line-height: var(--lh-sm);
`;

const QuantityValueContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const QuantityValue = styled.span`
  font-size: var(--fs-lg);
  font-weight: var(--semi-bold);
  line-height: var(--lh-sm);
`;

const IncrementImg = styled.img`
  display: block;
  width: 20px;
  height: 10px;
  cursor: pointer;
`;

const DecrementImg = styled.img`
  display: block;
  margin-top: 2px;
  width: 20px;
  height: 10px;
  cursor: pointer;
`;

const CurrencySign = styled.span`
  font-size: var(--fs-sm);
  font-weight: var(--medium);
  line-height: var(--lh-sm);
`;

const ShoppingCartItemPrice = styled.span`
  font-size: var(--fs-sm);
  font-weight: var(--medium);
  line-height: var(--lh-sm);
`;

const TrashImg = styled.img`
  display: block;
  cursor: pointer;
`;

function CartItem({imgSrc, brand, itemName, price, quantity = 2}) {
  return (
    <ShoppingCartItem>
      <ShoppingCartItemImg src={imgSrc} />
      <ShoppingCartItemNameContainer>
        <ShoppingCartItemBrand>{brand}</ShoppingCartItemBrand>
        <ShoppingCartItemName>{itemName}</ShoppingCartItemName>
      </ShoppingCartItemNameContainer>
      <QuantityValueContainer>
        <QuantityValue>{quantity}</QuantityValue>
        <div>
          <IncrementImg src={incrementImg} />
          <DecrementImg src={decrementImg} />
        </div>
      </QuantityValueContainer>
      <div>
        <CurrencySign>$</CurrencySign>
        <ShoppingCartItemPrice>{price}</ShoppingCartItemPrice>
      </div>
      <TrashImg src={trashCan} />
    </ShoppingCartItem>
  );
}

export default CartItem;
