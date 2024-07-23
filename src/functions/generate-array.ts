export default function generateArr(): number[] {
  const arr = [];
  const length = 67;
  const maxVal = 600;
  const minVal = 100;

  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (maxVal - minVal) + minVal) + 1);
  }
  return arr;
}
