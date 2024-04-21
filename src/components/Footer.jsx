import React from "react";
import styled from "styled-components";
import { FOOTER_NAV_ITEMS, SOCIAL_ICONS } from "../data/footerData";
import emailIcon from "../images/email_icon.svg";
import sendRectangle from "../images/send_rectangle.svg";
import paperPlane from "../images/paper_plane.svg";
import sofa1 from "../images/sofa1.png";
import ellipse1 from "../images/ellipse1.svg";

const SubscriptionWrapper = styled.div`
  width: calc(100% - 130px * 2);
  display: flex;
  gap: 104px;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 165px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
`;

const EmailIcon = styled.img`
  height: 25px;
  width: 22px;
`;

const LabelText = styled.p`
  font-size: var(--fs-lg);
  font-weight: var(--medium);
  margin-left: 12px;
  margin-top: 3px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 22px;
`;

const InputStyled = styled.input`
  width: 262px;
  height: 45px;
  border-radius: 10px;
  font-size: var(--fs-sm);
  padding-left: 22px;
  margin-right: 15px;
`;

const SendEmailLink = styled.a`
  width: 50px;
  height: 48px;
  text-decoration: none;
`;

const PaperPlaneImg = styled.img`
  position: relative;
  bottom: 43px;
  left: 9px;
`;

const SofaImg = styled.img`
  position: relative;
  bottom: 85px;
`;

const FooterStyled = styled.div`
  width: calc(100% - 130px * 2);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h2`
  font-size: var(--fs-xl);
  font-weight: var(--semi-bold);
  margin-bottom: 19px;
`;

const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 43px;
  min-width: 1080px;
`;

const FooterInfoText = styled.p`
  font-size: var(--fs-sm);
  line-height: var(--lh-md);
  min-width: 360px;
  margin-right: 65px;
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 70px;
  min-width: 583px;
`;

const FooterList = styled.ul`
  line-height: var(--lh-lg);
`;

const FooterListItem = styled.a`
  text-decoration: none;
  font-size: var(--fs-sm);
`;

const FooterSocialMedia = styled.div`
  margin-bottom: 68px;
`;

const FooterCopyright = styled.div`
  min-width: 1140px;
  margin-bottom: 93px;
  display: flex;
  justify-content: space-between;
`;

const SocialIcon = styled.img`
  position: relative;
  width: 17px;
  height: 17px;
  right: 28px;
  bottom: 12px;
`;

const Copyright = styled.p`
  font-size: var(--fs-sm);
  line-height: var(--lh-md);
`;

const TermsAndConditions = styled.a`
  margin-right: 42px;
  font-size: var(--fs-sm);
  line-height: var(--lh-md);
`;

const PrivacyPolicy = styled.a`
  font-size: var(--fs-sm);
  line-height: var(--lh-md);
`;

function Footer() {
  return (
    <footer>
      <SubscriptionWrapper>
        <Form action="">
          <Label>
            <EmailIcon src={emailIcon} alt="E-mail icon" />
            <LabelText>Subscribe to Newsletter</LabelText>
          </Label>
          <InputContainer>
            <InputStyled type="text" placeholder="Enter your name" />
            <InputStyled type="email" placeholder="Enter your e-mail" />
            <SendEmailLink href="#">
              <img src={sendRectangle} alt="Send e-mail icon" />
              <PaperPlaneImg src={paperPlane} alt="Send e-mail icon" />
            </SendEmailLink>
          </InputContainer>
        </Form>
        <SofaImg src={sofa1} alt="Sofa1" />
      </SubscriptionWrapper>
      <FooterStyled>
        <FooterTitle>Furni.</FooterTitle>
        <FooterInfo>
          <FooterInfoText>
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is
          </FooterInfoText>
          <FooterNav>
            {FOOTER_NAV_ITEMS.map((list, index) => (
              <FooterList key={index}>
                {list.map((item) => (
                  <li key={item.id_}>
                    <FooterListItem href={item.itemSrc}>
                      {item.title}
                    </FooterListItem>
                  </li>
                ))}
              </FooterList>
            ))}
          </FooterNav>
        </FooterInfo>
        <FooterSocialMedia>
          {SOCIAL_ICONS.map((icon) => (
            <a href="#" key={icon.id_}>
              <img src={ellipse1} />
              <SocialIcon src={icon.imgSrc} />
            </a>
          ))}
        </FooterSocialMedia>
        <FooterCopyright>
          <Copyright>
            Copyright 2022 degraft87@gmail.com. All Rights Reserved.
          </Copyright>
          <TermsAndConditions href="#">Terms & Conditions</TermsAndConditions>
          <PrivacyPolicy href="#">Privacy Policy</PrivacyPolicy>
        </FooterCopyright>
      </FooterStyled>
    </footer>
  );
}

export default Footer;
