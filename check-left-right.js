// Write a function that reads an array and will return every element in the array
// that is greater than both the number on their left and the number on their right.
// The first and last number in the array do not count.If no numbers like this exist,
// return an empty array.

const checkLeftRight = arr => {
  return arr.filter((x, i, a) => a[i] > a[i-1] && a[i] > a[i+1]);
}

console.log(checkLeftRight([1,2,1,4,3,5,4,6,7,1]), checkLeftRight([1,2,3,4,5,6,7]));
