import generateArr from "../src/functions/generate-array";
import bubbleDispatcher from "../src/sorting-algorithms/bubbleDispatcher";

const testArrs: number[][] = [];
for (let i = 0; i < 100; i++) {
  testArrs.push(generateArr());
}

for (let i = 0; i < testArrs.length; i++) {
  test(`Bubble sort dispatcher, test ${i}`, () => {
    const dispatcherTest = bubbleDispatcher(testArrs[i]);
    const sortedTestArr = testArrs[i].sort((a, b) => a - b);
    expect(dispatcherTest[dispatcherTest.length - 1][0]).toEqual(sortedTestArr);
  });
}
