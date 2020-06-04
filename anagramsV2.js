// create a function like the one in anagrams.js, but allow the function to take
// any number of words, not just two
// e.g. ['taco', 'coat', 'octa']

const anagramsV2 = (array) => {
  // create an empty array, then loop through the array
  // that's given as an argument. for each iteration,
  // push an empty object into the arrayOfObjects
  const arrayOfObjects = [];
  for (let i = 0; i < array.length; i++) {
    arrayOfObjects.push({})
  }
  console.log(arrayOfObjects)

  // now loop through the argument array. for each iteration,
  // loop through each word and convert them into key-value
  // pairs of char: char count
  for (let wordIndex = 0; wordIndex < array.length; wordIndex++) {
    for (let charIndex = 0; charIndex < array[wordIndex].length; charIndex++) {
      const charAtWordIndex = array[wordIndex][charIndex];
      if (arrayOfObjects[wordIndex][charAtWordIndex] === undefined) {
        arrayOfObjects[wordIndex][charAtWordIndex] = 1;
        console.log(arrayOfObjects[wordIndex])
      } else if (typeof arrayOfObjects[wordIndex][charAtWordIndex] === 'number') {
        arrayOfObjects[wordIndex][charAtWordIndex]++
        console.log(arrayOfObjects[wordIndex][charAtWordIndex])
      }
    }
  }
}

anagramsV2(['taco', 'coat', 'octa']);
