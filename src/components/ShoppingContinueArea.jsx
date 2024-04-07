import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.png";

const ShoppingContinueContainer = styled.div`
  width: calc(100% - 130px * 2);
  margin: 0 auto;
`;

const ShoppingContinue = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  text-decoration: none;
  font-size: var(--fs-lg);
  line-height: var(--lh-lg);
  font-weight: var(--semi-bold);
  border-bottom: 1.5px solid #d0cfcf;
`;

function ShoppingContinueArea() {
  return (
    <ShoppingContinueContainer>
      <ShoppingContinue to="/shop">
        <img src={arrow} />
        Shopping Continue
      </ShoppingContinue>
    </ShoppingContinueContainer>
  );
}

export default ShoppingContinueArea;
