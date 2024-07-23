import { MutableRefObject } from "react";
import type { QueueArray } from "./types";

const handler = (
  queueArray: QueueArray,
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
    const queueJob = queueArray[idx];
    setArray(queueJob.getCurrentArr());
    setGreyIdxs(queueJob.getColor("grey"));
    setOrangeIdx(queueJob.getColor("orange"));
    setGreenIdx(queueJob.getColor("green"));
    setRedIdx(queueJob.getColor("red"));
  };

  const n = queueArray.length;
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
