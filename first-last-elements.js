// Create a function that takes an array of numbers and return the first and
// last elements as a new array.

const firstLastElements = array => {
  const arr = new Array;
  arr.push(array[0]);
  arr.push(array[array.length - 1]);
  return arr;
}

firstLastElements([1,2,3,4,5,6]);
