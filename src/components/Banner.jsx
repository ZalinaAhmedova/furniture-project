import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import couch1 from "../images/couch1.png";
import dotted from "../images/dotted.png";

const BannerSection = styled.section`
  width: 100%;
  background-color: var(--bg-green);
  height: 583px;
`;

const BannerContainer = styled.div`
  width: 1240px;
  margin: 0 auto;
  display: flex;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: var(--white);
  font-size: 54px;
  font-weight: var(--semi-bold);
  width: 419px;
  margin-top: 129px;
`;

const ShopButton = styled(Link)`
  margin-top: 117px;
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
  margin-top: 11px;
`;

const Couch1Img = styled.img`
  margin-left: 13px;
  z-index: 1;
  height: 555px;
  margin-top: 25px;
`;

const DottedImg = styled.img`
  position: relative;
  right: 270px;
  margin-top: 106px;
  height: 176px;
  z-index: 0;
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
        <Couch1Img src={couch1} alt="Couch" />
        <DottedImg src={dotted} />
      </BannerContainer>
    </BannerSection>
  );
}

export default Banner;
