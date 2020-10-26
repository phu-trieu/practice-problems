// Its raining...words ? We need to collect words into our buckets! Let's try to
// write a function that splits a sentence into buckets of words. Each bucket can
// have a provided number of characters or less (spaces count as one character).
// If the whole sentence is unable to fit inside buckets, then we have to return
// an empty array :( Here is an example:

// collectWords("the mouse can creep", 10)
// ➞["the mouse", "can creep",]

const collectWords = (str, num) => {
  const arr = str.split(' ');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    let words = arr[i];
    if (arr[i].length > num) {
      continue;
    }
    for (let j = i+1; j <= arr.length; j++) {
      if (j === arr.length) {
        if (words.length <= num) {
          newArr.push(words)
        }
        break;
      }
      count = words.length + arr[j].length + 1;
      if (count > num) {
        i = j - 1;
        newArr.push(words);
        break;
      } else if (count <= num && j === arr.length - 1) {
          words += ` ${arr[j]}`;
          newArr.push(words);
          return newArr;
      }
      words += ` ${arr[j]}`;
    }
  }
  return newArr;
}

console.log(collectWords("the mouse can creep expeditiously", 100));
console.log(collectWords("the mouse can creep expeditiously", 13));
console.log(collectWords("the mouse can creep expeditiously", 5));
console.log(collectWords("the mouse can creep expeditiously", 3));
console.log(collectWords("the mouse can creep expeditiously", 2));
