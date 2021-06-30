// Write a function called sumIntervals / sum_intervals() that accepts an array of
// intervals, and returns the sum of all the interval lengths.Overlapping intervals
// should only be counted once.

//   Intervals
// Intervals are represented by a pair of integers in the form of an array.The
// first value of the interval will always be less than the second value.Interval
// example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//   [1, 4],
//   [7, 10],
//   [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since[1, 4] and[3, 5] overlap,
// we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals([
//   [1, 2],
//   [6, 10],
//   [11, 15]
// ]); // => 9

// sumIntervals([
//   [1, 4],
//   [7, 10],
//   [3, 5]
// ]); // => 7

// sumIntervals([
//   [1, 5],
//   [10, 20],
//   [1, 6],
//   [16, 19],
//   [5, 11]
// ]); // => 19

const sumIntervals = intervals => {
  const arrOfRanges = intervals.map(int => [...Array(int[1] + 1).keys()].splice(int[0]));
  for (let i = 0; i < arrOfRanges.length; i++) {
    let j = i + 1;
    if (j === arrOfRanges.length) continue;
    console.log(j);
    console.log(arrOfRanges[j])
    // if (arrOfRanges[i].includes(arrOfRanges[j][0])) console.log('yes')
  }
  console.log(arrOfRanges);
  console.log(arrOfRanges[0].includes(arrOfRanges[2][0]))
}

console.log(sumIntervals([
  [1, 5],
  [10, 20],
  [1, 6],
  [16, 19],
  [5, 11]
]));
