import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap, SidebarMenu } from './SidebarElements'

const Sidebar = ({isOpen, toggler}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggler}>
      <Icon inClick={toggler}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggler} to='/about'>
            About
          </SidebarLink>
          <SidebarLink onClick={toggler} to='/discover'>
            Discover
          </SidebarLink>
          <SidebarLink onClick={toggler} to='/services'>
            Services
          </SidebarLink>
          <SidebarLink onClick={toggler} to='/signup'>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>
            Sign In
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
