import { useState } from "react";

function ControlBar({ setSelectedAlgo, stopSorting }: ControlBarProps) {
  const [tempAlgo, setTempAlgo] = useState("");

  return (
    <div className="w-60 h-screen p-3">
      <div className="bg-teal-900 w-full h-full rounded-md p-6">
        <div className="flex flex-col">
          <select
            className="flex"
            onChange={(e) => setTempAlgo(e.target.value)}
          >
            <option value=""></option>
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="merge">Merge Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="selection">Selection Sort</option>
          </select>
          <button
            className="flex"
            onClick={() => {
              setSelectedAlgo(tempAlgo);
            }}
          >
            Run Algorithm
          </button>
          <button className="flex" onClick={stopSorting}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default ControlBar;
