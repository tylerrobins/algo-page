import { DispatcherArray } from "./types";
import range from "../functions/arr-range";

class Indexes {
  lowerBound: number;
  upperBound: number;
  middle: number;

  constructor(lowerBound: number, upperBound: number) {
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
    this.middle = Math.floor((this.lowerBound + this.upperBound) / 2);
  }
}

const mergeSort = (
  arr: number[],
  dispatcher: DispatcherArray,
  idx: Indexes = new Indexes(0, arr.length - 1)
): number[] => {
  if (idx.upperBound - idx.lowerBound + 1 < 2) {
    return arr;
  }
  mergeSort(arr, dispatcher, new Indexes(idx.lowerBound, idx.middle));
  mergeSort(arr, dispatcher, new Indexes(idx.middle + 1, idx.upperBound));
  merge(arr, dispatcher, idx);

  return arr;
};

const merge = (arr: number[], dispatcher: DispatcherArray, arrIdx: Indexes) => {
  const left = arr.slice(arrIdx.lowerBound, arrIdx.middle + 1);
  const right = arr.slice(arrIdx.middle + 1, arrIdx.upperBound + 1);
  let i = 0;
  let j = 0;
  let k = arrIdx.lowerBound;
  let green;
  let red;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      green = arrIdx.lowerBound + i;
      red = arrIdx.middle + 1 + j;
      i++;
    } else {
      arr[k] = right[j];
      green = arrIdx.middle + 1 + j;
      red = arrIdx.lowerBound + i;
      j++;
    }
    const topRange = range(arrIdx.lowerBound, arrIdx.middle);
    const bottomRange = range(arrIdx.middle + 1, arrIdx.upperBound);
    dispatcher.push([
      [...arr],
      [...topRange, ...bottomRange],
      [],
      [red],
      [green],
    ]);
    k++;
  }
  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
};

const mergeSortDispatcher = (arr: number[]) => {
  const dispatcher: DispatcherArray = [];
  mergeSort(arr, dispatcher);
  dispatcher.push([[...arr], range(0, arr.length), [], [], []]);
  return dispatcher;
};

export default mergeSortDispatcher;
