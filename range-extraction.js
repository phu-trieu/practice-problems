// A format for expressing an ordered list of integers is to use a comma separated
// list of either:

// - individual integers
// - or a range of integers denoted by the starting integer separated from the end
// integer in the range by a dash, '-'.The range includes all integers in the
// interval including both endpoints.It is not considered a range unless it spans
// at least 3 numbers.For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order
// and returns a correctly formatted string in the range format.

//   Example:

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// // returns "-6,-3-1,3-5,7-11,14,15,17-20"

const extract = list => {
  let str = '';
  let first;
  for (let i = 0; i < list.length; i++) {
    let current = list[i];
    let next = list[i + 1];
    let previous = list[i - 1];
    const end = list.length - 1;
    if (!first && next - current === 1 && list[i + 2] - current === 2) {
      first = current;
      str += `${first}-`;
    }
    if ((first && current - 1 === previous && current + 1 !== next && i !== end) || (!first && (current + 1 !== next || current - 1 !== previous) && i !== end)) {
      str += `${current},`;
      first = undefined;
    }
    if (i === end) {
      str += current;
    }
  }
  return str;
}


// ** Alternate, better solution **
// const extract = list => {
//   for (let i = 0; i < list.length; i++) {
//     let j = i;
//     while (list[j] - list[j+1] === -1) j++;
//     if (j !== i && j-i > 1) list.splice(i, j-i+1, `${list[i]}-${list[j]}`)
//   }
//   return list.join();
// }

console.log(extract([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
console.log(extract([1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 15, 16]));
