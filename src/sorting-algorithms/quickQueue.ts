import type { QueueArray } from "./types";
import Queue from "./queue";
import range from "../functions/arr-range";

const quickSort = (
  arr: number[],
  queue: QueueArray,
  low: number,
  high: number
) => {
  if (low < high) {
    const p = partition(arr, queue, low, high);
    quickSort(arr, queue, low, p - 1);
    quickSort(arr, queue, p + 1, high);
  }
};

const partition = (
  arr: number[],
  queue: QueueArray,
  low: number,
  high: number
) => {
  const pivot = arr[high];
  let i = low;
  for (let j = low; j < high; j++) {
    let red: number[];
    let green: number[];
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      red = [i];
      green = [j];
      i++;
    } else {
      red = [i, j];
      green = [];
    }
    queue.push(new Queue([...arr], range(low, high), red, green, [high]));
  }
  [arr[i], arr[high]] = [arr[high], arr[i]];
  queue.push(new Queue([...arr], range(low, high), [], [i], []));
  return i;
};

const quickQueue = (arr: number[]): QueueArray => {
  const queue: QueueArray = [];
  quickSort(arr, queue, 0, arr.length - 1);
  queue.push(new Queue([...arr], range(0, arr.length), [], [], []));
  return queue;
};

export default quickQueue;
