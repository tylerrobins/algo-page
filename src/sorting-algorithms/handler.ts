import { DispatcherArray } from "./types";

const handler = (
  dispatcherArray: DispatcherArray,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setGreyIdxs: React.Dispatch<React.SetStateAction<number[]>>,
  setRedIdx: React.Dispatch<React.SetStateAction<number[]>>,
  setGreenIdx: React.Dispatch<React.SetStateAction<number[]>>,
  setOrangeIdx: React.Dispatch<React.SetStateAction<number[]>>,
  sortingSpeed: number
) => {
  const sortSteps = (idx: number) => {
    const dispatcherJob = dispatcherArray[idx];
    setArray(dispatcherJob[0]);
    setGreyIdxs(dispatcherJob[1]);
    setOrangeIdx(dispatcherJob[2]);
    setGreenIdx(dispatcherJob[3]);
    setRedIdx(dispatcherJob[4]);
  };

  const n = dispatcherArray.length;
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      sortSteps(i);
    }, i * sortingSpeed);
  }
};
export default handler;
