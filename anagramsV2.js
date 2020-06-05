// create a function like the one in anagrams.js, but allow the function to take
// any number of words, not just two
// e.g. ['taco', 'coat', 'octa']

const anagramsV2 = (array) => {
  if (array.length === 0) return false;

  const arrayOfObjects = [];
  for (let i = 0; i < array.length; i++) {
    arrayOfObjects.push({})
  }

  for (let wordIndex = 0; wordIndex < array.length; wordIndex++) {
    for (let charIndex = 0; charIndex < array[wordIndex].length; charIndex++) {
      const charAtWordIndex = array[wordIndex][charIndex];
      if (arrayOfObjects[wordIndex][charAtWordIndex] === undefined) {
        arrayOfObjects[wordIndex][charAtWordIndex] = 1;
        (arrayOfObjects[wordIndex])
      } else if (typeof arrayOfObjects[wordIndex][charAtWordIndex] === 'number') {
        arrayOfObjects[wordIndex][charAtWordIndex]++
        (arrayOfObjects[wordIndex][charAtWordIndex])
      }
    }
  }

  for (let i = 0; i < array.length - 1; i++) {
    const nextValue = i + 1;
    (nextValue)
    if (array[i].length !== array[nextValue].length) {
      return false;
    }
  }

  for (let i = 0; i < array.length - 1; i++) {
    const nextValue = i + 1;
    for (let j = 0; j < array[i].length; j++) {
      if (arrayOfObjects[i][array[i][j]] !== arrayOfObjects[nextValue][array[i][j]]) {
        return false;
      }
    }
  }

  return true;
}

anagramsV2(['taco', 'coat', 'octa']);
