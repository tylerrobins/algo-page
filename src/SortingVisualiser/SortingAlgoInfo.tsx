interface DefaultProps {
  title: string;
  desc: string;
  bestTComp: string;
  avgTComp: string;
  worstTComp: string;
  worstSpaComp: string;
}

function Default({
  title,
  desc,
  bestTComp,
  avgTComp,
  worstTComp,
  worstSpaComp,
}: DefaultProps) {
  const formattedDesc = desc.replace(/\n/g, "<br/>");
  return (
    <>
      <h1 className="text-center text-lg font-bold">{title}</h1>
      <hr className="my-3 mx-3" />
      <p
        className="mx-8"
        dangerouslySetInnerHTML={{ __html: formattedDesc }}
      ></p>
      <table className="table-auto mx-auto my-6">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-200 px-4 py-2 text-center"></th>
            <th className="border-b-2 border-gray-200 px-4 py-2 text-center">
              Time Complexity
            </th>
            <th className="border-b-2 border-gray-200 px-4 py-2 text-center"></th>
            <th className="border-b-2 border-gray-200 px-4 py-2 text-center">
              Space Complexity
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="border-b-2 border-gray-200 px-4 py-2 text-center">
              Best
            </th>
            <th className="border-b-2 border-gray-200 px-4 py-2 text-center">
              Average
            </th>
            <th className="border-b-2 border-gray-200 px-4 py-2 text-center">
              Worst
            </th>
            <th className="border-b-2 border-gray-200 px-4 py-2 text-center">
              Worst
            </th>
          </tr>
          <tr>
            <td
              className="px-4 py-2 text-center"
              dangerouslySetInnerHTML={{ __html: bestTComp }}
            ></td>
            <td
              className="px-4 py-2 text-center"
              dangerouslySetInnerHTML={{ __html: avgTComp }}
            ></td>
            <td
              className="px-4 py-2 text-center"
              dangerouslySetInnerHTML={{ __html: worstTComp }}
            ></td>
            <td
              className="px-4 py-2 text-center"
              dangerouslySetInnerHTML={{ __html: worstSpaComp }}
            ></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

function BubbleSort() {
  return (
    <Default
      title="Bubble Sort"
      desc="A simple sorting algorithm that works by repeatedly swapping the elements at n and n-1 if they are in the wrong order (n-1 is bigger than n).<br>Going through the data from left and compare adjacent elements and the higher one is placed at right side. In this way, the largest element is moved to the rightmost end at first. This process is then continued to find the second largest and place it and so on until the data is sorted."
      bestTComp="O(n)"
      avgTComp="O(n<sup>2</sup>)"
      worstTComp="O(n<sup>2</sup>)"
      worstSpaComp="O(1)"
    />
  );
}
function InsertionSort() {
  return (
    <Default
      title="Insertion Sort"
      desc="A simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list.<br><br>It is a stable sorting algorithm, meaning that elements with equal values maintain their relative order in the sorted output."
      bestTComp="O(n)"
      avgTComp="O(n<sup>2</sup>)"
      worstTComp="O(n<sup>2</sup>)"
      worstSpaComp="O(1)"
    />
  );
}
function MergeSort() {
  return (
    <Default
      title="Merge Sort"
      desc="A sorting algorithm that follows the divide-and-conquer approach.<br><br>It works by recursively dividing the input array into smaller subarrays, until the last subarray only has one value, and sorting those subarrays then merging them back together to obtain the sorted array."
      bestTComp="O(n log<sub>n</sub>)"
      avgTComp="O(n log<sub>n</sub>)"
      worstTComp="O(n log<sub>n</sub>)"
      worstSpaComp="O(n)"
    />
  );
}

function QuickSort() {
  return (
    <Default
      title="Quick Sort"
      desc="A sorting algorithm based on the divide-and-conquer algorithm.<br><br>It picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array."
      bestTComp="O(n log<sub>n</sub>))"
      avgTComp="O(n log<sub>n</sub>)"
      worstTComp="O(n<sup>2</sup>)"
      worstSpaComp="O(n)"
    />
  );
}
function SelectionSort() {
  return (
    <Default
      title="Selection Sort"
      desc="A simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list."
      bestTComp="O(n<sup>2</sup>)"
      avgTComp="O(n<sup>2</sup>)"
      worstTComp="O(n<sup>2</sup>)"
      worstSpaComp="O(1)"
    />
  );
}

function AlgoInfo({ algorithm }: { algorithm: string }) {
  switch (algorithm) {
    case "bubble":
      return <BubbleSort />;
    case "insert":
      return <InsertionSort />;
    case "merge":
      return <MergeSort />;
    case "quick":
      return <QuickSort />;
    case "selection":
      return <SelectionSort />;
    default:
      return;
  }
}

export default AlgoInfo;
