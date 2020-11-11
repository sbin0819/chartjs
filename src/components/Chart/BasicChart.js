import React, { useState, useCallback } from 'react';
import { Bar } from 'react-chartjs-2';
import { Button } from 'antd';
import { chartStyles, options } from './options';
import { randomNumberFunc, randomNumberArrayFunc } from '../../lib/fakeData';

/* 선택으로 가져올 정보들 
  1. 1d, 1w, 1m, 1y
  2. 특정 기간 선택 ex) 11.1 ~ 11.4 (Date picker)
*/

function BasicChart() {
  const [labels, setLabels] = useState(['acc#1', 'acc#2', 'acc#3']);
  const [datasetsData, setDatasetsData] = useState([10, 22, 33]);
  const [labelNum, setLabelNum] = useState(4);
  // const [datalist, setDataList] = useState([
  //   { date: 1, users: 10 },
  //   { date: 2, users: 12 },
  //   { date: 3, users: 11 },
  // ]); /* 누적 데이터의 각각의 값 예시 (1일 10명 증가 2일 12명증가 3일 11명 증가) 3일 총합 33명 */

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
    window.alert('불가능한 입력입니다.');
    return null;
  }, [labels.length]);
  return (
    <>
      <Bar data={dataOptions} options={options} />
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
