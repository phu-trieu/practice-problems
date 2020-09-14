// Today's problem is short and to the point: Write a function that takes a string
// and returns the string in reversed order.

const reverseString = str => {
  return str.split('').reverse().join('');
}

console.log(reverseString('olleH'));
