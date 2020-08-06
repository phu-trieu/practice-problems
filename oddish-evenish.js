// Create a function that determines whether a number is Oddish or Evenish. A
// number is Oddish if the sum of all of its digits is odd, and a number is Evenish
// if the sum of all of its digits is even. If a number is Oddish, return "Oddish".
// Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4.
// oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

const oddishOrEvenish = num => {
  return ((JSON.stringify(num).split('').map(digit => parseInt(digit)).reduce((acc, value) => acc + value)) % 2 === 0 ? 'Evenish' : 'Oddish');
}

oddishOrEvenish(121);
