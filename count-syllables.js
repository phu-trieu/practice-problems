// Create a function that counts the number of syllables a word has.Each syllable
// is separated with a dash -.

//   Examples
// numberSyllables("buf-fet") ➞ 2

// numberSyllables("beau-ti-ful") ➞ 3

// numberSyllables("mon-u-men-tal") ➞ 4

// numberSyllables("on-o-mat-o-poe-ia") ➞ 6

const countSyllables = word => {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '-') {
      counter++
    }
  }
  return counter + 1;
}

console.log((countSyllables("on-o-mat-o-poe-ia")));
