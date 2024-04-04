import React from "react";
import styled from "styled-components";
import dotted from "../images/dotted2.png";
import previewImg from "../images/why-choose-us-img1.png";
import ellipse2 from "../images/ellipse2.svg";
import truck from "../images/truck.svg";
import shopBag from "../images/shop_bag.svg";
import support from "../images/support.svg";
import returnImg from "../images/return.svg";

const AdvantagesSection = styled.section`
  width: 100%;
  height: 870px;
  background-color: var(--bg-gray);
`;

const AdvantagesContainer = styled.div`
  margin: 0 auto;
  width: 1133px;
  height: 713px;
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4px;
`;

const Title = styled.h2`
  font-size: var(--fs-lg);
  line-height: 41px;
  font-weight: var(--semi-bold);
  margin-bottom: 27px;
`;

const InfoText = styled.p`
  width: 444px;
  font-size: var(--fs-sm);
  line-height: var(--lh-md);
  margin-bottom: 83px;
`;

const AdvantagesList = styled.div`
  display: grid;
  grid-template-columns: 247px 247px;
  grid-template-rows: 146px 146px;
  grid-column-gap: 46px;
  grid-row-gap: 26px;
`;

const AdvantagesItem = styled.div``;

const ItemTitle = styled.p`
  font-size: var(--fs-sm);
  line-height: var(--lh-sm);
  font-weight: var(--semi-bold);
  margin-top: 3px;
`;

const ItemText = styled.p`
  font-size: var(--fs-sm);
  line-height: var(--lh-sm);
  margin-top: 9px;
`;

const IconImg = styled.img`
  z-index: 1;
`;

const EllipseImg = styled.img`
  z-index: 0;
  position: relative;
  right: 15px;
`;

const Dotted = styled.img`
  position: absolute;
  z-index: 2;
`;

const PreviewImg = styled.img`
  position: relative;
  top: 53px;
  left: 77px;
  z-index: 3;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
`;

function Advantages() {
  return (
    <AdvantagesSection>
      <AdvantagesContainer>
        <Info>
          <Title>Why Choose Us</Title>
          <InfoText>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the
          </InfoText>
          <AdvantagesList>
            <AdvantagesItem>
              <IconImg src={truck}></IconImg>
              <EllipseImg src={ellipse2}></EllipseImg>
              <ItemTitle>Fast & Free Shipping</ItemTitle>
              <ItemText>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </ItemText>
            </AdvantagesItem>
            <AdvantagesItem>
              <IconImg src={shopBag}></IconImg>
              <EllipseImg src={ellipse2}></EllipseImg>
              <ItemTitle>Easy to Shop</ItemTitle>
              <ItemText>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </ItemText>
            </AdvantagesItem>
            <AdvantagesItem>
              <IconImg src={support}></IconImg>
              <EllipseImg src={ellipse2}></EllipseImg>
              <ItemTitle>24/7 Support</ItemTitle>
              <ItemText>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </ItemText>
            </AdvantagesItem>
            <AdvantagesItem>
              <IconImg src={returnImg}></IconImg>
              <EllipseImg src={ellipse2}></EllipseImg>
              <ItemTitle>Hassle Free Returns</ItemTitle>
              <ItemText>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was
              </ItemText>
            </AdvantagesItem>
          </AdvantagesList>
        </Info>
        <div>
          <Dotted src={dotted} height="176px"></Dotted>
          <PreviewImg src={previewImg} height="630px"></PreviewImg>
        </div>
      </AdvantagesContainer>
    </AdvantagesSection>
  );
}

export default Advantages;
