import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from './Nav'
import styled from 'styled-components'


const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
            <h4 className='logo'>Hugs for Bugs</h4>
        </NavLink>
        <Nav/>
    </MainHeader>
  )
}

const MainHeader =styled.header`
padding:0 4.8rem;
height:10rem;
display:flex;
justify-content:space-between;
align-items:center;
background-color:${({theme})=>theme.colors.bg};

.logo{
  font-family: 'Rampart One', cursive;
  font-size:2rem;
  height:auto;
  color:#fff;
  display:inline-block;
 background-color:#000;
 
  text-transform:uppercase;
}
`;

export default Header