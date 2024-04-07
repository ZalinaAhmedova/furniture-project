import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cart from "../images/cart.png";

const HeaderStyled = styled.header`
  width: 100%;
  background-color: var(--bg-green);
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: calc(100% - 130px * 2);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LogoStyled = styled(Link)`
  margin: 25px 0;
  color: var(--white);
  text-decoration: none;
  font-size: var(--fs-xl);
`;

const Nav = styled.ul`
  width: 160px;
  margin: 35px 0;
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
  margin: 30px 0;
  color: var(--white);
  text-decoration: none;
`;

const CartImg = styled.img`
  display: block;
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
          <CartImg width="24px" height="27px" src={cart} alt="Shopping Cart" />
        </CartStyled>
      </HeaderContainer>
    </HeaderStyled>
  );
}

export default Header;
