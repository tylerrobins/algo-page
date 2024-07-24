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
            <td className="px-4 py-2 text-center">{bestTComp}</td>
            <td className="px-4 py-2 text-center">{avgTComp}</td>
            <td className="px-4 py-2 text-center">{worstTComp}</td>
            <td className="px-4 py-2 text-center">{worstSpaComp}</td>
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
      desc="A simple sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.<br><br>Bubble Sort algorithm, traverse from left and compare adjacent elements and the higher one is placed at right side. In this way, the largest element is moved to the rightmost end at first. This process is then continued to find the second largest and place it and so on until the data is sorted."
      bestTComp="O(n^2)"
      avgTComp="O(n^2)"
      worstTComp="O(n^2)"
      worstSpaComp="O(1)"
    />
  );
}
function InsertionSort() {
  return (
    <Default
      title="Insertion Sort"
      desc="This is a full description etc......"
    />
  );
}
function MergeSort() {
  return (
    <Default title="Merge Sort" desc="This is a full description etc......" />
  );
}

function QuickSort() {
  return (
    <Default title="Quick Sort" desc="This is a full description etc......" />
  );
}
function SelectionSort() {
  return (
    <Default
      title="Selection Sort"
      desc="This is a full description etc......"
    />
  );
}

export { BubbleSort, InsertionSort, MergeSort, QuickSort, SelectionSort };
