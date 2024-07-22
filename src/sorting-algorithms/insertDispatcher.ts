import { DispatcherArray } from "./types";

function insertDispatcher(array: number[]): DispatcherArray {
  const currArray = [...array];
  const n = currArray.length;
  const dispatcher: DispatcherArray = [];

  let i, key, j;
  for (i = 1; i < n; i++) {
    key = currArray[i];
    j = i - 1;
    while (j >= 0 && currArray[j] > key) {
      currArray[j + 1] = currArray[j];
      j = j - 1;
      dispatcher.push([
        [...currArray],
        j >= 0 ? [...Array(j).keys()] : [],
        [i],
        [j],
        [j - 1],
      ]);
    }
    currArray[j + 1] = key;
  }
  dispatcher.push([[...currArray], [...Array(n).keys()], [], [], []]);
  return dispatcher;
}

export default insertDispatcher;
