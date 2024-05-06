export default () => {
  const randomNum = Math.round(Math.random() * 100);
  const randomNum2 = Math.round(Math.random() * 100);
  const operation = ['+', '-', '*'];
  const random3 = Math.round(Math.random() * 2);
  let correct;
  const randomoperation = operation[random3];
  if (randomoperation === '+') {
    correct = randomNum + randomNum2;
  } else if (randomoperation === '-') {
    correct = randomNum - randomNum2;
  } else if (randomoperation === '*') {
    correct = randomNum * randomNum2;
  }
  return [`${randomNum} ${randomoperation} ${randomNum2}`, correct];
};
