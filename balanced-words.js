// Have you heard about balanced words ? If a word is balanced, the sum of the
// values on the left - hand side of the word is equal to the sum of the values on
// the right - hand side.Each letter's value comes from its position in the alphabet
// (a=1, b=2, etc.) and can be summed to determine the left and right hand sums. If
// a word has an odd number of characters, the middle character should be ignored.
// Can you write a function that determines whether or not a word is balanced?

const balancedWords = string => {
  let c = string.split('');
  let firstHalf = 0;
  let secondHalf = 0;

  if (string.length % 2 !== 0) {
    c.splice(Math.floor(string.length / 2), 1);
  }

  const half = Math.floor((c.length / 2));

  const a = c.slice(0, half);
  const b = c.slice(half, string.length);

  for (let i = 0; i < a.length; i++) {
    firstHalf += a[i].charCodeAt();
    secondHalf += b[i].charCodeAt();
  }

  return (firstHalf === secondHalf ? console.log('This is a balanced word') : console.log('This is not a balanced word'))
}

balancedWords('abcba');
