import { DispatcherArray } from "./types";
import range from "../functions/arr-range";

const bubbleDispatcher = (arr: number[]): DispatcherArray => {
  const currArr = [...arr];
  const n = currArr.length;
  const dispatcher: DispatcherArray = [];

  let i: number, j: number, swapped: boolean;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      const nextIdx = j + 1;
      if (currArr[j] > currArr[nextIdx]) {
        [[currArr[j], currArr[nextIdx]]] = [[currArr[nextIdx], currArr[j]]];
        swapped = true;
        dispatcher.push([
          [...currArr],
          range(n - i, n - 1),
          [],
          [j],
          [nextIdx],
        ]);
      } else {
        dispatcher.push([
          [...currArr],
          range(n - i, n - 1),
          [nextIdx],
          [],
          [j],
        ]);
      }
    }
    if (!swapped) {
      break;
    }
  }
  dispatcher.push([[...currArr], range(0, n), [], [], []]);
  return dispatcher;
};

export default bubbleDispatcher;
