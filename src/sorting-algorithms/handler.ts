import { MutableRefObject } from "react";
import { DispatcherArray } from "./types";

const handler = (
  dispatcherArray: DispatcherArray,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setGreyIdxs: React.Dispatch<React.SetStateAction<number[]>>,
  setRedIdx: React.Dispatch<React.SetStateAction<number[]>>,
  setGreenIdx: React.Dispatch<React.SetStateAction<number[]>>,
  setOrangeIdx: React.Dispatch<React.SetStateAction<number[]>>,
  stopSortingRef: MutableRefObject<boolean>,
  sortingSpeed: number
) => {
  const timeouts: NodeJS.Timeout[] = [];

  const sortSteps = (idx: number) => {
    if (stopSortingRef.current) {
      setGreyIdxs([]);
      setOrangeIdx([]);
      setGreenIdx([]);
      setRedIdx([]);
      return;
    }
    const dispatcherJob = dispatcherArray[idx];
    setArray(dispatcherJob.getCurrentArr());
    setGreyIdxs(dispatcherJob.getColor("grey"));
    setOrangeIdx(dispatcherJob.getColor("orange"));
    setGreenIdx(dispatcherJob.getColor("green"));
    setRedIdx(dispatcherJob.getColor("red"));
  };

  const n = dispatcherArray.length;
  for (let i = 0; i < n; i++) {
    const timeout = setTimeout(() => {
      sortSteps(i);
    }, i * sortingSpeed);
    timeouts.push(timeout);
  }

  return () => {
    timeouts.forEach((timeout) => clearTimeout(timeout));
  };
};
export default handler;
