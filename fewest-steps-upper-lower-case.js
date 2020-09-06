// Write a function that returns the fewest number of steps it will take to convert
// a string into uppercase or into lower case, whichever takes the least number of
// steps.A step occurs when a character is changed from lower to upper case, or
// vice versa.Return 0 if the string is empty or if there are no steps needed to be
// taken.

const steps = str => {
  if (!str || str === str.toLowerCase() || str === str.toUpperCase()) {
    return 0;
  }

  let toLowerCase = 0;
  let toUpperCase = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      toUpperCase++
    } else if (str[i] === str[i].toUpperCase()) {
      toLowerCase++
    }
  }
  return (toLowerCase > toUpperCase ? toUpperCase : toLowerCase);
}

console.log(steps('I\'m gonna do what\'s called a pro gamer move'));
