import { DispatcherArray } from "./types";
import range from "../functions/arr-range";

const quickSort = (
  arr: number[],
  dispatcher: DispatcherArray,
  low: number,
  high: number
) => {
  if (low < high) {
    const p = partition(arr, dispatcher, low, high);
    quickSort(arr, dispatcher, low, p - 1);
    quickSort(arr, dispatcher, p + 1, high);
  }
};

const partition = (
  arr: number[],
  dispatcher: DispatcherArray,
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
    dispatcher.push([[...arr], range(low, high), [high], red, green]);
  }
  [arr[i], arr[high]] = [arr[high], arr[i]];
  dispatcher.push([[...arr], range(low, high), [], [i], []]);
  return i;
};

const quickDispatcher = (arr: number[]): DispatcherArray => {
  const dispatcher: DispatcherArray = [];
  quickSort(arr, dispatcher, 0, arr.length - 1);
  dispatcher.push([[...arr], range(0, arr.length), [], [], []]);
  return dispatcher;
};

export default quickDispatcher;
