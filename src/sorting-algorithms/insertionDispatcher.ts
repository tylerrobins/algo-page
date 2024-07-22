import Dispatch from "./dispatch";
import { DispatcherArray } from "./types";

function insertionDispatcher(array: number[]): DispatcherArray {
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
      dispatcher.push(
        new Dispatch(
          [...currArray],
          j >= 0 ? [...Array(j + 1).keys()] : [],
          [j + 1],
          [],
          [i]
        )
      );
    }
    dispatcher.push(
      new Dispatch(
        [...currArray],
        j >= 0 ? [...Array(j + 1).keys()] : [],
        [],
        [j + 1],
        [i]
      )
    );
    currArray[j + 1] = key;
  }
  dispatcher.push(
    new Dispatch([...currArray], [...Array(n).keys()], [], [], [])
  );
  return dispatcher;
}

export default insertionDispatcher;
