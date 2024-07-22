import { useEffect, useState, useRef } from "react";
import generateArr from "../functions/generate-array";
import handler from "../sorting-algorithms/handler";
import selectionDispatcher from "../sorting-algorithms/selectionDispatcher";
import bubbleDispatcher from "../sorting-algorithms/bubbleDispatcher";
import insertionDispatcher from "../sorting-algorithms/insertionDispatcher";
import mergeDispatcher from "../sorting-algorithms/mergeDispatcher";
import quickDispatcher from "../sorting-algorithms/quickDispatcher";
import { DispatcherArray } from "../sorting-algorithms/types";

export function useSorting() {
  const [array, setArray] = useState<number[]>([]);
  const [redIdx, setRedIdx] = useState<number[]>([]);
  const [greenIdx, setGreenIdx] = useState<number[]>([]);
  const [orangeIdx, setOrangeIdx] = useState<number[]>([]);
  const [greyIdxs, setGreyIdxs] = useState<number[]>([]);
  const [selectedAlgo, setSelectedAlgo] = useState("");
  const stopSortingRef = useRef(false);
  const cleanupRef = useRef<() => void>(() => {});

  useEffect(() => {
    const genArray = generateArr();
    setArray(genArray);
  }, []);

  useEffect(() => {
    if (selectedAlgo === "bubble") {
      bubbleSortHandler();
    } else if (selectedAlgo === "insertion") {
      insertionSortHandler();
    } else if (selectedAlgo === "merge") {
      mergeSortHandler();
    } else if (selectedAlgo === "quick") {
      quickSortHandler();
    } else if (selectedAlgo === "selection") {
      selectionSortHandler();
    } else {
      console.error("Invalid Algorithm input!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAlgo]);

  const startSorting = (dispatcher: DispatcherArray, speed: number) => {
    stopSortingRef.current = false;
    cleanupRef.current();
    cleanupRef.current = handler(
      dispatcher,
      setArray,
      setGreyIdxs,
      setRedIdx,
      setGreenIdx,
      setOrangeIdx,
      stopSortingRef,
      speed
    );
  };

  const selectionSortHandler = () => {
    startSorting(selectionDispatcher(array), 15);
  };

  const bubbleSortHandler = () => {
    startSorting(bubbleDispatcher(array), 15);
  };

  const insertionSortHandler = () => {
    startSorting(insertionDispatcher(array), 40);
  };

  const mergeSortHandler = () => {
    startSorting(mergeDispatcher(array), 30);
  };

  const quickSortHandler = () => {
    startSorting(quickDispatcher(array), 30);
  };
  const stopSorting = () => {
    stopSortingRef.current = true;
  };

  return {
    array,
    redIdx,
    greenIdx,
    orangeIdx,
    greyIdxs,
    setSelectedAlgo,
    stopSorting,
  };
}
