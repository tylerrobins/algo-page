function BarGraph({
  array,
  redIdx,
  greenIdx,
  orangeIdx,
  greyIdxs,
}: BarGraphProps) {
  return (
    <div className="flex-1 px-12 py-14">
      <div>
        {array.map((value, idx) => (
          <div
            className="inline-block mx-0.5 w-4 rounded-t-md"
            key={idx}
            style={{
              backgroundColor: greenIdx.includes(idx)
                ? "green"
                : redIdx.includes(idx)
                ? "red"
                : orangeIdx.includes(idx)
                ? "orange"
                : greyIdxs.includes(idx)
                ? "grey"
                : "black",
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BarGraph;
