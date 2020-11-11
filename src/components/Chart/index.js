import React from 'react';
import BasicChart from './BasicChart';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function Chart() {
  return (
    <>
      <h1>차트 예시</h1>
      <Container>
        <BasicChart />
        <BasicChart />
      </Container>
    </>
  );
}

export default Chart;
