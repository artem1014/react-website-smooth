import React from 'react'
import { NavItem } from 'reactstrap';
import { FaBars } from 'react-icons/fa'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavLinks, NavLogo, NavMenu } from './NavbarElements'

const Navbar = ({ toggler }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            LOGO
          </NavLogo>
          <MobileIcon onClick={toggler}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'> About </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'> Discover </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'> Services </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'> Sign Up </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='signin'> Sign In </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;

