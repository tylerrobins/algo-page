type DispatcherArray = Array<[number[], number[]]>;

const selection_dispatcher = (array: number[]) => {
  const currArray = [...array];
  const n = array.length;
  const dispatcher: DispatcherArray = [];
  for (let i = 0; i < n - 1; i++) {
    let currIdx = i;
    dispatcher[i] = [[...currArray], []];
    for (let j = i; j < n; j++) {
      if (currArray[j] < currArray[currIdx]) {
        currIdx = j;
        dispatcher[i][1].push(currIdx);
      }
    }
    if (currIdx !== i) {
      [[currArray[i], currArray[currIdx]]] = [
        [currArray[currIdx], currArray[i]],
      ];
    }
  }
  dispatcher[n - 1] = [[...currArray], []];
  return dispatcher;
};

export default selection_dispatcher;
