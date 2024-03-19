export default () => {
    const randomNum = Math.round(Math.random() * 100);
    const answer = randomNum % 2 === 0;
    return [randomNum, answer];
};