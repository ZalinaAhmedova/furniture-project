import React from "react";
import styled from "styled-components";
import { PRODUCTS } from "../data/productsData";
import CartItem from "./CartItem";

const CartSection = styled.div`
  width: calc(100% - 130px * 2);
  margin: 0 auto;
`;

const CartTitle = styled.h2`
  font-size: 18px;
  font-weight: var(--medium);
  line-height: var(--lh-lg);
  margin-top: 25px;
`;

const CartText = styled.p`
  font-size: var(--fs-sm);
  font-weight: var(--medium);
  line-height: var(--lh-sm);
`;

const CartList = styled.div`
  margin-top: 25px;
`;

function Cart() {
  return (
    <CartSection>
      <CartTitle>Shopping Cart</CartTitle>
      <CartText>You have 3 item in your cart</CartText>
      <CartList>
        <CartItem cartProducts={PRODUCTS} />
      </CartList>
    </CartSection>
  );
}

export default Cart;
