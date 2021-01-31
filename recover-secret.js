// There is a secret string which is unknown to you.Given a collection of random
// triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter
// occurs somewhere before the next in the given string. "whi" is a triplet for the
// string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the
// secret string.

// You can assume nothing about the triplets given to you other than that they are
// valid triplets and that they contain sufficient information to deduce the
// original string.In particular, this means that the secret string will never
// contain letters that do not occur in one of the triplets given to you.

const recoverSecret = triplets => {
  const arr = [];
  triplets.forEach(entry => {
    let x = entry[0];
    let y = entry[1];
    let z = entry[2];
    if (!arr.includes(x)) {
      arr.unshift(x);
    }
    if (!arr.includes(y)) {
      arr.splice(arr.indexOf(x) + 1, 0, y);
    }
    if (arr.includes(y) && arr.indexOf(y) < arr.indexOf(x)) {
      arr.splice(arr.indexOf(y), 1);
      arr.splice(arr.indexOf(x) + 1, 0, y);
    }
    if (!arr.includes(z)) {
      arr.splice(arr.indexOf(y) + 1, 0, z);
    }
    if (arr.includes(z) && arr.indexOf(z) < arr.indexOf(y)) {
      arr.splice(arr.indexOf(z), 1);
      arr.splice(arr.indexOf(y) + 1, 0, z);
    }
  })
  return arr.join('');
}

console.log(recoverSecret([
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
]))
