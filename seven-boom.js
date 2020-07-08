// Create a function that takes an array of numbers and return "Boom!" if the
// number 7 appears in the array.Otherwise, return "there is no 7 in the array".

const sevenBoom = arr => {
  return (arr.join('').includes(7) ? 'Boom!' : 'there is no 7 in the array');
}

sevenBoom([1,2,3,4,5]);
