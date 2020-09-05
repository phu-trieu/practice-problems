// Write a function that takes a string and returns a coded version of the string.
// Your function should replace all 'a's with '4's, 'e's with '3's, 'i's with '1's,
// 'o's with '0's, and 's's with '5's.

const geekSpeak = str => {
  return str.split('').map(v => {
    if (v === 'a' || v === 'A') {
      return v = '4'
    }
    if (v === 'e' || v === 'E') {
      return v = '3'
    }
    if (v === 'i' || v === 'I') {
      return v = '1'
    }
    if (v === 'o' || v === 'O') {
      return v = '0'
    }
    if (v === 's' || v === 'S') {
      return v = '5'
    }
    return v;
  }).join('');
}

console.log(geekSpeak('Where\'s the lamb sauce'));
