import { useEffect, useState } from "react";
import { generateArr } from "../functions/generate-array";
import selection_dispatcher from "../sorting-algorithms/selection-sort/selection-dispatcher";
import "./style.css";

function SortingVisualiser() {
  const [array, setArray] = useState<number[]>([]);
  const [redIdx, setRedIdx] = useState<number>();

  useEffect(() => {
    const genArray = generateArr();
    setArray(genArray);
  }, []);

  const dispatcherArray = selection_dispatcher(array);

  const selectionSortSearchStep = (idx: number, arrLen: number) => {
    idx === arrLen - 1 ? setRedIdx(-1) : setRedIdx(idx);
    setArray(dispatcherArray[idx][0]);
  };

  const selectionSort = async () => {
    const n = dispatcherArray.length;
    for (let i = 0; i < n; i++) {
      setTimeout(async () => {
        await selectionSortSearchStep(i, n);
      }, i * 10);
    }
  };

  return (
    <>
      <div className="bar-container">
        {array.map((value, idx) => (
          <div
            className="bar-line"
            key={idx}
            style={{
              backgroundColor: idx === redIdx ? "red" : "black",
              height: `${value}px`,
            }}
          ></div>
          // <div className="bar-line">
          //     <p>{value}</p>
          // </div>
        ))}
      </div>
      <button onClick={selectionSort}>Selection Sort</button>
    </>
  );
}

export default SortingVisualiser;
