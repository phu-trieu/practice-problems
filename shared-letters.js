// Write a function that receives two strings and returns a string that contains
// only the letters that are shared between both strings.If there are none, return
// an empty string.Put the string in alphabetical order before returning it.

const sharedLetters = (str1, str2) => {
  let sharedStr = '';
  let shorterStr = str1;
  let longerStr = str2;
  if (str1.length > str2.length) {
    shorterStr = str2;
    longerStr = str1;
  }
  for (let i = 0; i < shorterStr.length; i++) {
    if (longerStr.includes(shorterStr[i]) && !sharedStr.includes(shorterStr[i])) {
      sharedStr += shorterStr[i]
    }
  }
  return sharedStr.split('').sort().join('');
}

console.log(sharedLetters('book', 'look'));
