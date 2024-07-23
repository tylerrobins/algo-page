import BarGraph from "./BarGraph";
import ControlBar from "./ControlBar";
import { useSorting } from "./useSorting";

function SortingVisualiser() {
  const {
    array,
    redIdx,
    greenIdx,
    orangeIdx,
    greyIdxs,
    setSelectedAlgo,
    stopSorting,
    algoRunning,
  } = useSorting();
  return (
    <div className="flex flex-col h-screen bg-gray-400">
      <div className="flex min-h-[830px] justify-center items-end bg-white mx-24 mt-10 p-8 rounded-xl">
        <BarGraph
          array={array}
          redIdx={redIdx}
          greenIdx={greenIdx}
          orangeIdx={orangeIdx}
          greyIdxs={greyIdxs}
        />
      </div>
      <div className="flex justify-center bg-gray-400 w-full h-52 text-lg mt-10">
        <ControlBar
          setSelectedAlgo={setSelectedAlgo}
          stopSorting={stopSorting}
          algoRunning={algoRunning}
        />
      </div>
    </div>
  );
}

export default SortingVisualiser;
