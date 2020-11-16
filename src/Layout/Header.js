import React from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background: gold;
  a {
    margin-left: 25px;
    font-size: 2rem;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/chart'>Chart</Link>
        <Link to='/about'>About</Link>
      </div>
      <div>
        <label style={{ margin: '0 20px 0 50px' }}>dark mode</label>
        <Switch />
      </div>
    </HeaderContainer>
  );
}

export default Header;
