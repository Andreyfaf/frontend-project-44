export default () => {
  const randomNum = Math.round(Math.random() * 100);
  const randomNum2 = Math.round(Math.random() * 100);
  function NOD(x, y) {
    if (y > x) return NOD(y, x);
    if (!y) return x;
    return NOD(y, x % y);
  }
  const answer = NOD(randomNum, randomNum2);
  return [`${randomNum} ${randomNum2}`, answer];
};
