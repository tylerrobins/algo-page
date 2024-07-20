function generateArr(): number[] {
  const arr = [];
  const length = 375;
  const maxVal = 750;

  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * maxVal) + 1);
  }
  return arr;
}

export { generateArr };
