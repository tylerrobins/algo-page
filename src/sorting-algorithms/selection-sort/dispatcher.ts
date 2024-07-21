type DispatcherArray = Array<[number[], number[], number, number, number]>;

const dispatcher = (array: number[]) => {
  const currArray = [...array];
  const n = array.length;
  const dispatcher: DispatcherArray = [];
  for (let i = 0; i < n - 1; i++) {
    let currValIdx = i;
    for (let j = i; j < n; j++) {
      if (currArray[j] < currArray[currValIdx]) {
        currValIdx = j;
      }
      dispatcher.push([[...currArray], [...Array(i).keys()], i, j, currValIdx]);
    }
    if (currValIdx !== i) {
      [[currArray[i], currArray[currValIdx]]] = [
        [currArray[currValIdx], currArray[i]],
      ];
    }
  }
  dispatcher.push([[...currArray], [...Array(n).keys()], -1, -1, -1]);
  return dispatcher;
};

export default dispatcher;
