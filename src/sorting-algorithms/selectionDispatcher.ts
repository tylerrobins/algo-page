import { DispatcherArray } from "./types";

const selectionDispatcher = (array: number[]): DispatcherArray => {
  const currArray = [...array];
  const n = array.length;
  const dispatcher: DispatcherArray = [];
  for (let i = 0; i < n - 1; i++) {
    let currValIdx = i;
    for (let j = i; j < n; j++) {
      if (currArray[j] < currArray[currValIdx]) {
        currValIdx = j;
      }
      dispatcher.push([
        [...currArray],
        [...Array(i).keys()],
        [i],
        [j],
        [currValIdx],
      ]);
    }
    if (currValIdx !== i) {
      [[currArray[i], currArray[currValIdx]]] = [
        [currArray[currValIdx], currArray[i]],
      ];
    }
  }
  dispatcher.push([[...currArray], [...Array(n).keys()], [], [], []]);
  return dispatcher;
};

export default selectionDispatcher;
