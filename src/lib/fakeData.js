export const randomNumberFunc = () => {
  const min = 5,
    max = 35;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return randomNumber;
};

export const randomNumberArrayFunc = (n) => {
  const min = 5,
    max = 35,
    dataList = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    dataList.push(randomNumber);
  }
  return dataList;
};
