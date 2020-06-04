// Anagrams are words that contain the exact same letters in the same quantity.
// Robin challenges you to write a function that accepts two words and returns true
// if they are anagrams. BONUS: write the function so that it can receive any number
// of words and returns true if all of them are anagrams of each other.

const anagrams = (word1, word2) => {
  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < word1.length; i++) {
    if (obj1[word1[i]] === undefined) {
      obj1[word1[i]] = 1;
    } else if (typeof obj1[word1[i]] === "number") {
      obj1[word1[i]]++
    }
  }

  for (let i = 0; i < word2.length; i++) {
    if (obj2[word2[i]] === undefined) {
      obj2[word2[i]] = 1;
    } else if (typeof obj2[word1[i]] === "number") {
      obj2[word2[i]]++
    }
  }

  const obj1Props = Object.getOwnPropertyNames(obj1);
  const obj2Props = Object.getOwnPropertyNames(obj2);

  if (obj1Props.length !== obj2Props.length) return console.log(false);

  for (let i = 0; i < obj1Props.length; i++) {
    const propName = obj1Props[i];
    if (obj1[propName] !== obj2[propName]) return console.log(false);
  }

  return console.log(true);
}

anagrams('asdfghjkl', 'lkjhgfdsa');
