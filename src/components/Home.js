import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import { FcSportsMode } from 'react-icons/fc';
import styled from 'styled-components';
import StaticChart from './Chart/StaticChart';

const ChartContainer = styled.div`
  display: flex;
  padding: 0 10%;
  gap: 25px;
  div {
    flex: 1 1 40%;
  }
`;

function Home({ history }) {
  const onClick = () => {
    history.push('/chart');
  };
  return (
    <div>
      <h1>Static Data 차트 페이지</h1>
      <Button
        size='large'
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={onClick}
      >
        실험실로 이동 <FcSportsMode />
      </Button>
      <ChartContainer>
        <StaticChart />
      </ChartContainer>
    </div>
  );
}

export default withRouter(Home);
