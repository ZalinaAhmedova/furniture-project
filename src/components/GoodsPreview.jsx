import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";

const GoodsPreviewSection = styled.section`
  width: 100%;
  height: 663px;
  background-color: var(--bg-gray);
`;

const GoodsPreviewContainer = styled.div`
  width: 1081px;
  height: 663px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GoodsPreviewInfo = styled.div`
  width: 228px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: var(--fs-lg);
  font-weight: bold;
  margin-bottom: 27px;
`;

const Info = styled.p`
  font-size: var(--fs-sm);
  line-height: var(--lh-md);
  color: var(--gray);
  margin-bottom: 33px;
`;

const ExploreButton = styled(Link)`
  text-decoration: none;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  background-color: var(--dark);
`;

const ButtonText = styled.p`
  line-height: var(--lh-lg);
  margin-left: 45px;
  margin-top: 11px;
  color: var(--white);
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.p`
  line-height:var(--lh-md);
  font-weight: bold;
  margin-top: 44px;
  text-align: center;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  line-height: var(--lh-md);
  font-weight: var(--semi-bold);
  margin-top: 1px;
  text-align: center;
`;

function GoodsPreview() {
  return (
    <GoodsPreviewSection>
      <GoodsPreviewContainer>
        <GoodsPreviewInfo>
          <Title>Crafted with excellent material.</Title>
          <Info>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done.
          </Info>
          <ExploreButton to="/shop">
            <ButtonText>Explore</ButtonText>
          </ExploreButton>
        </GoodsPreviewInfo>
        <Product>
          <img height="261px" src={product1}></img>
          <ProductName>Nordic Chair</ProductName>
          <ProductPrice>$50.00</ProductPrice>
        </Product>
        <Product>
          <img height="261px" src={product2}></img>
          <ProductName>Kruzo Aero Chair</ProductName>
          <ProductPrice>$78.00</ProductPrice>
        </Product>
        <Product>
          <img height="261px" src={product3}></img>
          <ProductName>Ergonomic Chair</ProductName>
          <ProductPrice>$43.00</ProductPrice>
        </Product>
      </GoodsPreviewContainer>
    </GoodsPreviewSection>
  );
}

export default GoodsPreview;
