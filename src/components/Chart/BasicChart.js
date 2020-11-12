import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Button } from 'antd';

function BasicChart({ dataOptions, options, removeDataFunc, addDataFunc }) {
  return (
    <>
      <div style={{ width: '800px' }}>
        <Bar data={dataOptions} options={options} />
      </div>
      <div>
        <Button size='large' onClick={addDataFunc}>
          누적 데이터 추가
        </Button>
        <Button size='large' onClick={removeDataFunc}>
          누적 데이터 제거
        </Button>
      </div>
    </>
  );
}

export default BasicChart;
