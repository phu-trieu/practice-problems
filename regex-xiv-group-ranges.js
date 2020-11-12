// Groups and ranges indicate groups and ranges of expression characters.The regular
// expression x | y matches either "x" or "y".

// const REGEXP = /blue|red/

// "red flag".match(REGEXP)  // red
// "blue flag".match(REGEXP)  // blue

// // Matches "blue" in "blue flag" and "red" in "red flag".
// Create a regular expression to match all red flag and blue flag in a string.You
// must use | in your expression.Flags can come in any order.

//   Examples
// "red flag blue flag".match(REGEXP) ➞["red flag", "blue flag"]

// "yellow flag red flag blue flag green flag".match(REGEXP) ➞["red flag", "blue flag"]

// "pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞
// ["red flag", "blue flag", "red flag"]

const REGEXP = /(red|blue) flag/gi;
const match = str => {
  return str.match(REGEXP);
}

console.log(match('red flag blue flag red red blue blue flag'))
