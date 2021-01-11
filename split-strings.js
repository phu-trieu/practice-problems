// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the
// missing second character of the final pair with an underscore('_').

//   Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

const split = str => {
  if (str.length % 2 !== 0) {
    str += '_';
  }
  return (str ? str.match(/\S ?\S/gi) : []);
}

console.log(split(''));
