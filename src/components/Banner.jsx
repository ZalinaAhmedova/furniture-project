import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import couch1 from "../images/couch1.png";
import dotted from "../images/dotted.png";

const BannerSection = styled.section`
  width: 100%;
  background-color: #3b5d50;
  height: 583px;
`;

const BannerContainer = styled.div`
  background-color: #3b5d50;
  width: 1240px;
  margin: 0 auto;
  display: flex;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 54px;
  font-weight: 600;
  width: 419px;
  margin-top: 129px;
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

const ButtonStyled = styled.p`
  color: #2f2f2f;
  font-weight: 500;
  line-height: 28px;
  width: 79px;
  margin-left: 36px;
  margin-top: 11px;
`;

function Banner() {
  return (
    <BannerSection>
      <BannerContainer>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Title className="banner-title">Modern Interior Design Studio</Title>
          <Link
            style={{
              marginTop: "117px",
              textDecoration: "none",
              width: "150px",
              height: "50px",
              borderRadius: "30px",
              backgroundColor: "#f9bf29",
            }}
            to="/shop"
            className="banner-button"
          >
            <ButtonStyled>Shop Now</ButtonStyled>
          </Link>
        </div>
        <Couch1Img src={couch1} alt="Couch"></Couch1Img>
        <DottedImg src={dotted}></DottedImg>
      </BannerContainer>
    </BannerSection>
  );
}

export default Banner;
