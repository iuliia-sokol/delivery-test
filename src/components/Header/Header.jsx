// import { useEffect } from "react";
import logo from '../../images/logo.png';
import { ThemeToggler } from "components/ThemeToggler/ThemeToggler";
import { Header, HeaderWrapper,LogoText, LogoWrapper, NavLinkStyled, NavLinksWrapper, StyledLink } from "./Header.styled";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";


export const HeaderComp = () => {
    const { pathname } = useLocation();
    const [active, setActive] = useState('home');

    useEffect(() => {
        if (pathname.includes('/cart')) {
          setActive('cart');
        } else if (pathname.includes('/history')) {
          setActive('history');
        }
        else if (pathname.includes('/coupons')) {
          setActive('coupons');
        }
         else {
          setActive('home');
        }
      }, [pathname]);


    return (
          <Header>
              <HeaderWrapper>
                <LogoWrapper>
                  <NavLinkStyled to="/">
                    <img src={logo} alt="logo" />
                    <LogoText>GoodFood</LogoText>
                  </NavLinkStyled>
                </LogoWrapper>
                <NavLinksWrapper>
                <StyledLink to="/" selection={(active === 'home').toString()}>
                    Home
                </StyledLink>
                <StyledLink to="/cart" selection={(active === 'cart').toString()}>
                    Cart
                </StyledLink>
                <StyledLink to="/history" selection={(active === 'history').toString()}>
                    History
                </StyledLink>
                <StyledLink to="/coupons" selection={(active === 'coupons').toString()}>
                Coupons
                </StyledLink>
                </NavLinksWrapper>
                <ThemeToggler />
              </HeaderWrapper>
          </Header>
    );
  };