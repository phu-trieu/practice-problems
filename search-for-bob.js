// Write a function that searches an array of names(unsorted) for the name "Bob"
// and returns the location in the array.If Bob is not in the array, return -1.

const searchForBob = arr => {
  return console.log(arr.findIndex(element => element === 'Bob'));
}

searchForBob(['Abby', 'Carl', 'Bob', 'Dave', 'Edith']);
