import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import couch1 from "../images/couch1.png";

const BannerSection = styled.section`
  width: 100%;
  background-color: var(--bg-green);
`;

const BannerContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoContainer = styled.div`
  margin-left: 130px;
  width: 419px;
  display: flex;
  flex-direction: column;
  gap: 117px;
  
`;

const Title = styled.h1`
  color: var(--white);
  font-size: 54px;
  font-weight: var(--semi-bold);
`;

const ShopButton = styled(Link)`
  text-decoration: none;
  width: 150px;
  height: 50px;
  border-radius: 30px;
  background-color: var(--orange);
`;

const ButtonText = styled.p`
  color: var(--dark);
  font-weight: var(--medium);
  line-height: var(--lh-lg);
  margin-left: 36px;
  margin-top: 10px;
`;

function Banner() {
  return (
    <BannerSection>
      <BannerContainer>
        <InfoContainer>
          <Title>Modern Interior Design Studio</Title>
          <ShopButton to="/shop">
            <ButtonText>Shop Now</ButtonText>
          </ShopButton>
        </InfoContainer>
        <img height="550px" src={couch1} alt="Couch" />
      </BannerContainer>
    </BannerSection>
  );
}

export default Banner;
