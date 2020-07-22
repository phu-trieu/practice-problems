// Have you heard about balanced words ? If a word is balanced, the sum of the
// values on the left - hand side of the word is equal to the sum of the values on
// the right - hand side.Each letter's value comes from its position in the alphabet
// (a=1, b=2, etc.) and can be summed to determine the left and right hand sums. If
// a word has an odd number of characters, the middle character should be ignored.
// Can you write a function that determines whether or not a word is balanced?

const balancedWords = string => {
  // string.charCodeAt()
  const half = parseInt((string.length / 2).toFixed(0));

  const a = string.slice(0, half-1);
  console.log(a);
  console.log(half+1)
  const b = string.slice(half, string.length);
  console.log(b);
}

balancedWords('abcba');
