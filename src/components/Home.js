import React from 'react';
import StaticChart from './Chart/StaticChart';
import styled from 'styled-components';

const ChartContainer = styled.div`
  display: flex;
  padding: 0 10%;
  gap: 25px;
  div {
    flex: 1 1 40%;
  }
`;

function Home() {
  return (
    <div>
      <h1>Static Data 차트 페이지</h1>
      <ChartContainer>
        <StaticChart />
      </ChartContainer>
    </div>
  );
}

export default Home;
