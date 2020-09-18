// Write a function that takes in a string and returns the index of the first vowel
// in the string.Y is not considered a vowel, the string should always contain a
// vowel, and the string must be only one word.

const firstVowel = str => {
  if (str.split(' ').length > 1) return 'String must only be one word';
  if (!str.match(/[aeiou]/gi)) return 'String must have at least one vowel';

  const firstVowel = str.match(/[aeiou]/gi)[0];
  return str.indexOf(firstVowel);
}

console.log(firstVowel('my'));
