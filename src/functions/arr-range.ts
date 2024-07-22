export default function range(min: number, max: number): number[] {
  const len = max - min + 1;
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = min + i;
  }
  return arr;
}
