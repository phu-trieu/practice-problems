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
  newArr.push(arr[0] + ' ' + arr[1]);
  newArr.push(arr[2] + ' ' + arr[3])
  return newArr;
}

console.log(collectWords("the mouse can creep", 10));

// "the mouse can creep" => 19 characters
// 19 / 10 = 1.9 ~ 2 => split string into 2 sections => 19 / 2 = 9.5 ~ 9
// str.split('').map(split each word) => [[t, h, e], [m, o, u, s, e], [c, a, n], [c, r, e, e, p]]
