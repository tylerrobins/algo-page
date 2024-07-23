import type { QueueArray } from "./types";
import Queue from "./queue";

function insertionQueue(array: number[]): QueueArray {
  const currArray = [...array];
  const n = currArray.length;
  const queue: QueueArray = [];

  let i, key, j;
  for (i = 1; i < n; i++) {
    key = currArray[i];
    j = i - 1;
    while (j >= 0 && currArray[j] > key) {
      currArray[j + 1] = currArray[j];
      j = j - 1;
      queue.push(
        new Queue(
          [...currArray],
          j >= 0 ? [...Array(j + 1).keys()] : [],
          [j + 1],
          [],
          [i]
        )
      );
    }
    queue.push(
      new Queue(
        [...currArray],
        j >= 0 ? [...Array(j + 1).keys()] : [],
        [],
        [j + 1],
        [i]
      )
    );
    currArray[j + 1] = key;
  }
  queue.push(new Queue([...currArray], [...Array(n).keys()], [], [], []));
  return queue;
}

export default insertionQueue;
