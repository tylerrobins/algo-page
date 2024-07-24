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
  const [algoRunning, setAlgoRunning] = useState(false);
  const [sortingSpeed, setSortingSpeed] = useState(20);
  const stopSortingRef = useRef(false);
  const cleanupRef = useRef<() => void>(() => {});

  useEffect(() => {
    generateSetArry();
  }, []);

  useEffect(() => {
    if (selectedAlgo === "bubble") {
      startSorting(bubbleQueue(array), sortingSpeed);
    } else if (selectedAlgo === "insert") {
      startSorting(insertionQueue(array), sortingSpeed);
    } else if (selectedAlgo === "merge") {
      startSorting(mergeQueue(array), sortingSpeed);
    } else if (selectedAlgo === "quick") {
      startSorting(quickQueue(array), sortingSpeed);
    } else if (selectedAlgo === "selection") {
      startSorting(selectionQueue(array), sortingSpeed);
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
      speed,
      setAlgoRunning
    );
  };

  const stopSorting = () => {
    stopSortingRef.current = true;
    setRedIdx([]);
    setGreenIdx([]);
    setOrangeIdx([]);
    setGreyIdxs([]);
    setAlgoRunning(false);
  };

  const generateSetArry = () => {
    const genArray = generateArr();
    setArray(genArray);
  };

  return {
    array,
    redIdx,
    greenIdx,
    orangeIdx,
    greyIdxs,
    generateSetArry,
    setSelectedAlgo,
    setSortingSpeed,
    stopSorting,
    algoRunning,
  };
}
