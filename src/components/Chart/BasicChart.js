import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Button } from 'antd';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-top: 20px;
  button {
    margin-right: 10px;
  }
`;

function BasicChart({
  dataOptions,
  options,
  removeDataFunc,
  addDataFunc,
  isBar,
  onChangeChart,
}) {
  return (
    <>
      <div style={{ width: '800px' }}>
        {isBar ? (
          <Bar data={dataOptions} options={options} />
        ) : (
          <Pie data={dataOptions} options={options} />
        )}
      </div>
      <ButtonContainer>
        <Button size='large' onClick={addDataFunc}>
          누적 데이터 추가
        </Button>
        <Button size='large' onClick={removeDataFunc}>
          누적 데이터 제거
        </Button>
        <Button size='large' onClick={onChangeChart}>
          {isBar ? '파이 차트' : '바 차트'}로 변경
        </Button>
      </ButtonContainer>
    </>
  );
}

export default BasicChart;
