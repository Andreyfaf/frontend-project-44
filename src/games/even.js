export default () => {
  const randomNum = Math.round(Math.random() * 100);
  const answer = (randomNum % 2 === 0) ? 'yes' : 'no';
  return [randomNum, answer];
};
