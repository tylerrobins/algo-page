import type { QueueArray } from "../sorting-algorithms/types";
import { useEffect, useState, useRef } from "react";
import generateArr from "../functions/generate-array";
import handler from "../sorting-algorithms/handler";
import selectionQueue from "../sorting-algorithms/selectionQueue";
import bubbleQueue from "../sorting-algorithms/bubbleQueue";
import insertionQueue from "../sorting-algorithms/insertionQueue";
import mergeQueue from "../sorting-algorithms/mergeQueue";
import quickQueue from "../sorting-algorithms/quickQueue";

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

  const startSorting = (queue: QueueArray, speed: number) => {
    stopSortingRef.current = false;
    cleanupRef.current();
    cleanupRef.current = handler(
      queue,
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
    startSorting(selectionQueue(array), 15);
  };

  const bubbleSortHandler = () => {
    startSorting(bubbleQueue(array), 15);
  };

  const insertionSortHandler = () => {
    startSorting(insertionQueue(array), 40);
  };

  const mergeSortHandler = () => {
    startSorting(mergeQueue(array), 30);
  };

  const quickSortHandler = () => {
    startSorting(quickQueue(array), 30);
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
