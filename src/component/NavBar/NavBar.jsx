import React from 'react';
import { Link } from 'react-router-dom';
import {
  MainHeader,
  Container,
  MHLogo,
  MHImg,
  MainNav,
  MainNavList,
  MainNavListItem,
  MainNavListItemSpan,
} from './NavBarStyles';

const NavBar = () => (
  <MainHeader>
    <Container>
      <MHLogo>
        <MHImg
          src="https://www.logolynx.com/images/logolynx/d9/d9e8ae4cebb48a11f701436962f76c18.png"
          alt="Logo"
        />
      </MHLogo>
      <MainNav>
        <MainNavList>
          <MainNavListItem>
            <Link to="/" label="Home">
              <MainNavListItemSpan>Home</MainNavListItemSpan>
            </Link>
          </MainNavListItem>
          <MainNavListItem>
            <Link to="/about" label="about">
              <MainNavListItemSpan>About</MainNavListItemSpan>
            </Link>
          </MainNavListItem>
          <MainNavListItem>
            <Link to="/posts" label="about">
              <MainNavListItemSpan>Posts</MainNavListItemSpan>
            </Link>
          </MainNavListItem>
        </MainNavList>
      </MainNav>
    </Container>
  </MainHeader>
);

export default NavBar;
