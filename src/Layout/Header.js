import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding-right: 40%;
  background: gold;
  font-size: 2rem;
  a {
    margin-left: 35px;
  }
`;
function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>Home</Link>
      <Link to='/chart'>Chart</Link>
      <Link to='/about'>About</Link>
    </HeaderContainer>
  );
}

export default Header;
