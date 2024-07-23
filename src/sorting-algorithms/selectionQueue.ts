import Queue from "./queue";
import { QueueArray } from "./types";

const selectionQueue = (array: number[]): QueueArray => {
  const currArray = [...array];
  const n = array.length;
  const queue: QueueArray = [];
  for (let i = 0; i < n - 1; i++) {
    let currValIdx = i;
    for (let j = i; j < n; j++) {
      if (currArray[j] < currArray[currValIdx]) {
        currValIdx = j;
      }
      queue.push(
        new Queue([...currArray], [...Array(i).keys()], [j], [currValIdx], [i])
      );
    }
    if (currValIdx !== i) {
      [[currArray[i], currArray[currValIdx]]] = [
        [currArray[currValIdx], currArray[i]],
      ];
    }
  }
  queue.push(new Queue([...currArray], [...Array(n).keys()], [], [], []));
  return queue;
};

export default selectionQueue;
