// Today's challenge lets us give respect to short words - words that are often
// overlooked but are also often the most important glue in a sentence! Can you
// write a function that, provided a string as an argument, returns the shortest
// words in the string lowercase and in sorted in alphabetical order?

const shortestWords = str => {
  const arr = str.split(' ');
  let shortestLength = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortestLength) {
      shortestLength = arr[i].length
    }
  }
  return arr.filter(word => word.length === shortestLength).sort((a, b) => a.localeCompare(b));
}

console.log(shortestWords('It\'s hot in Topeka, uh oh'));
