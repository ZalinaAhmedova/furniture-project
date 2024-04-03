import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cart from "../images/cart.png";

const HeaderStyled = styled.header`
  width: 100%;
  background-color: #3b5d50;
  height: 91px;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  background-color: #3b5d50;
  width: 1240px;
  display: flex;
`;

const Nav = styled.ul`
  margin-top: 60px;
  margin-left: 433px;
  width: 160px;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <Link
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "400",
            fontSize: "32px",
            marginTop: "49px",
          }}
          to="/"
          className="header-logo logo"
        >
          Furni.
        </Link>
        <Nav>
          <Link
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "400",
            }}
            to="/"
            className="nav-item"
          >
            Home
          </Link>
          <Link
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "400",
            }}
            to="/shop"
            className="nav-item"
          >
            Shop
          </Link>
        </Nav>
        <Link
          style={{
            color: "#fff",
            textDecoration: "none",
            marginTop: "13px",
            marginLeft: "438px",
          }}
          to="/shoppingcart"
          className="shoppingcart-button"
        >
          <img src={cart} alt="Shopping Cart"></img>
        </Link>
      </HeaderContainer>
    </HeaderStyled>
  );
}

export default Header;
