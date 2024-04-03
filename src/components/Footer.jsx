import React from "react";
import styled from "styled-components";
import emailIcon from "../images/email_icon.svg";
import sendRectangle from "../images/send_rectangle.svg";
import paperPlane from "../images/paper_plane.svg";
import sofa1 from "../images/sofa1.png";
import ellipse1 from "../images/ellipse1.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import linkedIn from "../images/linked-in.svg";

const SubscriptionArea = styled.div`
  width: 1166px;
  display: flex;
  margin: 0 auto;
`;

const InputStyled = styled.input`
  width: 262px;
  height: 45px;
  border-radius: 10px;
  font-size: 14px;
  padding-left: 22px;
  margin-right: 15px;
`;

const FooterStyled = styled.div`
  width: 1166px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const FooterList = styled.ul`
  text-decoration: none;
  line-height: 28px;
  font-size: 14px;

  &li {
    list-style-type: none;
  }
`;

function Footer() {
  return (
    <footer>
      <SubscriptionArea>
        <form
          style={{
            marginTop: "94px",
          }}
          action=""
          className="subscribe-form"
        >
          <label style={{ display: "flex" }}>
            <img
              style={{ height: "25px", width: "22px" }}
              src={emailIcon}
              alt="E-mail icon"
            ></img>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "500",
                marginLeft: "12px",
                marginTop: "3px",
              }}
            >
              Subscribe to Newsletter
            </p>
          </label>
          <div style={{ display: "flex", marginTop: "22px" }}>
            <InputStyled type="text" placeholder="Enter your name" />
            <InputStyled type="email" placeholder="Enter your e-mail" />
            <a
              style={{ width: "50px", heigth: "48px", textDecoration: "none" }}
              href="#"
            >
              <img src={sendRectangle} alt="Send e-mail icon"></img>
              <img
                style={{ position: "relative", bottom: "43px", left: "9px" }}
                src={paperPlane}
                alt="Send e-mail icon"
              ></img>
            </a>
          </div>
        </form>
        <img
          style={{ position: "relative", left: "104px", bottom: "85px" }}
          src={sofa1}
          alt="Sofa1"
        ></img>
      </SubscriptionArea>
      <FooterStyled>
        <h2
          style={{ fontSize: "32px", fontWeight: "600", marginBottom: "19px" }}
          className="footer-title"
        >
          Furni.
        </h2>
        <div style={{ display: "flex" }} className="footer-info">
          <p
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              width: "360px",
              marginRight: "65px",
            }}
          >
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "583px",
            }}
            className="footer-nav"
          >
            <FooterList>
              <Footer className="footer-nav-list-item">About us</Footer>
              <li className="footer-nav-list-item">Services</li>
              <li className="footer-nav-list-item">Blog</li>
              <li className="footer-nav-list-item">Contact us</li>
            </FooterList>
            <FooterList>
              <li className="footer-nav-list-item">Support</li>
              <li className="footer-nav-list-item">Knowledge base</li>
              <li className="footer-nav-list-item">Live chat</li>
            </FooterList>
            <FooterList>
              <li className="footer-nav-list-item">Jobs</li>
              <li className="footer-nav-list-item">Our team</li>
              <li className="footer-nav-list-item">Leadership</li>
              <li className="footer-nav-list-item">Privacy Policy</li>
            </FooterList>
            <FooterList>
              <li className="footer-nav-list-item">Nordic Chair</li>
              <li className="footer-nav-list-item">Kruzo Aero</li>
              <li className="footer-nav-list-item">Ergonomic</li>
            </FooterList>
          </div>
        </div>
        <div className="footer-social-media">
          <a href="#">
            <img src={ellipse1} />
            <img src={facebook} />
          </a>
          <a href="#">
            <img src={ellipse1} />
            <img src={instagram} />
          </a>
          <a href="#">
            <img src={ellipse1} />
            <img src={twitter} />
          </a>
          <a href="#">
            <img src={ellipse1} />
            <img src={linkedIn} />
          </a>
        </div>
        <div className="footer-copyright">
          <p>Copyright 2022 degraft87@gmail.com. All Rights Reserved.</p>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </FooterStyled>
    </footer>
  );
}

export default Footer;
