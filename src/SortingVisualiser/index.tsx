import { useEffect, useState } from "react";
import { generateArr } from "../functions/generate-array";
import {
  selectionDispatcher,
  selectionHandler,
} from "../sorting-algorithms/selection-sort";
import "./style.css";

function SortingVisualiser() {
  const [array, setArray] = useState<number[]>([]);
  const [redIdx, setRedIdx] = useState<number>(-1);
  const [greenIdx, setGreenIdx] = useState<number>(-1);
  const [orangeIdx, setOrangeIdx] = useState<number>(-1);
  const [greyIdxs, setGreyIdxs] = useState<number[]>([]);

  useEffect(() => {
    const genArray = generateArr();
    setArray(genArray);
  }, []);

  const selectionSortDispatcherArr = selectionDispatcher(array);
  const selectionSortHandler = () => {
    selectionHandler(
      selectionSortDispatcherArr,
      setArray,
      setGreyIdxs,
      setRedIdx,
      setGreenIdx,
      setOrangeIdx
    );
  };

  return (
    <>
      <div className="bar-container">
        {array.map((value, idx) => (
          <div
            className="bar-line"
            key={idx}
            style={{
              backgroundColor:
                idx === redIdx
                  ? "green"
                  : idx === greenIdx
                  ? "red"
                  : idx === orangeIdx
                  ? "orange"
                  : idx in greyIdxs
                  ? "grey"
                  : "black",
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
      <button onClick={selectionSortHandler}>Selection Sort</button>
    </>
  );
}

export default SortingVisualiser;
