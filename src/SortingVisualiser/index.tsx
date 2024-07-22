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
  } = useSorting();
  return (
    <div className="flex">
      <ControlBar setSelectedAlgo={setSelectedAlgo} stopSorting={stopSorting} />
      <BarGraph
        array={array}
        redIdx={redIdx}
        greenIdx={greenIdx}
        orangeIdx={orangeIdx}
        greyIdxs={greyIdxs}
      />
    </div>
  );
}

export default SortingVisualiser;
