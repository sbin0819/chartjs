import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-right: 60%;
  background: gold;
  font-size: 2rem;
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
