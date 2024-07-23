interface BarGraphProps {
  array: number[];
  redIdx: number[];
  greenIdx: number[];
  orangeIdx: number[];
  greyIdxs: number[];
}

interface ControlBarProps {
  setSelectedAlgo: React.Dispatch<React.SetStateAction<string>>;
  stopSorting: MutableRefObject<boolean>;
  algoRunning: boolean;
}
