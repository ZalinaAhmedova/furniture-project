import React from "react";
import styled from "styled-components";
import Delivery from "./Delivery";
import Card from "./Card";
import arrow2 from "../images/arrow2.png";

const DeliveryCardSectionStyled = styled.div`
  width: calc(100% - 130px * 2);
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
`;

const TotalSection = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 130px * 2);
  margin: 0 auto;
`;

const TotalContainer = styled.div`
  width: calc((100% / 2) - 20px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 7px;
  margin-left: auto;
  padding-top: 30px;
  border-top: 1px solid var(--bg-gray);
`;

const Title = styled.p`
  font-size: var(--fs-lg);
  font-weight: var(--medium);
  line-height: var(--lh-lg);
`;

const CostContainer = styled.div`
  margin-left: auto;
`;

const ValueSign = styled.span`
  font-size: var(--fs-lg);
  font-weight: var(--medium);
  line-height: var(--lh-lg);
`;

const Cost = styled.span`
  font-size: var(--fs-lg);
  font-weight: var(--medium);
  line-height: var(--lh-lg);
`;

const CheckoutButton = styled.button`
  width: 140px;
  display: flex;
  margin-left: auto;
  margin-top: 20px;
  padding: 15px 20px;
  gap: 5px;
  background-color: var(--bg-green);
  box-shadow: 0px 1px 4px rgb(0, 0, 0, 0.25);
  color: var(--white);
  border: none;
  line-height: var(--lh-md);
  font-weight: var(--medium);
  border-radius: 12px;
  cursor: pointer;
`;

function DeliveryCardSection() {
  return (
    <>
      <DeliveryCardSectionStyled>
        <Delivery />
        <Card />
      </DeliveryCardSectionStyled>
      <TotalSection>
        <TotalContainer>
          <Title>Subtotal</Title>
          <CostContainer>
            <ValueSign>$ </ValueSign>
            <Cost>7,178</Cost>
          </CostContainer>
          <Title>Shipping</Title>
          <CostContainer>
            <ValueSign>$ </ValueSign>
            <Cost>20</Cost>
          </CostContainer>
          <Title>Total</Title>
          <CostContainer>
            <ValueSign>$ </ValueSign>
            <Cost>7,208</Cost>
          </CostContainer>
        </TotalContainer>
        <CheckoutButton>
          Checkout
          <img src={arrow2} />
        </CheckoutButton>
      </TotalSection>
    </>
  );
}

export default DeliveryCardSection;
