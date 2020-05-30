// given a string, write a function that takes the string and returns the first unique character
// if no unique characters, return an underscore
// e.g. 'aaabcccddde' returns 'b'

const firstNonRepeatingCharacter = (string) => {
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] === undefined) {
      obj[string[i]] = 1
    } else if (typeof obj[string[i]] === "number"){
      obj[string[i]]++
    }
  }
  console.log(obj);
}

firstNonRepeatingCharacter('aaabcccddde');
