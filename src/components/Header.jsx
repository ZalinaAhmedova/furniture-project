import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cart from "../images/cart.png";

const HeaderStyled = styled.header`
  width: 100%;
  background-color: var(--bg-green);
  height: 91px;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 1240px;
  display: flex;
`;

const LogoStyled = styled(Link)`
  color: var(--white);
  text-decoration: none;
  font-size: 32px;
  margin-top: 49px;
`;

const Nav = styled.ul`
  margin-top: 60px;
  margin-left: 433px;
  width: 160px;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled(Link)`
  color: var(--white);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: var(--orange);
    text-decoration-thickness: 5px;
    text-underline-offset: 8px;
  }
`;

const CartStyled = styled(Link)`
  color: var(--white);
  text-decoration: none;
  margin-top: 13px;
  margin-left: 438px;
`;

function Header() {
  return (
    <HeaderStyled>
      <HeaderContainer>
        <LogoStyled to="/">Furni.</LogoStyled>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/shop">Shop</NavItem>
        </Nav>
        <CartStyled to="/shoppingcart">
          <img src={cart} alt="Shopping Cart" />
        </CartStyled>
      </HeaderContainer>
    </HeaderStyled>
  );
}

export default Header;
