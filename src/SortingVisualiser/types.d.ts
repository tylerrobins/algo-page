interface BarGraphProps {
  array: number[];
  redIdx: number[];
  greenIdx: number[];
  orangeIdx: number[];
  greyIdxs: number[];
}

interface ControlBarProps {
  generateSetArry: () => void;
  setSelectedAlgo: React.Dispatch<React.SetStateAction<string>>;
  setSortingSpeed: React.Dispatch<React.SetStateAction<number>>;
  stopSorting: MutableRefObject<boolean>;
  algoRunning: boolean;
}
