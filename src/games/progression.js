export default function gameProgression() {
  let first = Math.round(Math.random() * 20);
  const randomValue = Math.round(Math.random() * 9);
  const progression = Math.round(Math.random() * 10);
  const result = [];
  let correct;
  let i = 0;
  while (i < 10) {
    if (i === randomValue) {
      result.push('..');
      correct = first;
    } else {
      result.push(String(first));
    }
    first += progression;
    i += 1;
  }

  return [result.join(' '), correct];
}
