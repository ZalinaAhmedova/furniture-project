import React from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { FOOTER_NAV_ITEMS, SOCIAL_ICONS } from "../data/footerData";
import emailIcon from "../images/email_icon.svg";
import sendRectangle from "../images/send_rectangle.svg";
import paperPlane from "../images/paper_plane.svg";
import sofa1 from "../images/sofa1.png";

const footerId = uuid(); //не генерирует уникальные id

const SubscriptionArea = styled.div`
  width: 1166px;
  display: flex;
  margin: 0 auto;
`;

const Form = styled.form`
  margin-top: 94px;
`;

const Label = styled.label`
  display: flex;
`;

const EmailIcon = styled.img`
  height: 25px;
  width: 22px;
`;

const LabelText = styled.p`
  font-size: 18px;
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
  left: 104px;
  bottom: 85px;
`;

const FooterStyled = styled.div`
  width: 1166px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h2`
  font-size: 32px;
  font-weight: var(--semi-bold);
  margin-bottom: 19px;
`;

const FooterInfo = styled.div`
  display: flex;
  margin-bottom: 43px;
`;

const FooterInfoText = styled.p`
  font-size: var(--fs-sm);
  line-height: var(--lh-md);
  width: 360px;
  margin-right: 65px;
`;

const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 583px;
`;

const FooterList = styled.ul`
  list-style-type: none;
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
  margin-bottom: 93px;
  display: flex;
`;

const SocialIcon = styled.img`
  position: relative;
  width: 17px;
  height: 17px;
  right: 28px;
  bottom: 12px;
`;

const Copyright = styled.p`
  margin-right: 512px;
  font-size: 13px;
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
      <SubscriptionArea>
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
              <PaperPlaneImg
                src={paperPlane}
                alt="Send e-mail icon"
              ></PaperPlaneImg>
            </SendEmailLink>
          </InputContainer>
        </Form>
        <SofaImg src={sofa1} alt="Sofa1" />
      </SubscriptionArea>
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
            {FOOTER_NAV_ITEMS.map((list) => (
              <FooterList key={footerId}>
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
          {
            SOCIAL_ICONS.map(icon => (
              <a href="#" key={icon.id_}>
                <img src={icon.ellipseImg} />
                <SocialIcon src={icon.imgSrc} />
              </a>
            ))
          }
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
