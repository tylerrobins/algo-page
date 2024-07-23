import type { QueueArray } from "./types";
import range from "../functions/arr-range";
import Queue from "./queue";

const bubbleQueue = (arr: number[]): QueueArray => {
  const currArr = [...arr];
  const n = currArr.length;
  const queue: QueueArray = [];

  let i: number, j: number, swapped: boolean;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      const nextIdx = j + 1;
      if (currArr[j] > currArr[nextIdx]) {
        [[currArr[j], currArr[nextIdx]]] = [[currArr[nextIdx], currArr[j]]];
        swapped = true;
        queue.push(
          new Queue([...currArr], range(n - i, n - 1), [j], [nextIdx], [])
        );
      } else {
        new Queue([...currArr], range(n - i, n - 1), [nextIdx], [j], []);
      }
    }
    if (!swapped) {
      break;
    }
  }
  queue.push(new Queue([...currArr], range(0, n)));
  return queue;
};

export default bubbleQueue;
