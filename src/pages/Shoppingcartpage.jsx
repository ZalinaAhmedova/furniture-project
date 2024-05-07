import React from "react";
import ShoppingContinueWrapper from "../components/ShoppingContinueWrapper";
import Cart from "../components/Cart";
import DeliveryCardSection from "../components/ShoppingCartPage/DeliveryCardSection/DeliveryCardSection";

function ShoppingCartPage() {
  return (
    <>
      <ShoppingContinueWrapper />
      <Cart />
      <DeliveryCardSection />
    </>
  );
}

export default ShoppingCartPage;
