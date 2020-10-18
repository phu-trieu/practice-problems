// Short and sweet: Create a function that finds the index of a given item in an array.

//   example: findMyIndex([1, 2, 3], 3) ➞ 2

const findIndex = (arr, val) => {
  return arr.indexOf(val);
}

console.log(findIndex([1, 2, 3, 4, 5], 4));
