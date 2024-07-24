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
    generateSetArry,
    setSelectedAlgo,
    setSortingSpeed,
    stopSorting,
    algoRunning,
  } = useSorting();
  return (
    <div className="flex flex-col h-screen bg-gray-300">
      <div className="flex min-h-[830px] justify-center items-end bg-white mx-24 mt-10 pb-14 rounded-xl shadow-xl">
        <BarGraph
          array={array}
          redIdx={redIdx}
          greenIdx={greenIdx}
          orangeIdx={orangeIdx}
          greyIdxs={greyIdxs}
        />
      </div>
      <div className="flex justify-center w-full text-lg mt-8">
        <ControlBar
          generateSetArry={generateSetArry}
          setSelectedAlgo={setSelectedAlgo}
          setSortingSpeed={setSortingSpeed}
          stopSorting={stopSorting}
          algoRunning={algoRunning}
        />
      </div>
    </div>
  );
}

export default SortingVisualiser;
