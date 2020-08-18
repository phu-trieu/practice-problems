// Can you write a function that takes an array of values and remove all duplicate
// elements in the array ? Make sure to return the array with only the unique values
// remaining.

const duplicateValueDeleter = arr => {
  return console.log(arr.filter((v, i) => arr.indexOf(v) === i))
}

duplicateValueDeleter([3, 1, 2, 2, 3, 3, 3, 1, 3, 4]);
