// Write a function that accepts an array of 10 integers(between 0 and 9), that
// returns a string of those numbers in the form of a phone number.

//   Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//   Don't forget the space after the closing parentheses!

const createPhoneNumber = num => {
  const str = num.join('');
  const regex = /(\d{3})(\d{3})(\d{4})/gi
  return str.replace(regex, `($1) $2-$3`)
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))
