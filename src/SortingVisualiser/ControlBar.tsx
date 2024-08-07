import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import * as Separator from "@radix-ui/react-separator";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import * as HoverCard from "@radix-ui/react-hover-card";
import Button from "./AlgoButtonComponent";
import AlgoInfo from "./SortingAlgoInfo";

function ControlBar({
  generateSetArry,
  setSelectedAlgo,
  setSortingSpeed,
  stopSorting,
  algoRunning,
}: ControlBarProps) {
  const [tempAlgo, setTempAlgo] = useState("");
  const [tempSortSpeed, setTempSortingSpeed] = useState([5]);
  const runClass =
    tempAlgo === ""
      ? "border-gray-400 text-gray-400 border-2 px-3 py-0.5 rounded-md w-40"
      : "border-green-800 text-white border-2 px-3 py-0.5 rounded-md w-40 bg-green-800";

  const sortingSpeed = (e: number[]) => {
    const val = e[0];
    const speed = 200 + -22 * (val - 1);
    setSortingSpeed(speed);
  };

  const stopClearAlgo = () => {
    stopSorting();

    setSelectedAlgo("");
  };

  const newLocal = "flex flex-row mx-12";
  return (
    <div className={newLocal}>
      <div className="py-0.5 mt-5 mx-4">
        <button
          onClick={() => {
            stopClearAlgo();
            generateSetArry();
          }}
          className="border-black border-2 px-3 py-0.5 rounded-md w-28"
        >
          Reset
        </button>
      </div>
      <Separator.Root
        className="bg-gray-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-16 data-[orientation=vertical]:w-px mx-[15px] mt-2"
        decorative
        orientation="vertical"
      />
      <div className="">
        <div className="flex flex-row justify-center pb-2">
          {tempAlgo === "" ? (
            <p className="text-sm text-gray-500">Sorting Algorithms</p>
          ) : (
            <>
              <p className="text-sm text-gray-500">Sorting Algorithms: </p>
              <div className="pt-0.5">
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <InfoCircledIcon />
                  </HoverCard.Trigger>
                  <HoverCard.Portal>
                    <HoverCard.Content
                      className="data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[600px] rounded-md bg-white p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
                      sideOffset={5}
                      side="top"
                    >
                      <AlgoInfo algorithm={tempAlgo} />
                    </HoverCard.Content>
                  </HoverCard.Portal>
                </HoverCard.Root>
              </div>
            </>
          )}
        </div>

        <div>
          <Button
            onClick={() => setTempAlgo("bubble")}
            className="px-4 underline"
            selected={tempAlgo === "bubble" ? true : false}
          >
            Bubble Sort
          </Button>
          <Button
            onClick={() => setTempAlgo("insert")}
            className="px-4 underline"
            selected={tempAlgo === "insert" ? true : false}
          >
            Insertion Sort
          </Button>
          <Button
            onClick={() => setTempAlgo("merge")}
            className="px-4 underline"
            selected={tempAlgo === "merge" ? true : false}
          >
            Merge Sort
          </Button>
          <Button
            onClick={() => setTempAlgo("quick")}
            className="px-4 underline"
            selected={tempAlgo === "quick" ? true : false}
          >
            Quick Sort
          </Button>
          <Button
            onClick={() => setTempAlgo("selection")}
            className="px-4 underline"
            selected={tempAlgo === "selection" ? true : false}
          >
            Selection Sort
          </Button>
        </div>
      </div>
      <Separator.Root
        className="bg-gray-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-16 data-[orientation=vertical]:w-px mx-[15px] mt-2"
        decorative
        orientation="vertical"
      />
      <div className="py-0.5">
        <p className="text-sm text-gray-500 text-center">
          Sorting Speed: {tempSortSpeed[0]}
        </p>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-[200px] h-5 pt-4"
          defaultValue={[5]}
          max={10}
          min={1}
          step={1}
          onValueChange={(e) => setTempSortingSpeed(e)}
          onValueCommit={(e) => sortingSpeed(e)}
        >
          <Slider.Track className="bg-black relative grow rounded-full h-[3px]">
            <Slider.Range className="absolute bg-green-600 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-white shadow-[0_2px_10px] shadow-black rounded-[10px] hover:bg-green-600 focus:outline-none"
            aria-label="Volume"
          />
        </Slider.Root>
      </div>
      <Separator.Root
        className="bg-gray-500 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-16 data-[orientation=vertical]:w-px mx-[15px] mt-2"
        decorative
        orientation="vertical"
      />

      <div className="py-0.5 mt-5 mx-4">
        {algoRunning ? (
          <button
            className="border-red-600 bg-red-600 border-2 px-3 py-0.5 rounded-md w-40"
            onClick={stopClearAlgo}
          >
            Stop
          </button>
        ) : (
          <button
            className={runClass}
            onClick={() =>
              tempAlgo === ""
                ? alert(
                    "Click on one of the sorting algorithms before clicking run."
                  )
                : setSelectedAlgo(tempAlgo)
            }
          >
            Run Algorithm
          </button>
        )}
      </div>
    </div>
  );
}

export default ControlBar;
