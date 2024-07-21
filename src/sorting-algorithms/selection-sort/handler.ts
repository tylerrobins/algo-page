const handler = (
  dispatcherArray: Array<[number[], number[], number, number, number]>,
  setArray: React.Dispatch<React.SetStateAction<number[]>>,
  setGreyIdxs: React.Dispatch<React.SetStateAction<number[]>>,
  setRedIdx: React.Dispatch<React.SetStateAction<number>>,
  setGreenIdx: React.Dispatch<React.SetStateAction<number>>,
  setOrangeIdx: React.Dispatch<React.SetStateAction<number>>
) => {
  const selectionSortSearchStep = (idx: number) => {
    const dispatcherJob = dispatcherArray[idx];
    setArray(dispatcherJob[0]);
    setGreyIdxs(dispatcherJob[1]);
    setRedIdx(dispatcherJob[2]);
    setGreenIdx(dispatcherJob[3]);
    setOrangeIdx(dispatcherJob[4]);
  };

  const n = dispatcherArray.length;
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      selectionSortSearchStep(i);
    }, i * 10);
  }
};
export default handler;
