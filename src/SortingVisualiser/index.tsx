import { useEffect, useState } from "react";
import generateArr from "../functions/generate-array";
import handler from "../sorting-algorithms/handler";
import selectionDispatcher from "../sorting-algorithms/selectionDispatcher";
// import bubbleDispatcher from "../sorting-algorithms/bubbleDispatcher";
import insertionDispatcher from "../sorting-algorithms/insertionDispatcher";
// import mergeDispatcher from "../sorting-algorithms/mergeDispatcher";
// import quickDispatcher from "../sorting-algorithms/quickDispatcher";

function SortingVisualiser() {
  const [array, setArray] = useState<number[]>([]);
  const [redIdx, setRedIdx] = useState<number[]>([]);
  const [greenIdx, setGreenIdx] = useState<number[]>([]);
  const [orangeIdx, setOrangeIdx] = useState<number[]>([]);
  const [greyIdxs, setGreyIdxs] = useState<number[]>([]);

  useEffect(() => {
    const genArray = generateArr();
    setArray(genArray);
  }, []);

  const selectionSortHandler = () => {
    const dispatcher = selectionDispatcher(array);
    handler(
      dispatcher,
      setArray,
      setGreyIdxs,
      setRedIdx,
      setGreenIdx,
      setOrangeIdx,
      15
    );
  };

  // const bubbleSortHandler = () => {
  //   const dispatcher = bubbleDispatcher(array);
  //   handler(
  //     dispatcher,
  //     setArray,
  //     setGreyIdxs,
  //     setRedIdx,
  //     setGreenIdx,
  //     setOrangeIdx,
  //     12
  //   );
  // };

  const insertionSortHandler = () => {
    const dispatcher = insertionDispatcher(array);
    console.log(dispatcher);
    handler(
      dispatcher,
      setArray,
      setGreyIdxs,
      setRedIdx,
      setGreenIdx,
      setOrangeIdx,
      40
    );
  };

  // const mergeSortHandler = () => {
  //   const dispatcher = mergeDispatcher(array);
  //   handler(
  //     dispatcher,
  //     setArray,
  //     setGreyIdxs,
  //     setRedIdx,
  //     setGreenIdx,
  //     setOrangeIdx,
  //     30
  //   );
  // };

  // const quickSortHandler = () => {
  //   const dispatcher = quickDispatcher(array);
  //   handler(
  //     dispatcher,
  //     setArray,
  //     setGreyIdxs,
  //     setRedIdx,
  //     setGreenIdx,
  //     setOrangeIdx,
  //     30
  //   );
  // };

  return (
    <div className="px-10 py-14">
      <div className="">
        {array.map((value, idx) => (
          <div
            className="inline-block mx-0.5 w-4"
            key={idx}
            style={{
              backgroundColor: greenIdx.includes(idx)
                ? "green"
                : redIdx.includes(idx)
                ? "red"
                : orangeIdx.includes(idx)
                ? "orange"
                : greyIdxs.includes(idx)
                ? "grey"
                : "black",
              height: `${value}px`,
            }}
          ></div>
        ))}
        <div className="">
          <button
            className="m-1 p-2 border-2 border-black rounded-lg"
            onClick={selectionSortHandler}
          >
            Selection Sort
          </button>
          {/* <button
            className="m-1 p-2 border-2 border-black rounded-lg"
            onClick={bubbleSortHandler}
          >
            Bubble Sort
          </button> */}
          <button
            className="m-1 p-2 border-2 border-black rounded-lg"
            onClick={insertionSortHandler}
          >
            Insert Sort
          </button>
          {/* <button
            className="m-1 p-2 border-2 border-black rounded-lg"
            onClick={mergeSortHandler}
          >
            Merge Sort
          </button> */}
          {/* <button
            className="m-1 p-2 border-2 border-black rounded-lg"
            onClick={quickSortHandler}
          >
            Quick Sort
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default SortingVisualiser;
