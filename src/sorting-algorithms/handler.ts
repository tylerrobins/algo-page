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
  sortingSpeed: number,
  setAlgoRunning: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const timeouts: NodeJS.Timeout[] = [];
  setAlgoRunning(true);

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
      if (i === n - 1) {
        setAlgoRunning(false);
      }
    }, i * sortingSpeed);
    timeouts.push(timeout);
  }
  return () => {
    timeouts.forEach((timeout) => clearTimeout(timeout));
    setAlgoRunning(false);
  };
};
export default handler;
