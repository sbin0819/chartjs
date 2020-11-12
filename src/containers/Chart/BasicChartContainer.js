import React, { useState, useCallback } from 'react';
import { options, chartStyles } from './options';
import { randomNumberFunc } from '../../lib/fakeData';
import { message } from 'antd';
import BasicChart from '../../components/Chart/BasicChart';

/* 선택으로 가져올 정보들 
  1. 1d, 1w, 1m, 1y
  2. 특정 기간 선택 ex) 11.1 ~ 11.4 (Date picker)
*/

export default function BasicChartContainer() {
  const [labels, setLabels] = useState(['acc#1', 'acc#2', 'acc#3']);
  const [datasetsData, setDatasetsData] = useState([10, 22, 33]);
  const [labelNum, setLabelNum] = useState(4);

  const dataOptions = {
    labels: labels /* 라벨 이름 */,
    datasets: [
      {
        label: '서비스 유저 수',
        data: datasetsData /* 라벨에 데이터가 들어가는 부분 */,
        /* 스타일 */
        ...chartStyles,
      },
    ],
  };

  const addDataFunc = useCallback(() => {
    const randomNumber = randomNumberFunc();
    const newLabel = `acc#${labelNum}`;
    const sum = datasetsData[datasetsData.length - 1] + randomNumber;
    setLabelNum((state) => state + 1);
    setLabels((state) => [...state, newLabel]);
    setDatasetsData((state) => [...state, sum]);
  }, [datasetsData, labelNum]);

  const removeDataFunc = useCallback(() => {
    if (labels.length - 1 > 0) {
      const lengthMinusOne = labels.length - 1; // labels, datasetsData에서 마지막 값을 제거
      setLabels((state) => state.slice(0, lengthMinusOne));
      setDatasetsData((state) => state.slice(0, lengthMinusOne));
      setLabelNum((state) => state - 1);
      return null;
    }
    message.error('불가능한 입력입니다.');
    return null;
  }, [labels.length]);

  return (
    <BasicChart
      dataOptions={dataOptions}
      options={options}
      addDataFunc={addDataFunc}
      removeDataFunc={removeDataFunc}
    />
  );
}
