// Write a function that returns true if both numbers are:

// Smaller than 0, OR ...
// Greater than 0, OR ...
// Exactly 0
// Otherwise, return false.

const bothPosNegOrBoth = (num1, num2) => {
  return ((num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0) || (num1 === 0 && num2 === 0) ? true : false);
}

bothPosNegOrBoth(0,0);
