import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { decrementCartItem, incrementCartItem, removeCartItem } from "../store/cartSlice";
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

function CartItem({imgSrc, brand, name, price, _id, quantity}) {
  const dispatch = useDispatch();
  const handleRemoveButton = (_id) => {
    dispatch(removeCartItem(_id));
  }
  const handleIncrementButton = (_id) => {
    dispatch(incrementCartItem(_id));
  }
  const handleDecrementButton = (_id) => {
    dispatch(decrementCartItem(_id));
  }

  return (
    <ShoppingCartItem>
      <ShoppingCartItemImg src={imgSrc} />
      <ShoppingCartItemNameContainer>
        <ShoppingCartItemBrand>{brand}</ShoppingCartItemBrand>
        <ShoppingCartItemName>{name}</ShoppingCartItemName>
      </ShoppingCartItemNameContainer>
      <QuantityValueContainer>
        <QuantityValue>{quantity}</QuantityValue>
        <div>
          <IncrementImg src={incrementImg} onClick={() => handleIncrementButton(_id)}/>
          <DecrementImg src={decrementImg} onClick={() => handleDecrementButton(_id)}/>
        </div>
      </QuantityValueContainer>
      <div>
        <CurrencySign>$</CurrencySign>
        <ShoppingCartItemPrice>{price*quantity}</ShoppingCartItemPrice>
      </div>
      <TrashImg src={trashCan} onClick={() => handleRemoveButton(_id)}/>
    </ShoppingCartItem>
  );
}

export default CartItem;
