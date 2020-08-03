// Beginner programmer John Doe wants to make a program that adds and outputs each
// positive digit entered by the user(range is int).For instance, the result of 5528
// is 20 and the result of 6714283 is 31.

const numberAdder = number => {
  return console.log(JSON.stringify(number).split('').map(num => parseInt(num)).reduce((acc, value) => acc + value));
}

numberAdder(123456);
