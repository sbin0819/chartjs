import React from 'react';
import { Bar } from 'react-chartjs-2';

function StaticChart() {
  return <Bar data={data} options={options} />;
}

export default StaticChart;

/* 차트에 필요한 데이터 */
const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ] /* 라벨 이름 */,
  datasets: [
    {
      label: '서비스 유저 수',
      data: [65, 59, 80, 81, 56, 55, 40] /* 라벨에 데이터가 들어가는 부분 */,
      /* 아래 스타일 옵션 시작 */
      fill: false,
      lineTension: 0.1,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      /* 아래 스타일 옵션 종료 */
    },
  ],
};

/* 차트 관련 세부 옵션 지금은 크게 유의미한 설정이 아님 */
const options = {
  title: {
    display: true,
    text: '유저 차트 예시',
    fontSize: 20,
  } /* chart 타이틀 옵션 */,
  legend: {
    display: true,
    position: 'top',
  } /* chart main 라벨 옵션 */,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
